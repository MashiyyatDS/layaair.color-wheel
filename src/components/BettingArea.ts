import { addHoverPointer, animateNumbers, formatCurrency } from '~/utils'
import user from '~/states/user'
import { Coin } from './Coin'
import gsap, { Back, Linear } from 'gsap'
import useEmit from '~/composables/useEmit'

const { regClass, property } = Laya

interface CoinPosition {
	[key: string]: {
		[coin: number]: {
			x: number
			y: number
		}
	}
}

@regClass()
export class BettingArea extends Laya.Script {
	@property(String)
	public type: string

	@property(Laya.Sprite)
	private dim: Laya.Sprite

	@property(Laya.Label)
	private amountLabel: Laya.Label

	@property(Laya.Sprite)
	private bettingArea: Laya.Sprite

	@property(Laya.Prefab)
	private coinPrefab: Laya.Prefab

	public betAmount = 0
	public confirmedBetAmount = 0
	onAwake(): void {
		addHoverPointer(this.bettingArea)

		this.amountLabel.text = formatCurrency(this.betAmount, 'PHP').cm

		useEmit().listen({
			'game-state': {
				start: () => this.resetBet(),
				confirmed: () => {
					this.toggleDim()

					const appendCoin = this.bettingArea.getChildByName(
						'AppendCoin'
					) as Laya.ViewStack

					if (appendCoin)
						gsap.to(appendCoin, {
							x: 175,
							y: 45,
							duration: 0.3,
						})
				},
			},
		})
	}

	onMouseClick(): void {
		this.betAmount += Number(user.selectedCoin)

		this.appendCoin(this.betAmount + this.confirmedBetAmount)

		animateNumbers(this.amountLabel, this.betAmount + this.confirmedBetAmount)
	}

	private coinPosition: CoinPosition = {
		x1: {
			0: { x: 56, y: 465 },
			1: { x: 157, y: 465 },
			2: { x: 258, y: 465 },
			3: { x: 359, y: 465 },
			4: { x: 460, y: 465 },
			5: { x: 561, y: 465 },
		},
		x2: {
			0: { x: -170, y: 465 },
			1: { x: -69, y: 465 },
			2: { x: 31, y: 465 },
			3: { x: 131, y: 465 },
			4: { x: 231, y: 465 },
			5: { x: 330, y: 465 },
		},
		x5: {
			0: { x: -396, y: 465 },
			1: { x: -296, y: 465 },
			2: { x: -196, y: 465 },
			3: { x: -96, y: 465 },
			4: { x: 4, y: 465 },
			5: { x: 103, y: 465 },
		},
		x10: {
			0: { x: 56, y: 306 },
			1: { x: 157, y: 306 },
			2: { x: 258, y: 306 },
			3: { x: 359, y: 306 },
			4: { x: 460, y: 306 },
			5: { x: 561, y: 306 },
		},
		x20: {
			0: { x: -170, y: 306 },
			1: { x: -69, y: 306 },
			2: { x: 31, y: 306 },
			3: { x: 131, y: 306 },
			4: { x: 231, y: 306 },
			5: { x: 330, y: 306 },
		},
		x40: {
			0: { x: -396, y: 306 },
			1: { x: -296, y: 306 },
			2: { x: -196, y: 306 },
			3: { x: -96, y: 306 },
			4: { x: 4, y: 306 },
			5: { x: 103, y: 306 },
		},
	}

	appendCoin(amount: string | number) {
		const coin = this.coinPrefab.create() as Laya.ViewStack
		coin.name = 'AppendCoin'
		coin.scaleX = 0.7
		coin.scaleY = 0.7
		coin.pos(40, 100)

		const coinProperty = coin.getComponent(Coin)
		coinProperty.readonly = true
		coinProperty.amount = `${amount}`

		this.bettingArea.addChild(coin)

		const coinIndex = user.coins
			.filter((c) => c.active)
			.findIndex((c) => c.amount === user.selectedCoin)

		gsap.from(coin, {
			...this.coinPosition[this.type][coinIndex],
			scaleX: 1,
			scaleY: 1,
			duration: 0.2,
		})
	}

	removeCoin() {
		this.bettingArea.removeChildren(2)
	}

	confirmBet() {
		if (!this.betAmount) return

		this.confirmedBetAmount += this.betAmount

		animateNumbers(this.amountLabel, this.confirmedBetAmount)

		this.betAmount = 0
	}

	cancelBet() {
		this.removeCoin()

		this.betAmount = 0

		animateNumbers(this.amountLabel, this.confirmedBetAmount)

		if (this.confirmedBetAmount) {
			this.appendCoin(this.confirmedBetAmount)
		}
	}

	resetBet() {
		this.removeCoin()
		this.betAmount = 0
		this.confirmedBetAmount = 0
		animateNumbers(this.amountLabel, 0)

		this.toggleDim(false)
	}

	toggleDim(show: boolean = true) {
		this.bettingArea.mouseEnabled = !show
		gsap.to(this.dim, {
			alpha: show ? 0.6 : 0,
			duration: 0.6,
		})
	}
}
