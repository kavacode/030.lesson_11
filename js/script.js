let kitchenProducts = [
	{
	  type: 'grater',
	  price: 10,
	},
	{
	  type: 'pastry-bag',
	  price: 25,
	},
	{
	  type: 'scale',
	  price: 5,
	},
	{
	  type: 'whisk',
	  price: 15,
	},
 ];
 
 let devicesProducts = [
	{
	  type: 'desktop',
	  price: [100, 1000],
	},
	{
	  type: 'laptop',
	  price: [50, 1500],
	},
	{
	  type: 'smartphone',
	  price: [80, 2000],
	},
	{
	  type: 'tablet',
	  price: [20, 1300],
	},
 ];
 
 let cosmeticsProducts = [
	{
	  type: 'blush',
	  price: 100,
	},
	{
	  type: 'eyeshadow',
	  price: 50,
	},
	{
	  type: 'lipstick',
	  price: 80,
	},
	{
	  type: 'nail-polish',
	  price: 200,
	},
	{
	  type: 'perfume',
	  price: 300,
	},
 ];

function Product(category, type, price) {
	this.category = category;
	this.type = type;
	this.price = price;
}

Product.prototype.render = function() {
	const imagePath = `images/${this.category}/${this.type}.svg`;
	let priceText = "";
    
	if (Array.isArray(this.price)) {
		 priceText = `${this.price[0]} - ${this.price[1]} USD`;
	} else {
		 priceText = `${this.price} USD`;
	}
	
	return `
		 <tr>
			  <td><img src="${imagePath}" alt="${this.type}" width="50" height="50"></td>
			  <td>${this.type}</td>
			  <td>${priceText}</td>
		 </tr>
	`;
};
// const kitchenProducts = [
// 	new Product("kitchen", "grater", 10),
// 	new Product("kitchen", "pastry-bag", 25),
// 	new Product("kitchen", "scale", 5),
// 	new Product("kitchen", "whisk", 15)
// ];

// const devicesProducts = [
// 	new Product("devices", "desktop", [100, 1000]),
// 	new Product("devices", "laptop", [50, 1500]),
// 	new Product("devices", "smartphone", [80, 2000]),
// 	new Product("devices", "tablet", [20, 1300])
// ];

// const cosmeticsProducts = [
// 	new Product("cosmetics", "blush", 100),
// 	new Product("cosmetics", "eyeshadow", 50),
// 	new Product("cosmetics", "lipstick", 80),
// 	new Product("cosmetics", "nail-polish", 200),
// 	new Product("cosmetics", "perfume", 300)
// ];
const productsKitchen = kitchenProducts.map(
	(product) => new Product('kitchen', product.type, product.price),
 );
 const productsDevices = devicesProducts.map(
	(product) => new Product('devices', product.type, product.price),
 );
 const productsCosmetics = cosmeticsProducts.map(
	(product) => new Product('cosmetics', product.type, product.price),
 );


function renderProducts(products, id) {
	const tbody = document.querySelector(`#${id}`);
	for (const product of products) {
		 const row = document.createElement('tr');
		 row.innerHTML = product.render();
		 tbody.appendChild(row);
	}
}

renderProducts(productsKitchen, 'kitchen-products');
renderProducts(productsDevices, 'devices-products');
renderProducts(productsCosmetics, 'cosmetics-products');

