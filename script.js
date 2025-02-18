// Задание 1
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    alert(square.call(this)); // Используем call для передачи контекста
    function square() {
        return this.value * this.value;
    }
}

// Задание 2
function logValue() {
    console.log(this.value);
}

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

logValue.call(elem1); // text1
logValue.call(elem2); // text2
logValue.call(elem3); // text3

// Задание 3
let elem4 = document.querySelector('#elem4');
function greet(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}
greet.call(elem4, 'Smit', 'John'); // hello, John Smit

// Задание 4
let elem5 = document.querySelector('#elem5');
function greet2(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}
greet2.apply(elem5, ['Smit', 'John']); // hello, John Smit

// Задание 5
let elem6 = document.querySelector('#elem6');
function greet3(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}
let boundFunc = greet3.bind(elem6);
boundFunc('John', 'Smit'); // hello, John Smit
boundFunc('Eric', 'Luis'); // hello, Eric Luis

// Задание 6
setInterval(() => {
    console.log('Таймер сработал');
}, 3000);

// Задание 7
let num = 100;
let timer = setInterval(() => {
    num--;
    console.log(num);
    if (num === 0) {
        clearInterval(timer);
    }
}, 1000);

// Задание 8
let num2 = 10;
let timer2 = setInterval(() => {
    num2--;
    console.log(num2);
    if (num2 === 0) {
        clearInterval(timer2);
    }
}, 1000);

// Задание 9
let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let count = 100;
    let timer3 = setInterval(() => {
        count--;
        console.log(count);
        if (count === 0) {
            clearInterval(timer3);
        }
    }, 1000);
});

// Задание 10
let button3 = document.querySelector('#button3');
let isRunning = false;
button3.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        let count = 100;
        let timer4 = setInterval(() => {
            count--;
            console.log(count);
            if (count === 0) {
                clearInterval(timer4);
                isRunning = false;
            }
        }, 1000);
    }
});

// Задание 11
let inputElem = document.querySelector('#elem');
let timer5 = setInterval(() => {
    let value = parseInt(inputElem.value);
    value--;
    inputElem.value = value;
    if (value === 0) {
        clearInterval(timer5);
    }
}, 1000);

// Задание 12
let paragraphElem = document.querySelector('#elem14');
let timer6 = setInterval(() => {
    let value = parseInt(paragraphElem.textContent);
    value--;
    paragraphElem.textContent = value;
    if (value === 0) {
        clearInterval(timer6);
    }
}, 1000);

// Задание 13
let inputElem2 = document.querySelector('#elem16');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', () => {
    let value = parseInt(inputElem2.value);
    let paragraphElem2 = document.querySelector('#elem17');
    paragraphElem2.textContent = value;
    let timer7 = setInterval(() => {
        value--;
        paragraphElem2.textContent = value;
        if (value === 0) {
            clearInterval(timer7);
        }
    }, 1000);
});

// Задание 14
let colorElem = document.querySelector('#elem18');
let color = 'red';
setInterval(() => {
    color = color === 'red' ? 'green' : 'red';
    colorElem.style.color = color;
}, 1000);

// Задание 15
let messageElem = document.querySelector('#elem19');
setTimeout(() => {
    messageElem.textContent = 'Сообщение через 10 секунд';
}, 10000);

// Задание 16
let count = 0;
setTimeout(function run() {
    console.log(count);
    count++;
    setTimeout(run, (count + 1) * 1000);
}, 1000);

// Задание 17
let button2 = document.querySelector('#button');
let listElem = document.querySelector('#elem7');
button2.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'item';
    listElem.appendChild(li);
});

// Задание 18
let listElem2 = document.querySelector('#elem8');
listElem2.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

// Задание 19
let listElem3 = document.querySelector('#elem9');
let start = document.createElement('li');
start.textContent = 'start';
listElem3.insertBefore(start, listElem3.firstChild);
let finish = document.createElement('li');
finish.textContent = 'finish';
listElem3.appendChild(finish);

// Задание 20
let elem10 = document.querySelector('#elem10');
let newElem = document.createElement('li');
newElem.textContent = 'new';
elem10.parentNode.insertBefore(newElem, elem10);

// Задание 21
let elem11 = document.querySelector('#elem11');
let p = document.createElement('p');
p.textContent = '!!!';
elem11.parentNode.insertBefore(p, elem11);

// Задание 22
let elem12 = document.querySelector('#elem12');
let div = document.createElement('div');
div.className = 'www';
div.innerHTML = '<p>text</p><p>text</p><input>';
elem12.parentNode.insertBefore(div, elem12);

// Задание 23
let inputElem3 = document.querySelector('#elem13');
let button5 = document.querySelector('#button2');
button5.addEventListener('click', () => {
    let clone = inputElem3.cloneNode(true);
    inputElem3.parentNode.insertBefore(clone, inputElem3.nextSibling);
});

// Задание 24
let paragraphElem3 = document.querySelector('#elem14');
console.log(paragraphElem3.tagName === 'P'); // true