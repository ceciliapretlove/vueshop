const state = {
	show: true,
	productList: [
		{
			id: 1,
			title: 'Nordic Chair White ',
			thumbnail_url: 'images/products/1.jpg',
			price: 999,
			quantity: 10,
			category: "Chair",
			descriptions: "Nordic style chair made of polypropylene, rounded legs in beech wood and removable eco-leather seat for easy cleaning."
		},{
			id: 2,
			title: 'Nordic Table White ',
			thumbnail_url: 'images/products/2.jpg',
			price: 1199,
			quantity: 15,
			category: "Chair",
			descriptions: "Nordic style chair made of polypropylene, rounded legs in beech wood and removable eco-leather seat for easy cleaning."
		},{
			id: 3,
			title: 'Eames Chair ',
			thumbnail_url: 'images/products/3.jpg',
			price: 1800,
			quantity: 1,
			category: "Chair",
			descriptions: "Nordic style chair made of polypropylene, rounded legs in beech wood and removable eco-leather seat for easy cleaning."
		},{
			id: 4,
			title: 'Eames Chair ',
			thumbnail_url: 'images/products/4.jpg',
			price: 1000,
			quantity: 0,
			category: "Chair",
			descriptions: "Nordic style chair made of polypropylene, rounded legs in beech wood and removable eco-leather seat for easy cleaning."
		},
		{
			id: 5,
			title: 'Eames Chair ',
			thumbnail_url: 'images/products/5.jpg',
			price: 1000,
			quantity: 0,
			category: "Chair",
			descriptions: "Nordic style chair made of polypropylene, rounded legs in beech wood and removable eco-leather seat for easy cleaning."
		},
	]
}


const actions = {

}
const mutations = {
	addNewProduct: function (state, product) {
	      Object.assign(state.productList, product);
	    }
}

const getters = {
	products: (state) => {
		return state.productList;
	},
	productStatus: (state) => {
		return state.show;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
