import gsap, { Linear } from 'gsap'
import { Avatar } from '~/components/Avatar'

const { regClass, property } = Laya

@regClass()
export class AvatarScene extends Laya.Script {
	@property(Laya.ViewStack)
	private avatar: Laya.ViewStack

	private speed: number = 100

	onMouseClick(evt: Laya.Event): void {
		this.moveAvatar(evt.touchPos.x, evt.touchPos.y)
	}

	//onMouseMove(evt: Laya.Event): void {
	//	this.moveAvatar(evt.touchPos.x, evt.touchPos.y)
	//}

	private moveAvatar(x: number, y: number) {
		//const avatarProperty = this.avatar.getComponent(Avatar)
		//avatarProperty.walkAnimation.play()
		//avatarProperty.move({ x, y })
	}
}
