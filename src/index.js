// import './styles/style.css';

const { body } = document;
const wrapper = document.createElement('div');

wrapper.classList.add('wrapper');
body.append(wrapper);
wrapper.insertAdjacentHTML('afterbegin', '<h1 class="task">Virtual Keyboard</h1>');
wrapper.insertAdjacentHTML('beforeend', '<p class="description">Change language -  Ctrl + Option. The keyboard was made in the MacOs system.</p>');
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
  ['ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666'],
];

const enUppercase = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592',
  'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
  'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
  'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift',
  'ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666',
];

const ruLowercase = [
  ']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё',
  'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shift',
  'ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666',
];

const ruUppercase = [
  '[', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', '&#8592',
  'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ё',
  'caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
  'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'shift',
  'ctrl', 'option', 'cmd', ' ', 'cmd', 'option', '&#9666', '&#9662', '&#9662', '&#9666',
];

// generate DOM keyboard

const enLowercaseArray = [];

for (let i = 0; i < enLowercase.length; i += 1) {
  const keyboardLine = document.createElement('div');
  keyboardLine.classList.add('keyboard-line');
  keyboard.append(keyboardLine);

  for (let j = 0; j < enLowercase[i].length; j += 1) {
    const key = document.createElement('button');
    key.classList.add('key');
    keyboardLine.append(key);
    enLowercaseArray.push(enLowercase[i][j]);
  }
}

// array of KeyCodes
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backlash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ShiftRight',
  'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
];

const keys = document.querySelectorAll('button');

// fill buttons by symbols
function fillButtons(data) {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].innerHTML = data[i];
  }
}

let currentLanguage = JSON.parse(localStorage.getItem('lang'));

if (!currentLanguage) {
  currentLanguage = [...enLowercaseArray];
}

localStorage.setItem('lang', JSON.stringify(currentLanguage));

fillButtons(currentLanguage);

let currentCase = JSON.parse(localStorage.getItem('case'));

if (!currentCase) {
  currentCase = [...currentLanguage];
}
localStorage.setItem('case', JSON.stringify(currentCase));

let capsLockPressed = JSON.parse(localStorage.getItem('caps-press'));

if (!capsLockPressed) {
  capsLockPressed = false;
}

localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));

const backspace = keys[13];
backspace.classList.add('backspace');
const tab = keys[14];
tab.classList.add('tab');
const capsLock = keys[28];
capsLock.classList.add('caps-lock', 'additional');
(capsLockPressed === true) ? capsLock.classList.add('key-press') : capsLock.classList.remove('key-press');
const enter = keys[40];
enter.classList.add('enter');
const shiftLeft = keys[41];
shiftLeft.classList.add('shift', 'shift-left', 'additional');
const shiftRight = keys[52];
shiftRight.classList.add('shift', 'shift-right', 'additional');
const ctrlLeft = keys[53];
ctrlLeft.classList.add('control', 'additional');
const altLeft = keys[54];
altLeft.classList.add('option', 'option-left', 'additional');
const cmdLeft = keys[55];
cmdLeft.classList.add('cmd', 'cmd-left', 'additional');
const space = keys[56];
space.classList.add('space');
const cmdRight = keys[57];
cmdRight.classList.add('cmd', 'cmd-right', 'additional');
const altRight = keys[58];
altRight.classList.add('option', 'option-right', 'additional');
const arrLeft = keys[59];
arrLeft.classList.add('arrow', 'arrow-left', 'additional');
const arrDown = keys[60];
arrDown.classList.add('arrow', 'arrow-down', 'additional');
const arrUp = keys[61];
arrUp.classList.add('arrow', 'arrow-up', 'additional');
const arrRight = keys[62];
arrRight.classList.add('arrow', 'arrow-right', 'additional');

// light on key-press

function lightButtons(event) {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.code !== 'CapsLock') {
      switch (event.code) {
        case keyCodes[i]:
          keys[i].classList.toggle('key-press');
          break;
      }
    }
  }
}

// shift lower/upper function

function shiftUpperCase(event) {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keys[15].innerHTML === 'q') {
      fillButtons(enUppercase);
    }
    if (keys[15].innerHTML === 'й') {
      fillButtons(ruUppercase);
    }
  }
}

