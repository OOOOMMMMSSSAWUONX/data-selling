
// ----- CONFIG -----
const CONFIG = {
  whatsapp: "https://wa.me/91XXXXXXXXXX", // replace with your number
  telegram: "https://t.me/your_username"  // replace with your handle
};

document.addEventListener("DOMContentLoaded", () => {
  const w = document.querySelector('[data-whatsapp]'); if(w) w.href = CONFIG.whatsapp;
  const t = document.querySelector('[data-telegram]'); if(t) t.href = CONFIG.telegram;
});
