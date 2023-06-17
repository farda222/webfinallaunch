// pick content element
const content = document.querySelector(".content");

// content width
const contentWidth = content.offsetWidth;

// duration of the content
const animationDuration = contentWidth / 99999999;

// change the duration of content
content.style.animationDuration = `${animationDuration}s`;

const bodyEl = document.body;
const barEl = document.querrySelector('.bar');
const updateBar = () => {
  let scrollPos =
    (windos.scrollY / (bodyEl.scrollHeight - winddow.innerHeight)) * 100;
  barEl.style.width = '${scrollPos}%';
  requestAnimationFrame(updateBar);
};
updateBar();
