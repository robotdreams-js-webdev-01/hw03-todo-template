// 11. óra: DOM selectorok
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const errorMessage = document.querySelector('#error-message');

// TODO [10p]: Töltsd be a mentett todo-kat a localStorage-ból (pl. getItem). Ha nincs adat, kezeld üres tömbként.
function loadFromLocalStorage() {
  /* ... */
}

// TODO [10p]: Mentsd a todo-kat a localStorage-ba (pl. setItem, JSON.stringify).
function saveToLocalStorage(todos) {
  /* ... */
}

// TODO [12p]: Rajzold újra a teljes listát a tömb alapján. Minden elem legyen kattintható (teljesítés/törlés).
//       A kész elemeket vizuálisan különböztesd meg (pl. CSS osztály).
function renderTodos(todos) {
  /* ... */
}

// TODO [6p]: Új todo hozzáadása szöveg alapján. Egyedi id, szöveg, kész-e. Mentsd és rajzolj újra.
function addTodo(text) {
  /* ... */
}

// TODO [4p]: Todo törlése id alapján. Mentsd és rajzolj újra.
function deleteTodo(id) {
  /* ... */
}

// TODO [4p]: Egy todo „kész” állapotának váltása id alapján. Mentsd és rajzolj újra.
function toggleTodo(id) {
  /* ... */
}

// TODO [4p]: Form küldés kezelése: ne töltődjön újra az oldal. Üres input ne hozzon létre todo-t.
todoForm.addEventListener('submit', (e) => {
  /* ... */
});

// Betöltés az oldal indulásakor
loadFromLocalStorage();
