import gsap, { Linear } from 'gsap'

const { regClass, property } = Laya

@regClass()
export class Character extends Laya.Script {
	@property(Laya.Box)
	private character: Laya.Box

	//onMouseRightClick(): void {
	//	this.pick()
	//}

	slideDown() {
		gsap.to(this.character, {
			duration: 0.3,
			bgColor: 'gray',
			y: this.character.y + 100,
			alpha: 0,
			onComplete: () => this.character.destroy(),
			ease: Linear.easeInOut,
		})
	}

	pick() {
		const tl = gsap.timeline()

		tl.to(this.character, {
			onUpdate: () => (this.character.mouseEnabled = false),
			scaleX: 2.5,
			scaleY: 2.5,
			rotation: 7.15,
			x: 360,
			y: 540,
			duration: 0.5,
		}).to(this.character, {
			y: 980,
			delay: 0.3,
			scaleX: 1,
			scaleY: 1,
			rotation: 0,
			onUpdate: () => (this.character.mouseEnabled = false),
		})
	}

	testProperty() {
		console.log(this.character.name)
	}

	onMouseDrag(evt: Laya.Event): void {
		this.character.zOrder = 999
		this.character.pos(evt.touchPos.x, evt.touchPos.y)
	}

	onMouseDragEnd(evt: Laya.Event): void {
		this.pick()
	}
}
