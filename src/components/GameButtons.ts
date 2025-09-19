import { addClickEffect, addHoverPointer } from '~/utils'
import { BettingArea } from './BettingArea'
import { Snackbar } from './Snackbar'
import useEmit from '~/composables/useEmit'
import user from '~/states/user'

const { regClass, property } = Laya

@regClass()
export class GameButtons extends Laya.Script {
	@property(Laya.ViewStack)
	cancelButton: Laya.ViewStack

	@property(Laya.ViewStack)
	rebetButton: Laya.ViewStack

	@property(Laya.ViewStack)
	confirmButton: Laya.ViewStack

	@property(Laya.ViewStack)
	bettingAreaContainer: Laya.ViewStack

	private snackbar: Laya.ViewStack

	onAwake(): void {
		this.snackbar = this.owner.scene.getChildByName('Snackbar') as Laya.ViewStack
		const snackbar = this.snackbar.getComponent(Snackbar)

		addHoverPointer([this.cancelButton, this.rebetButton, this.confirmButton])
		addClickEffect([this.cancelButton, this.rebetButton, this.confirmButton])

		this.cancelButton.on(Laya.Event.CLICK, () => {
			const bettingAreas = this.getBettingAreas()

			for (const bettingArea of bettingAreas) {
				bettingArea.property.cancelBet()
			}
		})

		this.confirmButton.on(Laya.Event.CLICK, () => {
			const bettingAreas = this.getBettingAreas()

			const betAmounts = bettingAreas
				.filter((b) => b.property.bet.placed > 0)
				.map((b) => ({
					[b.property.type]: b.property.bet.placed,
				}))

			const hasBelowMinimum = bettingAreas
				.map((bA) => {
					const totalBet = bA.property.bet.placed + bA.property.bet.confirmed

					return totalBet < bA.property.minimumBet && totalBet !== 0
				})
				.some((below) => below)

			for (const bettingArea of bettingAreas) {
				bettingArea.property.confirmBet()
			}

			snackbar.toggle()

			useEmit().send({
				main: {
					'balance-updated': user.tempBalance,
				},
				'game-state': { confirmed: true },
			})
		})
	}

	getBettingAreas(): { component: Laya.ViewStack; property: BettingArea }[] {
		const baNames = ['x1', 'x2', 'x5', 'x10', 'x20', 'x40']
		const betLimits: { [key: string]: { min: number; max: number } } = {
			x1: { min: 50, max: 10000 },
			x2: { min: 50, max: 5000 },
			x5: { min: 50, max: 2500 },
			x10: { min: 50, max: 1000 },
			x20: { min: 50, max: 500 },
			x40: { min: 50, max: 100 },
		}

		return baNames.map((bName) => {
			const component = this.bettingAreaContainer.getChildByName(bName) as Laya.ViewStack
			const property = component.getComponent(BettingArea)

			property.maximumBet = betLimits[bName].max
			property.minimumBet = betLimits[bName].min

			return { component, property }
		})
	}

	onUpdate(): void {
		const bettingAreas = this.getBettingAreas()

		const hasBelowMinimum = bettingAreas
			.map((bA) => {
				const totalBet = bA.property.bet.placed + bA.property.bet.confirmed

				return totalBet < bA.property.minimumBet && totalBet !== 0
			})
			.some((below) => below)

		const betAmounts = bettingAreas.map((b) => b.property.bet.placed)
		const totalBetAmount = betAmounts.length ? betAmounts.reduce((curr, acc) => curr + acc) : 0

		this.confirmButton.disabled = totalBetAmount <= 0 || hasBelowMinimum
		this.cancelButton.disabled = totalBetAmount <= 0
	}
}
