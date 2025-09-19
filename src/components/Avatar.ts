import gsap, { Linear } from 'gsap'
import { getCoordinates } from '~/utils'

const { regClass, property } = Laya

@regClass()
export class Avatar extends Laya.Script {
	@property(Laya.ViewStack)
	private avatar: Laya.ViewStack

	move(coordinates: { x: number; y: number }) {
		const { duration, x, y, direction } = getCoordinates(
			this.avatar.x,
			this.avatar.y,
			coordinates.x,
			coordinates.y,
			200,
			this.avatar.width,
			this.avatar.height
		)

		console.log(direction)

		gsap.to(this.avatar, {
			x,
			y,
			duration: duration,
			ease: Linear.easeIn,
		})
	}
}
