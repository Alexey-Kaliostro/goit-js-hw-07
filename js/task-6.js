//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-6");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

*/

// Task START

// ссылка на DOM input
const inputFieldRef = document.querySelector('input');

// переменная в которой храниться лимит символов для input
let characterLimiter = parseInt(inputFieldRef.getAttribute('data-length'))


// событие на потерю фокуса и валидацию инпута
const onBlurEvent = () => {
    
  if (inputFieldRef.value.length === characterLimiter) {
    inputFieldRef.classList.remove('invalid')
    inputFieldRef.classList.add('valid');
  }
  else if (inputFieldRef.value.length === 0) {
    inputFieldRef.classList.remove('valid')
    inputFieldRef.classList.remove('invalid')
    
  }
  else {
    inputFieldRef.classList.add('invalid');
  }
  
}

// вызов события на потерю фокуса
inputFieldRef.addEventListener('blur', onBlurEvent)

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


