//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-1");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

*/

//Task START

/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.*/

const allListCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${allListCategoriesRef.length} категории`);
console.log(' ');

/*
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/



allListCategoriesRef.forEach((item) => {
   
  const itemNameRef = item.querySelector('h2');
  const singleCategoryAllItemsRef = item.querySelectorAll('li');
  
  console.log(`Категория: ${itemNameRef.textContent}
  Количество элементов: ${singleCategoryAllItemsRef.length}`);
  console.log(' ');
});

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");