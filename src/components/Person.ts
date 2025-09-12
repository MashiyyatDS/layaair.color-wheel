const { regClass, property } = Laya

@regClass()
export class Person extends Laya.Script {
	onAwake(): void {
		console.log('This is person')
	}

	walk() {
		console.log('Walking')
	}

	punch() {
		console.log('Punching')
	}
}
