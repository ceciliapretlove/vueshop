const state = {
	show: true,
	categoryList: [
		{
			id: 1,
			name: 'Chair ',
			description: "Nordic Chair"
		},{
			id: 2,
			name: 'Table ',
			description: "nordic Table"
		},
	]
}


const actions = {

}
const mutations = {

}

const getters = {
	products_category: (state) => {
		return state.categoryList;
	},
	productStatusCat: (state) => {
		return state.show;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
