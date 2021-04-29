const category = document.querySelector("ul#categories");
const numberOfCategoty = category.children.length;
console.log(`В списке ${numberOfCategoty} категории.`);

const categoryElem = document.querySelectorAll(".item");
categoryElem.forEach((element) => {
  const nameOfElements = element.querySelector("h2").textContent;
  console.log(`Категория: ${nameOfElements}`);

  const numberOfElements = element.querySelectorAll(".item li");
  console.log(`Количество элементов: ${numberOfElements.length} `);
});

///const nameOfElements = categoryElem[0].firstElementChild.textContent;
//console.log(`Категория: ${nameOfElements}`);

//const numberOfElements = categoryElem[0].querySelectorAll('li');
//console.log(`Количество элементов: ${numberOfElements.length} `);
