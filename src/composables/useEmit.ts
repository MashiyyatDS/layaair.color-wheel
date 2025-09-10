interface EmitType {
	coin: 'selected' | 'updated'
	'game-state': 'confirmed' | 'start'
}

const emit = new Laya.EventDispatcher()
export default function () {
	function listen(eventType: {
		[k in keyof EmitType]?: { [key in EmitType[k]]?: (pl: any) => any }
	}) {
		for (const [eventKey, eventValue] of Object.entries(eventType)) {
			for (const [cbKey, callback] of Object.entries(eventValue)) {
				emit.on(`${eventKey}:${cbKey}`, callback)
			}
		}
	}

	function send(eventType?: { [key in keyof EmitType]?: { [k in EmitType[key]]?: unknown } }) {
		Object.entries(eventType).map(([key, events]) => {
			Object.entries(events).map(([eventKey, payload]) => {
				emit.event(`${key}:${eventKey}`, payload)
			})
		})
	}

	return { listen, send }
}
