const products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];
const productShow = `ID: ${products[0].id}, Name: ${products[0].name}, Price: ${products[0].price}, Quantity: ${products[0].quantity}`;
const productShow2 = `ID: ${products[1].id}, Name: ${products[1].name}, Price: ${products[1].price}, Quantity: ${products[1].quantity}`;
const productShow3 = `ID: ${products[2].id}, Name: ${products[2].name}, Price: ${products[2].price}, Quantity: ${products[2].quantity}`;
console.log(productShow);
console.log(productShow2);
console.log(productShow3);

const calculateTotalValue = products.reduce((sum,products) => sum + (products.price * products.quantity), 0)
console.log("Tong so tien hang ton kho: " + calculateTotalValue)

const filterByPrice = (minPrice) => products.filter(({price}) => price >= minPrice)
console.log("Lọc sản phẩm theo giá:", filterByPrice(100))

const newProducts = {id: 4, name: "Manh", price: 100, quantity: 1}
const addProduct = [...products, newProducts]
console.log(addProduct)

const removeProductById = (productId) =>products.filter((product) =>
    product.id !== productId
)
console.log("Xóa sản phẩm: ", removeProductById(1))

const updateQuantity = products.map((product) =>
    product.id === 1 ? {...product, quantity: 200}: product
)
console.log("Cập nhật số lượng sản phẩm: ", updateQuantity)