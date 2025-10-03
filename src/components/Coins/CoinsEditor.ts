import gsap, { Back } from 'gsap'
import user from '~/states/user'
import { addClickEffect, addHoverPointer, hitTestPoint } from '~/utils'
import { CoinsEditorItem } from './CoinsEditorItem'

const { regClass, property } = Laya

@regClass()
export class CoinsEditor extends Laya.Script {
	@property(Laya.ViewStack)
	private coinsEditor: Laya.ViewStack

	@property(Laya.ViewStack)
	private cancelButton: Laya.ViewStack

	@property(Laya.ViewStack)
	private saveButton: Laya.ViewStack

	@property(Laya.Sprite)
	private closeButton: Laya.Sprite

	@property(Laya.ViewStack)
	public editButton: Laya.ViewStack

	onAwake(): void {
		this.coinsEditor.visible = false
		this.coinsEditor.alpha = 0
		this.coinsEditor.y = 500

		addHoverPointer([this.cancelButton, this.saveButton, this.closeButton, this.editButton])
		addClickEffect([this.cancelButton, this.saveButton, this.editButton])

		this.cancelButton.on(Laya.Event.CLICK, () => {
			this.toggleEdit(this.editButton.visible)

			this.initCoins()
		})

		this.closeButton.on(Laya.Event.CLICK, () => {
			this.toggle(false)

			this.initCoins()
		})

		this.owner.scene.on(Laya.Event.CLICK, (event: Laya.Event) => {
			const [coinsEditorClicked] = hitTestPoint(this.coinsEditor, {
				x: event.touchPos.x,
				y: event.touchPos.y,
			})

			if (this.coinsEditor.visible && !coinsEditorClicked) {
				this.toggle(false)
			}
		})

		this.editButton.on(Laya.Event.CLICK, () => {
			this.toggleEdit(this.editButton.visible)

			this.initCoins()
		})

		this.initCoins()
	}

	toggle(show: boolean = true) {
		gsap.to(this.coinsEditor, {
			visible: show,
			alpha: show ? 1 : 0,
			duration: 0.5,
			y: show ? 190 : 500,
			ease: Back.easeInOut,
		})
	}

	toggleEdit(onEdit: boolean) {
		this.saveButton.visible = onEdit
		this.cancelButton.visible = onEdit
		this.editButton.visible = !onEdit
	}

	initCoins() {
		const coinSlots = this.owner.getChildByName('CoinSlots') as Laya.ViewStack

		const onEditing = !this.editButton.visible

		user.coins.map((coin, index) => {
			const coinSlot = coinSlots.getChildByName(`Slot${index + 1}`) as Laya.ViewStack
			const coinImage = coinSlot.getChildByName('Image') as Laya.Image

			coinSlot.scaleX = coin.active || onEditing ? 1 : 0.8
			coinSlot.scaleY = coin.active || onEditing ? 1 : 0.8

			addHoverPointer(coinImage)
			addClickEffect(coinImage)

			const coinSlotProperty = coinSlot.getComponent(CoinsEditorItem)
			coinSlotProperty.amount = coin.amount
		})
	}
}
