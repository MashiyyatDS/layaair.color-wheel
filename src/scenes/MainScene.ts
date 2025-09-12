import gsap, { Back, Circ, Linear } from 'gsap'
import { Person } from '~/components/Person'
import useEmit from '~/composables/useEmit'
import user from '~/states/user'
import { animateNumbers, formatCurrency } from '~/utils'

const { regClass, property } = Laya

@regClass()
export class MainScene extends Laya.Script {
	@property(Laya.Label)
	private balance: Laya.Label

	@property(Laya.ViewStack)
	private wheel: Laya.ViewStack

	@property(Laya.ViewStack)
	private bettingAreaContainer: Laya.ViewStack

	@property(Laya.ViewStack)
	private coinsContainer: Laya.ViewStack

	@property(Laya.ViewStack)
	private gameButtons: Laya.ViewStack

	onAwake(): void {
		this.balance.text = formatCurrency(user.balance, 'PHP').cm

		useEmit().listen({
			main: {
				'balance-updated': (balance: number) => {
					animateNumbers(this.balance, balance)
				},
			},
			'game-state': {
				start: () => {
					user.tempBalance = user.balance

					this.toggle(false)
				},
				dealing: () => this.toggle(),
			},
		})
	}

	generateRandom6DigitNumber(): number {
		const min = 100000
		const max = 999999
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	toggle(hidden: boolean = true) {
		gsap.to(this.bettingAreaContainer, {
			y: hidden ? 900 : 709,
			duration: 0.8,
			ease: Back.easeInOut,
		})

		gsap.to(this.coinsContainer, {
			y: hidden ? 1150 : 1016,
			duration: 0.8,
			ease: Back.easeInOut,
		})

		gsap.to(this.gameButtons, {
			y: hidden ? 1150 : 911,
			duration: 0.8,
			ease: Back.easeInOut,
		})
	}
}
