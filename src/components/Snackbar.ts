import gsap, { Back } from 'gsap'

const { regClass, property } = Laya

@regClass()
export class Snackbar extends Laya.Script {
	@property(Laya.ViewStack)
	private snackbar: Laya.ViewStack

	onAwake(): void {
		this.snackbar.y = -100
	}

	toggle() {
		const tl = gsap.timeline()
		tl.to(this.snackbar, { y: 70, duration: 0.5, ease: Back.easeInOut }).to(this.snackbar, {
			y: -100,
			duration: 0.5,
			delay: 1,
			ease: Back.easeInOut,
		})
	}
}
