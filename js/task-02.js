const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listIngredients = document.querySelector('ul#ingredients');



const elementsLi = [];

for (let i = 0; i < ingredients.length; i += 1) {
    const textElement = ingredients[i];
    const navItems = document.createElement('li');
    navItems.textContent = textElement;
    elementsLi.push(navItems);
}

listIngredients.append(...elementsLi);