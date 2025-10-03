import { addClickEffect, addHoverPointer } from '~/utils'
import { Coin } from '~/components/Coins/Coin'
import useEmit from '~/composables/useEmit'
import { CoinsEditor } from './CoinsEditor'
import { CoinInterface } from '~/types'
import user from '~/states/user'

const { regClass, property } = Laya

@regClass()
export class CoinsContainer extends Laya.Script {
	@property(Laya.Prefab)
	private coinPrefab: Laya.Prefab

	@property(Laya.ViewStack)
	private coinsContainer: Laya.ViewStack

	@property(Laya.ViewStack)
	private editCoinsButton: Laya.ViewStack

	@property(Laya.ViewStack)
	private coinsEditor: Laya.ViewStack

	onAwake(): void {
		addHoverPointer(this.editCoinsButton)
		addClickEffect(this.editCoinsButton)

		this.initCoins()

		this.editCoinsButton.on(Laya.Event.CLICK, () => {
			const coinsEditorProperty = this.coinsEditor.getComponent(CoinsEditor)

			coinsEditorProperty.toggle(!this.coinsEditor.visible)
		})

		useEmit().listen({
			coin: {
				updated: (response: { coins: CoinInterface }) => {
					//console.log(response.coins)
				},
			},
		})
	}

	initCoins() {
		let xAxis = 80

		const activeCoins = user.coins.filter((coin) => coin.active)

		activeCoins.forEach((coin, index) => {
			const coinComponent = this.coinsContainer.getChildByName(
				`Coin${index + 1}`
			) as Laya.ViewStack

			addClickEffect(coinComponent)
			coinComponent.name = `Coin${index + 1}`
			coinComponent.pos(xAxis, 50)

			const coinProperty = coinComponent.getComponent(Coin)
			coinProperty.amount = coin.amount

			this.coinsContainer.addChildren(coinComponent)

			if (coin.selected) {
				coinProperty.selectCoin(true)

				user.selectedCoin = coin.amount
			}

			xAxis += 100
		})
	}
}
