// import './styles/style.css';

const { body } = document;
const wrapper = document.createElement('div');

wrapper.classList.add('wrapper');
body.append(wrapper);
wrapper.insertAdjacentHTML('afterbegin', '<h1 class="task">Virtual Keyboard</h1>');
wrapper.insertAdjacentHTML('beforeend', '<p class="description">Change language -  Command + Space. The keyboard was made in the MacOs system.</p>');
wrapper.insertAdjacentHTML('beforeend', '<textarea autofocus placeholder="Text here..." class="text-area"  autofocus></textarea>');
wrapper.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');

const keyboard = document.querySelector('.keyboard');
const textArea = document.querySelector('.text-area');

// arrays of symbols in en/ru and UpperCase/LowerCase
const enLowercase = [
	['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
	['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92'],
	['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
	['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
	['ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666']
];

const enUppercase = [
	'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592',
	'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}','|',
	'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
	'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift',
	'ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666'
];

const ruLowercase = [
	']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592',
	'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё',
	'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
	'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shift',
	'ctrl', 'option', 'cmd', ' ', 'cmd', 'alt', '&#9666', '&#9662', '&#9662', '&#9666'
];

const ruUppercase = [
	'[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', '&#8592',
	'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё',
	'caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
	'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'shift',
	'ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666'
];

// generate DOM keyboard


let enLowercaseArray = [];

for (let i = 0; i < enLowercase.length; i++){
    let keyboardLine = document.createElement('div');
    keyboardLine.classList.add('keyboard-line')
    keyboard.append(keyboardLine);

    for (let j = 0; j < enLowercase[i].length; j++){
        let key = document.createElement('button');
        key.classList.add('key');
        keyboardLine.append(key);
        enLowercaseArray.push(enLowercase[i][j])
    }

}

// array of KeyCodes
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backlash',
                      'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
                      'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ShiftRight',
                      'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight'
];


let keys = document.querySelectorAll('button');


// fill buttons by symbols
function fillKeys (data){
    for(let i = 0; i < keys.length; i++){
        keys[i].innerHTML = data[i];
    }
}

// take from localStorage
let lang
let languageStorage;
let language = JSON.parse(localStorage.getItem(lang));

if (!language){
    fillKeys(enLowercaseArray)
} else {
    fillKeys(language);
}


let backspace = keys[13];
backspace.classList.add('backspace');
let tab = keys[14];
tab.classList.add('tab');
let capsLock = keys[28];
capsLock.classList.add('caps-lock', 'additional');
let enter = keys[40];
enter.classList.add('enter');
let shiftLeft = keys[41];
shiftLeft.classList.add('shift', 'shift-left', 'additional');
let shiftRight = keys[52];
shiftRight.classList.add('shift', 'shift-right', 'additional');
let ctrlLeft = keys[53];
ctrlLeft.classList.add('control', 'additional');
let altLeft = keys[54];
altLeft.classList.add('option', 'option-left', 'additional');
let cmdLeft = keys[55];
cmdLeft.classList.add('cmd', 'cmd-left', 'additional');
let space = keys[56];
space.classList.add('space');
let cmdRight = keys[57];
cmdRight.classList.add('cmd', 'cmd-right', 'additional');
let altRight = keys[58];
altRight.classList.add('option', 'option-right', 'additional');
let arrLeft = keys[59];
arrLeft.classList.add('arrow', 'arrow-left', 'additional');
let arrDown = keys[60];
arrDown.classList.add('arrow', 'arrow-down', 'additional');
let arrUp = keys[61];
arrUp.classList.add('arrow', 'arrow-up', 'additional');
let arrRight = keys[62];
arrRight.classList.add('arrow', 'arrow-right', 'additional');


// light on key-press, change lang

document.addEventListener('keydown', (event) => {


	    for (let i = 0; i < keys.length; i++){

        switch (event.code) {
            case keyCodes[i]:
                keys[i].classList.add('key-press');
              break;
            }
    }

	if (event.code == 'Space' && (event.metaKey)) {

			if(keys[0].innerHTML !== '`'){

							localStorage.clear();
							languageStorage = ruLowercase;

							localStorage.setItem(lang, JSON.stringify(languageStorage));
							language = JSON.parse(localStorage.getItem(lang));

							fillKeys(languageStorage);
					
			} else {

							localStorage.clear();
							languageStorage = enLowercaseArray;

							localStorage.setItem(lang, JSON.stringify(languageStorage));
							language = JSON.parse(localStorage.getItem(lang));

							fillKeys(languageStorage);
			}
		}

	if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
		 
			(keys[0].innerHTML === '`') ? fillKeys(enUppercase) : fillKeys(ruUppercase);
		 
	}

	if (event.code == 'CapsLock') {
			(keys[0].innerHTML === '`') ? fillKeys(enUppercase) : fillKeys(ruUppercase);
	}
});

document.addEventListener('keyup', (event) => {


	for (let i = 0; i < keys.length; i++){

		switch (event.code) {
				case keyCodes[i]:
						keys[i].classList.remove('key-press');
					break;
				}
}


	if (event.code == 'ShiftLeft' || event.code == 'ShiftRight' ){
			
			(keys[0].innerHTML === '~') ? fillKeys(enLowercaseArray) : fillKeys(ruLowercase);
			

	}
});

// virtual keyboard input


keyboard.addEventListener('click', virtualKeyboardInput);

function virtualKeyboardInput(event){
    
   

  let cursorPosition = textArea.selectionStart;
  const cursorPositionEnd = textArea.selectionEnd;
  const beforeText = textArea.value.slice(0, cursorPosition);
  const afterText = textArea.value.slice(cursorPosition);

  console.log(cursorPosition);

    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('additional') === false){
        textArea.value += event.target.innerHTML
        cursorPosition += 1;
    }

    if (event.target.classList.contains('enter')) {
        textArea.value = `${beforeText}\n${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('tab')) {
        textArea.value = `${beforeText}\t${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('arrow-up')) {
        textArea.value = `${beforeText}${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('arrow-down')) {
        textArea.value = `${beforeText}${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('arrow-left')) {
        textArea.value = `${beforeText}${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('arrow-right')) {
        textArea.value = `${beforeText}${afterText}`;
        cursorPosition += 1;
    }

    if (event.target.classList.contains('backspace')) {
        if (cursorPositionEnd > cursorPosition) {
            textArea.value = textArea.value.slice(0, cursorPosition) + textArea.value.slice(cursorPositionEnd);
          } else {
            textArea.value = beforeText.slice(0, -1) + afterText;
            cursorPosition = cursorPosition > 0 ? cursorPosition - 1 : 0;
          }
    }

    textArea.blur();
    textArea.focus();
    textArea.selectionStart = cursorPosition;
    textArea.selectionEnd = cursorPosition;
}

keyboard.addEventListener('mousedown', virtualKeyboardPress);

function virtualKeyboardPress(event) {

    if (event.target.classList.contains('capsLock')){
        if (event.target.classList.contains('key-press')){
            event.target.classList.remove('key-press')
            if(keys[0].innerHTML === '~'){
                fillKeys(enLowercaseArray)
            } else {
                fillKeys(ruLowercase)
            }
        } else {
            event.target.classList.add('key-press')
            if(keys[0].innerHTML === '`'){
                fillKeys(enUppercase)
            } else {
                fillKeys(ruUppercase)
            }
        }
    } else
    if (event.target.classList.contains('shiftLeft') || event.target.classList.contains('shiftRight')){
        event.target.classList.add('key-press');
        if(keys[0].innerHTML === '`'){
            fillKeys(enUppercase)
        } else {
            fillKeys(ruUppercase)
        }
    
    } else

    if (event.target.tagName === 'BUTTON'){
        event.target.classList.add('key-press')
    }
}

keyboard.addEventListener('mouseup', virtualKeyboardRelease);

function virtualKeyboardRelease(event) {

    if (event.target.classList.contains('shiftLeft') || event.target.classList.contains('shiftRight')){
        event.target.classList.remove('key-press');
        if(keys[0].innerHTML === '~'){
            fillKeys(enLowercaseArray)
        } else {
            fillKeys(ruLowercase)
        }
    
    } else

    if(event.target.tagName === 'BUTTON'){
        if (event.target.classList.contains('capsLock')){
            return
        }
      event.target.classList.remove('key-press')
    }
    
}



