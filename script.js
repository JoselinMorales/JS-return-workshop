const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
  }

function cubed(num) {
    return num * num * num;
  }

  function factorial(num) { /*factorial de 3 ejemplo 3*2*1 por los numeros que lo *  R/6*/
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num -1;
    while (x > 1) {
        num *= x;
        x--;
    }

    return num;

  }

  input.onchange = function() { /*funcion anonima*/
    const num = input.value;
    if (isNaN(num)) {  /*como saber si no es un numero utilizamos isNaN*/
      para.textContent = 'Please enter a number!';
    } else {
      para.textContent = num + ' squared is ' + squared(num) + '. ' +
                         num + ' cubed is ' + cubed(num) + '. ' +
                         num + ' factorial is ' + factorial(num) + '.';
    }
  };
