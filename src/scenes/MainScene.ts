import gsap, { Back, Circ, Linear } from 'gsap'
import useEmit from '~/composables/useEmit'
import { animateNumbers, formatCurrency } from '~/utils'

const { regClass, property } = Laya

@regClass()
export class MainScene extends Laya.Script {
	@property(Laya.Label)
	private balance: Laya.Label

	@property(Laya.ViewStack)
	private wheel: Laya.ViewStack

	onAwake(): void {
		useEmit().listen({
			'game-state': {
				confirmed: () => {
					const tl = gsap.timeline({ defaults: { delay: 1 } })
					tl.to(this.wheel, {
						scaleX: 2,
						scaleY: 2,
						y: 920,
						duration: 0.5,
						ease: Back.easeInOut,
					})
						.to(this.wheel, {
							delay: 1,
							rotation: 3600,
							duration: 10,
							ease: Circ.easeInOut,
							onComplete: () => (this.wheel.rotation = 0),
						})
						.to(this.wheel, {
							scaleX: 1,
							scaleY: 1,
							delay: 1.5,
							y: 469,
							onComplete: () => {
								useEmit().send({ 'game-state': { start: true } })
							},
						})
				},
			},
		})
	}

	private initBalance = 100000
	onKeyDown(evt: Laya.Event): void {
		if (evt.charCode === 'KeyX') {
			animateNumbers(this.balance, this.initBalance)

			this.initBalance += 1000
		}
	}

	generateRandom6DigitNumber(): number {
		const min = 100000 // Minimum 6-digit number
		const max = 999999 // Maximum 6-digit number
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}
