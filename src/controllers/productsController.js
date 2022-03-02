const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create
	create: (req, res) => {
		res.send('Se creo correctamente');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.send('Se pudo almacenar');
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.send('Editado');
	},
	// Update - Method to update
	update: (req, res) => {
		res.send('Actualizado');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send('Eliminado');
	}
};

module.exports = controller;