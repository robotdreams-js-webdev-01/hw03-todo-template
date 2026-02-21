// 11. óra: DOM selectorok
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const errorMessage = document.querySelector('#error-message');

const STORAGE_KEY = 'hw03-todos';

// TODO (11. óra – JSON.parse): Töltsd be a mentett todo-kat a LocalStorage-ból
//   1. Olvasd ki a localStorage.getItem(STORAGE_KEY) értékét
//   2. Ha van adat, JSON.parse()-szal alakítsd vissza tömbbé
//   3. Hívd meg a renderTodos()-t a betöltött tömbből
function loadFromLocalStorage() {
  /* ... */
}

// TODO (11. óra – JSON.stringify): Mentsd a todo-kat LocalStorage-ba
//   Paraméter: todos – az aktuális todo tömb
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
function saveToLocalStorage(todos) {
  /* ... */
}

// TODO (11. óra – createElement / innerHTML): Rendereld újra a teljes listát
//   1. Ürítsd ki a todoList tartalmát (todoList.innerHTML = '')
//   2. Iterálj a todos tömbön (forEach)
//   3. Minden elemhez hozz létre egy <li>-t:
//      - A szöveg kapja a 'completed' osztályt, ha todo.done === true
//      - Legyen benne egy gomb a done-toggle-höz és egy a törléshez
//   4. Appendeld a li-t a todoList-be
function renderTodos(todos) {
  /* ... */
}

// TODO (11. óra – Array push): Hozz létre egy új todo objektumot
//   Struktúra: { id: Date.now(), text: '...', done: false }
//   1. Olvasd ki az aktuális todos tömböt a LocalStorage-ból
//   2. Push-old az új elemet
//   3. Mentsd vissza: saveToLocalStorage(todos)
//   4. Rendereld: renderTodos(todos)
function addTodo(text) {
  /* ... */
}

// TODO (11. óra – Array filter): Töröld a todo-t az id alapján
//   1. Szűrd ki az adott id-jű elemet a tömbből
//   2. Mentsd a szűrt tömböt: saveToLocalStorage
//   3. Rendereld: renderTodos
function deleteTodo(id) {
  /* ... */
}

// TODO (11. óra – Array map): Váltsd a done állapotot az id alapján
//   1. Map-peld a tömböt: ha az elem id-je egyezik, adj vissza { ...todo, done: !todo.done }
//   2. Mentsd: saveToLocalStorage
//   3. Rendereld: renderTodos
function toggleTodo(id) {
  /* ... */
}

// TODO (11. óra – Events): Kezeld a form submit eseményt
//   1. e.preventDefault() – megakadályozza az oldal újratöltését!
//   2. Olvasd ki és trim-eld a todoInput értékét
//   3. Ha üres: jelenítsd meg a hibaüzenetet, térj vissza
//   4. Ha nem üres: rejtsd el a hibaüzenetet, hívd addTodo()-t, ürítsd az inputot
todoForm.addEventListener('submit', (e) => {
  /* ... */
});

// Betöltés az oldal indulásakor
loadFromLocalStorage();
