const center = document.querySelector('.center');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const centerRect = center.getBoundingClientRect();
const btn2Rect = btn2.getBoundingClientRect();
btn1.addEventListener('click', () => {

});
btn2.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (centerRect.width - btn2Rect.width)) + 1;
    const j = Math.floor(Math.random() * (centerRect.height - btn2Rect.height)) + 1;
    btn2.style.left = i + 'px';
    btn2.style.top = j + 'px';
});