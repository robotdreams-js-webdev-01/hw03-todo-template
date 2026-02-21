const fs = require('fs');
const path = require('path');

const hwId = 'hw03';
const hintLevel = process.env.HINT_LEVEL;

const hints = {
  '1': '💡 Nézd meg a 11. óra diasorát – LocalStorage JSON.stringify/parse és addEventListener részek!',
  '2': '💡 Ellenőrizd: a saveToLocalStorage()-t minden todo-módosítás után meghívod-e (add, delete, toggle)? A loadFromLocalStorage()-ot az app.js végén kell hívni.',
  '3': "💡 Tárold a todo-kat tömbként: [{id: Date.now(), text: '...', done: false}]. A renderTodos() függvény mindig újraépíti a teljes listát a tömbből. A done: true elemekre add a 'completed' CSS osztályt.",
};

const hintText = hints[hintLevel];
if (!hintText) {
  console.error(`Ismeretlen hint szint: ${hintLevel}`);
  process.exit(1);
}

// Read hints-usage.json
let hintsData;
try {
  const raw = fs.readFileSync(path.join(process.cwd(), 'hints-usage.json'), 'utf8');
  hintsData = JSON.parse(raw);
} catch {
  hintsData = {};
}

// Increment usage counter
if (!hintsData[hwId]) {
  hintsData[hwId] = { usedHints: 0 };
}
hintsData[hwId].usedHints += 1;

// Append hint to GitHub Step Summary
const summary = `## 💡 Hint ${hintLevel} – 3. házi\n\n${hintText}\n\n> Felhasznált hintek száma: ${hintsData[hwId].usedHints}\n`;
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

// Write updated hints-usage.json
fs.writeFileSync(
  path.join(process.cwd(), 'hints-usage.json'),
  JSON.stringify(hintsData, null, 2)
);

console.log(`Hint ${hintLevel} megjelenítve. Összes felhasznált hint (${hwId}): ${hintsData[hwId].usedHints}`);
