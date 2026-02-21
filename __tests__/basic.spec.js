const fs = require('fs');

describe('HW03 – alapvető ellenőrzések', () => {
  test('src/app.js exists', () => {
    expect(fs.existsSync('./src/app.js')).toBe(true);
  });

  test('src/app.js references localStorage', () => {
    const code = fs.readFileSync('./src/app.js', 'utf8');
    expect(code.includes('localStorage')).toBe(true);
  });

  test('src/index.html has todo-form', () => {
    const html = fs.readFileSync('./src/index.html', 'utf8');
    expect(html.includes('todo-form')).toBe(true);
  });
});
