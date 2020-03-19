const pizzas = [{ name: "Pepperoni", toppings: ['pepperoni'] }, { name: "Meat Lovers", toppings: ['pepperoni', 'sausage', 'meat balls', 'olives'] }]

const mapped = pizzas.map((item) => item.name.toUpperCase())
console.log(mapped)
const test = Object.assign({})