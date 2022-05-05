import "./styles/style.css";
import "./styles/style.scss";

const body = document.body;
const wrapper = document.createElement('div');
const keybord = document.querySelector('.keybord-area');
const textArea = document.querySelector('.text-area');

wrapper.classList.add('wrapper');
body.append(wrapper);
wrapper.insertAdjacentHTML('afterbegin', '<h1 class="task">Virtual Keyboard</h1>');
wrapper.insertAdjacentHTML('beforeend', '<p class="description">Change language -  LeftShift + LeftCtrl. The keyboard was made in the MacOs system.</p>');
wrapper.insertAdjacentHTML('beforeend', '<textarea autofocus placeholder="Text here..." class="text-area"  autofocus></textarea>');
wrapper.insertAdjacentHTML('beforeend', '<div class="keybord-area"></div>');



