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

const allItems = document.querySelectorAll('.item');
const allItemsQty = allItems.length;

console.log(`В списке ${allItemsQty} категории.`);
console.log(" ");

/*
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/

allItems.forEach((element) => {

let elementTitle = element.querySelector('h2').textContent;

let oneTitleElements = element.querySelectorAll('li');
let oneTitleElemntsQty = oneTitleElements.length;

  console.log(`Категория: ${elementTitle}`);
    console.log(`Количество элементов: ${oneTitleElemntsQty}`);
    console.log(" ");

});

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");