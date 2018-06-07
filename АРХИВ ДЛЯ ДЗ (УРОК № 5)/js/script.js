let menuItem = document.getElementsByClassName('menu-item'),
	adv = document.getElementsByClassName('adv'),
	menu = document.getElementsByClassName('menu'),
	menuItem4 = document.createElement('li'),
	title = document.getElementsByClassName('title')[0],
	column = document.getElementsByClassName('column'),
	prompt2 = document.getElementsByClassName('prompt'),
	prompt1 = prompt('Каково ваше отношение к apple?');


let promptText = prompt2[0].textContent;
let newPromptText = promptText + prompt1;
prompt2[0].innerHTML = newPromptText;





let titleText = title.textContent; 

titleText = titleText.replace(" только технику Apple", "только подлинную технику Apple");

title.innerHTML = titleText;


column[1].removeChild(adv[0]);

menuItem4.classList.add('menu-item');

menuItem4.textContent = 'Пятый элемент';

menu[0].appendChild(menuItem4);

menu[0].insertBefore(menuItem[2], menuItem[1]);

document.body.style.background  = 'url(img/apple_true.jpg)';

