// Обязательное задание
let myList = document.getElementById('list'),
    main = document.getElementById('main'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    popup = document.getElementsByClassName('popup')[0],
    close = document.querySelector('.close'),
    ul = document.getElementsByTagName('ul'),
    story = myList.getElementsByClassName('item');


function addItem() {
  let newLi = document.createElement('li');
  newLi.innerHTML = 'Новая задача';
  newLi.className = 'item';
  myList.appendChild(newLi);
  popup.style.display = 'none';
}

function delItem() {
  myList.removeChild(story[0]);

  if (story.length == 0) popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePopup);

// Дополнительно задание
let age = +prompt('Сколько вам лет?', 18),
    name = prompt('Как вас зовут?', 'Пользователь'),
    boolean;

function access () {
    alert('Поздравляем, ' + name + '! Вам разрешено посетить сайт');
    console.log('Пользователь ' + name + ' допущен');
}

if (age >= 18) {
  boolean = confirm('Вы подписаны на рассылку?');
  boolean ? access() : alert('К сожалению, вы не можете посетить наш сайт :(');
} else {
  alert('К сожалению, вы не можете посетить наш сайт :(');
  console.log('Пользователь ' + name + ' не допущен');
}