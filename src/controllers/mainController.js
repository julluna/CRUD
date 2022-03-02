const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// nuevo arreglo con los productos que cumplen cond category=='visited'
		const productsVisited = products.filter (
			(prod) => prod.category === 'visited'
			);
		// nuevo arreglo con los productos que cumplen cond category=='in-sale'
		const productsInSale = products.filter (
			(prod) => prod.category === 'in-sale'
			);
		res.render('index', {products}); //falta filtrar por oferta y visitados
	},
	search: (req, res) => {
		res.render('results', {products});
	},
};

module.exports = controller;
