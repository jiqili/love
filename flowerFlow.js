
const item = document.getElementsByClassName("item");
const content = document.getElementById("content");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let w = window.innerWidth;
let h = window.innerHeight;

canvas.width = w;
canvas.height = h;
// console.log(w,h)
let img0 = document.getElementById("img1");
let img1 = document.getElementById("img2");
let imgArr = [img0, img1];

let petalArr = [];
for (let i = 0; i < 25; i++) {
  petalArr.push({
    x: Math.random() * w,
    y: Math.random() * 1,
    vx: Math.random() * 1.4,
    vy: Math.random() * 5,
    img: imgArr[parseInt(Math.random() * 2)],
  });
}
// 每次调用就画一帧
const draw = () => {
  context.clearRect(0, 0, w, h);
  context.beginPath();
  petalArr.forEach((e) => {
    context.moveTo(e.x, e.y);
    context.drawImage(e.img, e.x, e.y, 16, 16);
  });
  context.fill();
  move();
};
// 调整上一帧的每片花瓣的坐标
const move = () => {
  petalArr.forEach((e) => {
    e.y += e.vy;
    e.x += e.vx;
    if (e.y > h || e.x > w) {
      e.y = Math.random() * 1;
      e.x = Math.random() * w;
    }
  });
};
setInterval(draw, 23);

