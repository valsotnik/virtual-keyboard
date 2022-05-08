# RSS Virtual Keyboard
## Deploy: https://valsotnik.github.io/virtual-keyboard/
## Branch development: https://github.com/valsotnik/virtual-keyboard/tree/virtual-keyboard
- Для сборки проекта использовался webpack, а так же ESLint с конфигом (eslint-config-airbnb-base).
- Файл package.json содержит все необходимые зависимости для установки и дальнейшей проверки.

## Самопроверка: ниже приведены требования и мои комментарии
### Score: 110 / 110
* the generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag): (20/20)

* pressing a key on a physical keyboard highlights the key on the virtual keyboard (you should check keystrokes of numbers, letters, punctuation marks, backspace, del (if it's present), enter, shift, alt, ctrl, tab, caps lock, space, arrow keys: (10/10)

* switching keyboard layouts between English and another language is implemented. Selected language should be saved and used on page reload. A keyboard shortcut for switching a language should be specified on the page: (15/15)
comment:(Change language -  Ctrl + Option. The keyboard was made in the MacOs system.)

* mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field (text area): (15/15)

* animation of pressing a key is implemented: (15/15)

* usage of ES6+ features: (15/15)

* usage of ESLint: (10/10)

* requirements to the repository, commits and pull request are met: (10/10)

* Penalties: there're errors related to the executable code (errors like favicon.ico: Failed to load resource: the server responded with a status of 404 are not taken into account) or there're eslint-config-airbnb-base warnings: (no-errors)
