import { formatCurrency } from '~/utils'
import { CoinsEditor } from './CoinsEditor'
import useEmit from '~/composables/useEmit'
import user from '~/states/user'

const { regClass, property } = Laya

@regClass()
export class CoinsEditorItem extends Laya.Script {
	private coinEditorItem: Laya.ViewStack
	private slotLabel: Laya.Label
	private slotAmount: Laya.Label

	public amount: string = '0'

	@property(Laya.ViewStack)
	private coinsEditor: Laya.ViewStack

	onAwake(): void {
		this.coinEditorItem = this.owner as Laya.ViewStack

		this.slotLabel = this.coinEditorItem.getChildByName('Label')
		this.slotAmount = this.coinEditorItem.getChildByName('Amount')
		this.slotLabel.text = formatCurrency(this.amount, 'PHP').ab
		this.slotAmount.text = formatCurrency(this.amount, 'PHP').cm
	}

	onMouseClick(): void {
		const coinsEditor = this.coinsEditor.getComponent(CoinsEditor)
		const onEditing = !coinsEditor.editButton.visible

		if (!onEditing) {
			const index = user.coins.findIndex((c) => c.amount === this.amount)
			user.coins[index].active = !user.coins[index].active

			coinsEditor.initCoins()

			return
		}

		console.log('Editing this coin', this.amount)
	}
}
