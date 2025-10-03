export default {
	selectedCoin: '',
	coins: [
		{ active: true, amount: '10', selected: false },
		{ active: true, amount: '1000', selected: false },
		{ active: true, amount: '50', selected: false },
		{ active: true, amount: '100', selected: true },
		{ active: true, amount: '100000', selected: false },
		{ active: false, amount: '200000', selected: false },
		{ active: true, amount: '500', selected: false },
		{ active: false, amount: '150000', selected: false },
		{ active: false, amount: '1000000', selected: false },
		{ active: false, amount: '300000', selected: false },
		{ active: false, amount: '400000', selected: false },
		{ active: false, amount: '1500000', selected: false },
	],
	balance: 100000,
	tempBalance: 100000,
}

interface UserInterface {
	selectedCoin: string
	coins: { active: boolean; amount: string; selected: boolean }[]
	balance: number
	tempBalance: number
}

class User implements UserInterface {
	balance: number = 0
	tempBalance: number = 0
	coins: []
	selectedCoin: string = ''

	selectCoin() {}
}

export const user = new User()
