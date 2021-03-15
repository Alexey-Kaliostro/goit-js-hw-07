//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-7");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

*/

// Task START


// ссылки на инпут и спан
const rangeValueRef = document.querySelector('input');
const spanTextRef = document.querySelector('span');

// функция изменения шрифта
const onValueChange = () => {
        
    let fontSize = rangeValueRef.value
    spanTextRef.style.fontSize = `${ rangeValueRef.value }px`;
    
}

// событие на изменения значения инпута
rangeValueRef.addEventListener('input', onValueChange)

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");