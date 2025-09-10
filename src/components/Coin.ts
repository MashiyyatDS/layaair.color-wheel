import { addHoverPointer, formatCurrency } from '~/utils'
import useEmit from '~/composables/useEmit'
import user from '~/states/user'
import gsap from 'gsap'

const { regClass, property } = Laya

@regClass()
export class Coin extends Laya.Script {
	public amount = '0'

	readonly = false

	onAwake(): void {
		const label = this.owner.getChildByName('Label') as Laya.Label
		label.text = `${formatCurrency(this.amount, 'PHP').ab}`

		if (this.readonly) return

		useEmit().listen({
			coin: {
				selected: (amount: string) => {
					this.selectCoin(this.amount === amount)
				},
			},
		})

		addHoverPointer(this.owner)
	}

	selectCoin(selected: boolean) {
		gsap.to(this.owner, {
			scaleX: selected ? 1.3 : 1,
			scaleY: selected ? 1.3 : 1,
			duration: 0.2,
		})
	}

	onMouseClick(): void {
		if (this.readonly) return

		user.selectedCoin = this.amount

		useEmit().send({
			coin: {
				selected: this.amount,
			},
		})
	}
}
