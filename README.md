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

| Funkció | Leírás |
|---|---|
| **Hozzáadás** | Input mező + „Hozzáadás" gomb, VAGY Enter lenyomása |
| **Törlés** | Minden todo-nak legyen saját X / Törlés gombja |
| **Complete jelölés** | Kattintásra vizuálisan jelölődjön (pl. áthúzás + halvány szín) |
| **LocalStorage** | Oldal újratöltése után is maradjanak meg a todo-k |
| **Validáció** | Üres input ne hozzon létre todo-t; jelenjen meg olvasható hibaüzenet |

### Technikai megkötések

- **Csak Vanilla JS** – ne használj React-et, Vue-t, jQuery-t stb.
- A todo-kat tömbként tárold: `[{ id: Date.now(), text: '...', done: false }]`
- A `renderTodos()` függvény mindig újraépíti a teljes listát a tömbből
- **Deploy** – tedd ki élőbe (GitHub Pages vagy Netlify), és az élő URL-t írd a README-be

---

## Minimum elvárások

- Hozzáadás, törlés és complete jelölés mind működik
- LocalStorage implementálva (mentés + betöltés oldalbetöltéskor)
- Az oldal deployolva van

---

## Pontozás (50 pont)

| Kritérium | Pont |
|---|---|
| Alap UI: hozzáadás és törlés működik | 10p |
| Complete jelölés vizuálisan egyértelmű állapottal | 10p |
| LocalStorage mentés minden változáskor + betöltés oldalbetöltéskor | 15p |
| Input validáció + felhasználóbarát hibaüzenet | 5p |
| Kódminőség (strukturált függvények, DRY, olvasható névadás) | 10p |

---

## Futtatás

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
