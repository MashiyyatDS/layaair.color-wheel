import gsap from 'gsap'

/**
 * - `cm` Number format with comma.
 * - `cr` Number format with currency sign and comma.
 * - `ab` Number format in abbreviation.
 */
export function formatCurrency(amount: string | number, currency: string) {
	const num = typeof amount === 'string' ? parseFloat(amount) : amount

	if (isNaN(num)) {
		throw new Error('Invalid amount')
	}

	const absNum = Math.abs(num)
	const isNegative = num < 0

	// Check if the original input has decimal > 0
	const hasDecimals = absNum % 1 !== 0

	const decimalOptions = hasDecimals
		? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
		: { minimumFractionDigits: 0, maximumFractionDigits: 0 }

	// Format with Intl for currency
	const inCurrency = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: currency.toUpperCase(),
		...decimalOptions,
	}).format(absNum)

	// Format with comma for values >= 10000
	const inComma =
		absNum >= 10000
			? absNum.toLocaleString(undefined, decimalOptions)
			: absNum.toFixed(decimalOptions.maximumFractionDigits)

	// Format in Roman-like format (K/M/B)
	const formatRoman = (n: number): string => {
		if (n >= 1_000_000_000) return `${+(n / 1_000_000_000).toFixed(2)}B`
		if (n >= 1_000_000) return `${+(n / 1_000_000).toFixed(2)}M`
		if (n >= 1_000) return `${+(n / 1_000).toFixed(2)}K`
		return hasDecimals ? n.toFixed(2) : n.toString()
	}

	const inAbbreviation = formatRoman(absNum)

	return {
		cr: isNegative ? `-${inCurrency}` : inCurrency,
		cm: isNegative ? `-${inComma}` : inComma,
		ab: isNegative ? `-${inAbbreviation}` : inAbbreviation,
	}
}

export function addHoverPointer(component: Laya.Node | Laya.Node[]) {
	const components = Array.isArray(component) ? component : [component]

	components.map((cm) => {
		cm.on(Laya.Event.MOUSE_OVER, () => (Laya.Mouse.cursor = 'pointer'))
		cm.on(Laya.Event.MOUSE_OUT, () => (Laya.Mouse.cursor = 'auto'))
	})
}

export function addClickEffect(component: any) {
	const components = Array.isArray(component) ? component : [component]

	components.map((cmp) => {
		cmp.on(Laya.Event.CLICK, () => {
			gsap.to(cmp, {
				scaleX: cmp.scaleX + 0.08,
				scaleY: cmp.scaleY + 0.08,
				duration: 0.1,
				onComplete: () => {
					cmp.scaleX = 1
					cmp.scaleY = 1
				},
			})
		})
	})
}

export function animateNumbers(label: Laya.Label, balance: number) {
	const startValue = Number(label.text.replace(/[^0-9.-]+/g, '')) // Parse initial numeric value
	const obj = { val: startValue }

	gsap.to(obj, {
		duration: 0.3,
		val: balance,
		roundProps: 'val',
		onUpdate: () => (label.text = formatCurrency(obj.val, 'PHP').cm),
		onComplete: () => (label.text = formatCurrency(balance, 'PHP').cm),
	})
}

export function hitTestPoint(nodes: any | any[], coordinates: { x: number; y: number }): boolean[] {
	if (Array.isArray(nodes)) {
		const hitTests: boolean[] = nodes.map((node) =>
			node.hitTestPoint(coordinates.x, coordinates.y)
		)

		return hitTests
	}

	return [nodes.hitTestPoint(coordinates.x, coordinates.y)]
}

export function getCoordinates(
	startX: number,
	startY: number,
	targetX: number,
	targetY: number,
	speed: number,
	width: number,
	height: number
): {
	x: number
	y: number
	direction: string
	distance: number
	duration: number
} {
	const dx = targetX - startX
	const dy = targetY - startY

	const distance = Math.sqrt(dx * dx + dy * dy)
	const duration = speed > 0 ? distance / speed : 0

	const hThreshold = width * 0.5
	const vThreshold = height * 0.5

	let direction = 'None'

	if (Math.abs(dx) > Math.abs(dy) + hThreshold) {
		direction = dx > 0 ? 'Right' : 'Left'
	} else if (Math.abs(dy) > Math.abs(dx) + vThreshold) {
		direction = dy > 0 ? 'Bottom' : 'Top'
	} else {
		// diagonal
		if (dx > 0 && dy > 0) direction = 'BottomRight'
		else if (dx > 0 && dy < 0) direction = 'TopRight'
		else if (dx < 0 && dy > 0) direction = 'BottomLeft'
		else if (dx < 0 && dy < 0) direction = 'TopLeft'
	}

	return {
		x: targetX,
		y: targetY,
		direction,
		distance,
		duration,
	}
}
