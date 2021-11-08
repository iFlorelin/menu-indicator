'use strict'

let marker = document.querySelector(".indi");
let list = document.querySelectorAll(".block");
let list2 = document.querySelectorAll("span");

function move(e) {
  marker.style.left = e.offsetLeft + 31 + "px";
}

list.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    move(e.currentTarget);
  });
});


// function activLink () {
//     list2.forEach((item) =>
//     item.classList.remove('active'));
//     this.classList.add('activ');

// }

//     list2.forEach ((item) =>
//     item.addEventListener('mouseover', activLink))
