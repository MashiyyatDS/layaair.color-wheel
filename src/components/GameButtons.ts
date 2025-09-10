import { addClickEffect, addHoverPointer } from '~/utils'
import { BettingArea } from './BettingArea'
import { Snackbar } from './Snackbar'
import useEmit from '~/composables/useEmit'

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

			const betAmounts = bettingAreas.map((b) => ({
				[b.property.type]: b.property.betAmount,
			}))

			for (const bettingArea of bettingAreas) {
				bettingArea.property.confirmBet()
			}

			snackbar.toggle()

			useEmit().send({
				'game-state': {
					confirmed: true,
				},
			})
		})
	}

	getBettingAreas(): { component: Laya.ViewStack; property: BettingArea }[] {
		const baNames = ['x1', 'x2', 'x5', 'x10', 'x20', 'x40']

		return baNames.map((bName) => {
			const component = this.bettingAreaContainer.getChildByName(bName) as Laya.ViewStack
			const property = component.getComponent(BettingArea)

			return { component, property }
		})
	}

	onUpdate(): void {
		const bettingAreas = this.getBettingAreas()

		const betAmounts = bettingAreas.map((b) => b.property.betAmount)
		const totalBetAmount = betAmounts.length ? betAmounts.reduce((curr, acc) => curr + acc) : 0

		this.confirmButton.disabled = totalBetAmount <= 0
		this.cancelButton.disabled = totalBetAmount <= 0
	}
}
