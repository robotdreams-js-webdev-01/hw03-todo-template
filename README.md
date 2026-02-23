# 3. házi – Vanilla JS Todo App

## Kontextus

**Kapcsolódó óra:** 11. óra – Aszinkron JS, DOM manipuláció, LocalStorage

---

## Tanulási célok

- DOM selectorok és `createElement` használata
- Event handling (`addEventListener`, `preventDefault`)
- Dinamikus lista renderelése JavaScript-tel
- LocalStorage (`JSON.stringify` / `JSON.parse`)
- Alapszintű input validáció és felhasználóbarát hibaüzenetek

---

## Részletes feladatleírás

Készíts egy **Vanilla JS Todo alkalmazást** – keretrendszer nélkül, csak HTML + CSS + JavaScript!

### Funkcionális követelmények

| Funkció              | Leírás                                                               |
| -------------------- | -------------------------------------------------------------------- |
| **Hozzáadás**        | Input mező + „Hozzáadás" gomb, VAGY Enter lenyomása                  |
| **Törlés**           | Minden todo-nak legyen saját X / Törlés gombja                       |
| **Complete jelölés** | Kattintásra vizuálisan jelölődjön (pl. áthúzás + halvány szín)       |
| **LocalStorage**     | Oldal újratöltése után is maradjanak meg a todo-k                    |
| **Validáció**        | Üres input ne hozzon létre todo-t; jelenjen meg olvasható hibaüzenet |

### Amit a sablon már ad

A sablon tartalmazza: HTML (form, input, lista, hibaüzenet helye), CSS (completed stílus), és az `app.js` vázat (selectorok, üres függvények, submit listener váz). **Neked kell megvalósítanod a logikát.**

### Explicit implementációs elvárások

- **preventDefault** – A submit handlerben hívd az `e.preventDefault()`-et.
- **Tömb** – Todo-k tömbként; használj `.push()`, `.filter()` (törlés), validáció (`trim()`, üres ellenőrzés).
- **Click** – Listaelemekre click (teljesítés / törlés).
- **DOM** – Lista dinamikusan épüljön (`innerHTML` / `createElement` / `textContent`).
- **LocalStorage** – `setItem`, `getItem`, `JSON.stringify`, `JSON.parse`; üres tároló alapértéke pl. `|| '[]'`.
- **Egyedi id** – Minden todo kapjon egyedi id-t (pl. `Date.now()`).
- **Deploy** – Az élő URL kerüljön a README-be.

---

## Minimum elvárások

- Hozzáadás, törlés és complete jelölés mind működik
- LocalStorage implementálva (mentés + betöltés oldalbetöltéskor)
- Az oldal deployolva van

---

## Pontozás

- **Automatikus pont (CI tesztek):** max 34 p
- **Manuális pont (dizájn, UX, deploy – az oktató adja):** max 16 p
- **Összesen:** 50 pont

---

## Futtatás

### 0. Gyors setup ellenőrzés (első lépés)

```bash
npm install
npm run dev
```

Nyisd meg: `http://localhost:5173`
Ha látod a `Todo App` címet, a setup rendben van.

### 1. Házi fejlesztése

```bash
npm install
npm run dev
```

A fejlesztői szerver elindul: `http://localhost:5173`

Build készítése:

```bash
npm run build
```

---

## Tippek

> 💡 Nézd vissza a **11. óra diasorát** –
> `querySelector`, `addEventListener`, `JSON.stringify`/`parse`, `classList`!
