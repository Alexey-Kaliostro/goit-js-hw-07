//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-2");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().

*/

//Task START

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((singleIngredient) => {
  const singleItem = document.createElement('li')
  singleItem.textContent = singleIngredient;
  return singleItem;
})

ingredientsListRef.append(...ingredientsList);


//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

/*

for (const ingredient of ingredients) {
  
  const singleListItemRef = document.createElement('li');
  singleListItemRef.textContent = ingredient;
    
  const ingredientsListRef = document.querySelector('#ingredients');
  ingredientsListRef.appendChild(singleListItemRef);

}

*/
