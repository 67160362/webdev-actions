// Ex3: Toggle Theme (จำค่าไว้ใน localStorage)
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeBtn.textContent = theme === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
applyTheme(savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ปุ่ม Say Hello: จำลองขั้นตอน deploy ทีละขั้น แล้วแสดงข้อความ
const helloBtn = document.querySelector('#helloBtn');
const status = document.querySelector('#status');
const steps = document.querySelectorAll('#pipeline li');

helloBtn.addEventListener('click', () => {
  helloBtn.disabled = true;
  status.classList.remove('ok');
  steps.forEach(s => s.classList.remove('done'));

  steps.forEach((step, i) => {
    setTimeout(() => {
      step.classList.add('done');
      status.textContent = 'กำลังทำขั้นที่ ' + (i + 1) + ': ' + step.textContent;
      if (i === steps.length - 1) {
        status.textContent = 'Hello from GitHub Pages!';
        status.classList.add('ok');
        helloBtn.disabled = false;
      }
    }, (i + 1) * 500);
  });
});

// ปีปัจจุบันใน footer
document.querySelector('#year').textContent = new Date().getFullYear();
