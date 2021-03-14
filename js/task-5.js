//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-5");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

*/

// Task START

const inputFieldRef = document.querySelector('input');
const spanNameRef = document.querySelector('span');

const userNameWriter = () => {
    spanNameRef.textContent = inputFieldRef.value
}

inputFieldRef.addEventListener('input', userNameWriter);

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");