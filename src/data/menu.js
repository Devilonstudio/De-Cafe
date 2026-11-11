// Menu data copied from the printed menu.
// price: number  OR  sizes: [{ label, price }]
// Image file for each item is auto-named: <category-slug>_<item-slug>.jpg
// Drop files into public/images/items/ using those names (see IMAGE-LIST.txt).

export const slugify = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const rl = (a, b) => [
  { label: 'Regular', price: a },
  { label: 'Large', price: b },
]

const raw = [
  { category: 'Hot Beverages', icon: '☕', items: [
    { name: 'Espresso', price: 350 },
    { name: 'Americano', price: 400 },
    { name: 'Cortado', price: 450 },
    { name: 'Café Latte', price: 500 },
    { name: 'Cappuccino', price: 500 },
  ]},
  { category: 'Hot Flavoured', icon: '🍯', items: [
    { name: 'Spanish', price: 560 },
    { name: 'Vanilla', price: 600 },
    { name: 'Caramel', price: 600 },
    { name: 'Roasted Hazelnut', price: 600 },
    { name: 'Choco Mocha', price: 600 },
    { name: 'Pistachio', price: 700 },
  ]},
  { category: 'Coffee Frappe', icon: '🧋', items: [
    { name: 'Vanilla', price: 800 },
    { name: 'Caramel', price: 800 },
    { name: 'Moccacino', price: 900 },
  ]},
  { category: 'Iced Latte', icon: '🧊', items: [
    { name: 'Iced Americano', price: 500 },
    { name: 'Iced Latte', price: 600 },
    { name: 'Iced Salted Spanish', price: 650 },
    { name: 'Iced French Vanilla', price: 670 },
    { name: 'Iced Caramel', price: 670 },
    { name: 'Iced Roasted Hazelnut', price: 670 },
    { name: 'Iced Choco Mocha', price: 730 },
    { name: 'Iced Strawberry Mocha', price: 900 },
    { name: 'Iced Pistachio', price: 900 },
  ]},
  { category: 'De Café Special', icon: '⭐', items: [
    { name: 'Cupa Crunch Latte', price: 600 },
    { name: 'Strawberry Peach', price: 700 },
    { name: 'Mango Habanero', price: 800 },
    { name: 'Strawberry Matcha', price: 850 },
    { name: 'Pistachio Frappe', price: 1050 },
  ]},
  { category: 'Matcha', icon: '🍵', items: [
    { name: 'Classic', price: 650 },
    { name: 'Mango', price: 750 },
    { name: 'Coconut', price: 750 },
  ]},
  { category: 'Refreshers', icon: '🍹', items: [
    { name: 'Mint Margarita', price: 600 },
    { name: 'Mix Mojito', price: 700 },
    { name: 'Paisson Puch', price: 700 },
    { name: 'Berry Cola', price: 700 },
    { name: 'Guawa Mojito', price: 700 },
    { name: 'Water Melon', price: 700 },
    { name: 'Blue Zest', price: 700 },
  ]},
  { category: 'Milk Shakes', icon: '🥤', items: [
    { name: 'Banana', price: 300 },
    { name: 'Bana Dates', price: 350 },
    { name: 'Oreo', price: 450 },
    { name: 'Dates & Fig', price: 550 },
    { name: 'Pistachio', price: 600 },
  ]},
  { category: 'Iced & Hot Tea', icon: '🫖', items: [
    { name: 'Iced Lemon', price: 400 },
    { name: 'Iced Peach', price: 500 },
    { name: 'Iced Passion', price: 500 },
    { name: 'Milk Tea', price: 120 },
    { name: 'Green Tea', price: 80 },
    { name: 'Black Tea', price: 80 },
  ]},
  { category: 'Chicken Broast & Bites', icon: '🍗', items: [
    { name: 'Injected Broast', sizes: rl(450, 850) },
    { name: 'Chicken Strips (4pcs)', price: 550 },
    { name: 'Hot Shots', price: 700 },
    { name: 'Chicken Cheese Balls (5pcs)', price: 500 },
    { name: 'Chicken Nuggets', sizes: rl(300, 550) },
  ]},
  { category: 'Wing Station', icon: '🔥', items: [
    { name: 'Hot Wings', sizes: rl(400, 700) },
    { name: 'Crispy Wings', sizes: rl(350, 650) },
  ]},
  { category: 'Potato Party', icon: '🍟', items: [
    { name: 'Plain Fries', sizes: rl(220, 350) },
    { name: 'Mayo Garlic Fries', sizes: rl(250, 400) },
    { name: 'Loaded Fries', sizes: rl(400, 600) },
    { name: 'Pizza Fries', sizes: rl(450, 600) },
  ]},
  { category: 'Burgers Bash', icon: '🍔', items: [
    { name: 'Patty Burger', price: 350 },
    { name: 'Crunch Burger', price: 400 },
    { name: 'Chicken Patty Cheese', price: 450 },
    { name: 'Zinger Burger', price: 500 },
    { name: 'Zinger Cheese Burger', price: 550 },
    { name: 'Twin Tower Burger', price: 650 },
  ]},
  { category: 'Twist Roll & Wrap', icon: '🌯', items: [
    { name: 'Chicken Chutney Roll', price: 320 },
    { name: 'Chicken Mayo Roll', price: 350 },
    { name: 'Crisp Chicken Roll', price: 400 },
    { name: 'Trotila Wrap', price: 600 },
    { name: 'Trotila Platter', price: 650 },
  ]},
  { category: 'Toasted Tales', icon: '🥪', items: [
    { name: 'Club Sandwich', price: 500 },
    { name: 'Grilled Sandwich', price: 450 },
    { name: 'Veg Sandwich', price: 220 },
  ]},
  { category: 'Pasta Please', icon: '🍝', items: [
    { name: 'Alfredo Pasta', price: 700 },
    { name: 'Creamy Penne Pasta', price: 800 },
  ]},
  { category: 'Bake & Cake', icon: '🍰', items: [
    { name: 'Fudge Brownie', price: 200 },
    { name: 'Nutella Brownie', price: 200 },
    { name: 'Toffee Brownie', price: 200 },
    { name: 'Chocolate Chunk Cookie', price: 150 },
    { name: 'Fudge Cookie', price: 150 },
    { name: 'Butter Croissant', price: 500 },
    { name: 'Chocolate Croissant', price: 550 },
    { name: 'Donuts', price: 300 },
  ]},
]

export const MENU = raw.map((c) => {
  const cs = slugify(c.category)
  return {
    ...c,
    id: cs,
    items: c.items.map((i) => ({ ...i, id: `${cs}_${slugify(i.name)}` })),
  }
})
