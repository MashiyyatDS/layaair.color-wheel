import gsap, { Back, Circ } from 'gsap'
import useEmit from '~/composables/useEmit'

const { regClass, property } = Laya

@regClass()
export class Wheel extends Laya.Script {
	@property(Laya.ViewStack)
	private wheel: Laya.ViewStack

	@property(Laya.Image)
	private wheelImage: Laya.Image

	previousAngle = 0
	previousRotation = 0

	onAwake(): void {
		useEmit().listen({
			'game-state': {
				confirmed: () => {
					const result = this.randomResult()

					// Always spin exactly 10 times + result
					const currentAngle = 3600 + result

					this.spin(currentAngle)

					// Track last angle only
					this.previousAngle = result
				},
			},
		})
	}

	spin(rotation: number) {
		useEmit().send({ 'game-state': { dealing: true } })

		const tl = gsap.timeline({ defaults: { delay: 1 } })

		tl.to(this.wheel, {
			scaleX: 2,
			scaleY: 2,
			y: 850,
			duration: 0.5,
			ease: Back.easeInOut,
		})
			.to(this.wheelImage, {
				delay: 1,
				rotation,
				duration: 12,
				ease: Circ.easeInOut,
				onComplete: () => (this.wheelImage.rotation = rotation % 360),
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
	}

	randomResult() {
		const results = {
			x1: [
				355.43, 328.96, 310.225, 264.995, 219.777, 183.453, 131.682, 112.77, 84.777, 66.9,
				40.491,
			],
			//x2: [1.1, 2.2, 3.3, 4.4],
			//x5: [5.5, 6.6, 7.7],
			//x10: [8.8, 9.9],
			//x20: [11.11, 12.12],
			//x40: [13.13],
		}

		const probabilities = [
			{ key: 'x1', weight: 35 },
			//{ key: 'x2', weight: 25 },
			//{ key: 'x5', weight: 20 },
			//{ key: 'x10', weight: 10 },
			//{ key: 'x20', weight: 8 },
			//{ key: 'x40', weight: 2 },
		]

		const totalWeight = probabilities.reduce((sum, p) => sum + p.weight, 0)
		let rand = Math.random() * totalWeight

		let chosenKey = 'x1'
		for (const p of probabilities) {
			if (rand < p.weight) {
				chosenKey = p.key
				break
			}
			rand -= p.weight
		}

		const arr = results[chosenKey as keyof typeof results]
		const value = arr[Math.floor(Math.random() * arr.length)]

		return value
	}
}