function shiftLowerCase(event) {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keys[15].innerHTML === 'Q') {
      fillButtons(enLowercaseArray);
    }
    if (keys[15].innerHTML === 'Й') {
      fillButtons(ruLowercase);
    }
  }
}
// caps lock from real keyboard
function capsLockCase(event) {
  if (event.code === 'CapsLock') {
    if (!event.getModifierState('CapsLock')) {
      capsLock.classList.toggle('key-press');
      capsLockPressed = false;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      if (keys[15].innerHTML === 'Q') {
        currentCase = [...enLowercaseArray];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
      if (keys[15].innerHTML === 'Й') {
        currentCase = [...ruLowercase];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
    }

    if (event.getModifierState('CapsLock')) {
      capsLock.classList.toggle('key-press');
      capsLockPressed = true;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      if (keys[15].innerHTML === 'q') {
        currentCase = [...enUppercase];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
      if (keys[15].innerHTML === 'й') {
        currentCase = [...ruUppercase];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
    }
  }
}

function changeLanguage(event) {
  if ((event.ctrlKey) && (event.altKey)) {
    // event.preventDefault();
    if (keys[15].innerHTML === 'q') {
      currentLanguage = [...ruLowercase];
      localStorage.setItem('lang', JSON.stringify(currentLanguage));
      localStorage.setItem('case', JSON.stringify(currentLanguage));
      capsLockPressed = false;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      fillButtons(currentLanguage);
    } else if (keys[15].innerHTML === 'й') {
      currentLanguage = [...enLowercaseArray];
      localStorage.setItem('lang', JSON.stringify(currentLanguage));
      localStorage.setItem('case', JSON.stringify(currentLanguage));
      capsLockPressed = false;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      fillButtons(currentLanguage);
    }

    if (keys[15].innerHTML === 'Q') {
      currentLanguage = [...ruUppercase];
      localStorage.setItem('lang', JSON.stringify(currentLanguage));
      localStorage.setItem('case', JSON.stringify(currentLanguage));
      capsLockPressed = true;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      fillButtons(currentLanguage);
    } else if (keys[15].innerHTML === 'Й') {
      currentLanguage = [...enUppercase];
      localStorage.setItem('lang', JSON.stringify(currentLanguage));
      localStorage.setItem('case', JSON.stringify(currentLanguage));
      capsLockPressed = true;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      fillButtons(currentLanguage);
    }
  }
}

// document.addEventListener('keypress', changeLanguage)

document.addEventListener('keydown', (event) => {
  changeLanguage(event);
  lightButtons(event);
  shiftUpperCase(event);
  capsLockCase(event);

  if (event.code === 'Tab') {
    event.preventDefault();
    let cursorPosition = textArea.selectionStart;
    const beforeText = textArea.value.slice(0, cursorPosition);
    const afterText = textArea.value.slice(cursorPosition);
    textArea.value = `${beforeText}\t${afterText}`;
    cursorPosition += 1;
  }
});

document.addEventListener('keyup', (event) => {
  lightButtons(event);
  shiftLowerCase(event);
  capsLockCase(event);
});

// virtual keyboard input

function virtualKeyboardInput(event) {
  if (event.target.classList.contains('caps-lock')) {
    if (!event.target.classList.contains('key-press')) {
      capsLock.classList.add('key-press');
      capsLockPressed = true;
      localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
      if (keys[15].innerHTML === 'q') {
        currentCase = [...enUppercase];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
      if (keys[15].innerHTML === 'й') {
        currentCase = [...ruUppercase];
        fillButtons(currentCase);
        localStorage.setItem('case', JSON.stringify(currentCase));
        localStorage.setItem('lang', JSON.stringify(currentCase));
      }
    } else if (event.target.classList.contains('caps-lock')) {
      if (event.target.classList.contains('key-press')) {
        capsLock.classList.remove('key-press');
        capsLockPressed = false;
        localStorage.setItem('caps-press', JSON.stringify(capsLockPressed));
        if (keys[15].innerHTML === 'Q') {
          currentCase = [...enLowercaseArray];
          fillButtons(currentCase);
          localStorage.setItem('case', JSON.stringify(currentCase));
          localStorage.setItem('lang', JSON.stringify(currentCase));
        }
        if (keys[15].innerHTML === 'Й') {
          currentCase = [...ruLowercase];
          fillButtons(currentCase);
          localStorage.setItem('case', JSON.stringify(currentCase));
          localStorage.setItem('lang', JSON.stringify(currentCase));
        }
      }
    }
  }

  let cursorPosition = textArea.selectionStart;
  const cursorPositionEnd = textArea.selectionEnd;
  const beforeText = textArea.value.slice(0, cursorPosition);
  const afterText = textArea.value.slice(cursorPosition);

  if (event.target.tagName === 'BUTTON' && event.target.classList.contains('additional') === false) {
    textArea.value += event.target.innerHTML;
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
    cursorPosition -= 5;
  }

  if (event.target.classList.contains('arrow-down')) {
    cursorPosition += 5;
  }

  if (event.target.classList.contains('arrow-left')) {
    cursorPosition -= 1;
  }

  if (event.target.classList.contains('arrow-right')) {
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

  textArea.selectionStart = cursorPosition;
  textArea.selectionEnd = cursorPosition;

  textArea.blur();
  textArea.focus();
}

keyboard.addEventListener('click', virtualKeyboardInput);

function virtualKeyboardPress(event) {
  if (event.target.classList.contains('shift')) {
    event.target.classList.add('key-press');
    if (keys[15].innerHTML === 'q') {
      fillButtons(enUppercase);
    } else {
      fillButtons(ruUppercase);
    }
  } else

  if (event.target.tagName === 'BUTTON') {
    if (event.target.classList.contains('capsLock')) {
      return;
    }
    event.target.classList.add('key-press');
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keys[15].innerHTML === 'q') {
      fillButtons(enUppercase);
    }

    if (keys[15].innerHTML === 'й') {
      fillButtons(ruUppercase);
    }

    if (keys[15].innerHTML === 'Q') {
      fillButtons(enLowercaseArray);
    }

    if (keys[15].innerHTML === 'Й') {
      fillButtons(ruLowercase);
    }
  }
}
keyboard.addEventListener('mousedown', virtualKeyboardPress);

function virtualKeyboardOut(event) {
  if (event.target.classList.contains('shift')) {
    event.target.classList.remove('key-press');
    if (keys[15].innerHTML === 'Q') {
      fillButtons(enLowercaseArray);
    } else {
      fillButtons(ruLowercase);
    }
  } else

  if (event.target.tagName === 'BUTTON') {
    if (event.target.classList.contains('capsLock')) {
      return;
    }
    event.target.classList.remove('key-press');
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keys[15].innerHTML === 'Q') {
      fillButtons(enLowercaseArray);
    }

    if (keys[15].innerHTML === 'Й') {
      fillButtons(ruLowercase);
    }

    if (keys[15].innerHTML === 'q') {
      fillButtons(enUppercase);
    }

    if (keys[15].innerHTML === 'й') {
      fillButtons(ruUppercase);
    }

    // (keys[15].innerHTML === 'Q') ? fillButtons(enLowercaseArray) : fillButtons(ruLowercase);
  }
}

keyboard.addEventListener('mouseup', virtualKeyboardOut);
