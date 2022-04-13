// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const div2 = document.getElementById(`timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement('p');
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);

// 3a
let time = 1;
const stopwatch = setInterval(() => {
    console.log(time);
    time++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(stopwatch);
});

// 4
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement('p');
let num = 120;
const count = setInterval(() => {
  if (num > 0){
    let minutes = Math.floor(num/60);
    let seconds = num - minutes*60;
    p4.innerText = `${minutes}:${seconds}`;
    div3.append(p4);
  } else {
    clearInterval(count);
    p4.innerText = `TIME IS UP`;
    div3.append(p4);
  }
  num--;
}, 1000);
  