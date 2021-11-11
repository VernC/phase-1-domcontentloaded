// Your code goes here
// ====================================
// This is before the test started
document.addEventListener("DOMContentLoaded", function () {
  let p = document.querySelector('p')
  p.textContent = 'This is really cool!';
});
//========================================
// document.addEventListener("DOMContentLoaded", ready)
//     function updateText(words) {
//         let p = document.querySelector('p')
//         p.textContent = words
//     }

// updateText('This is really cool!')
//========================================
// //works but doesn't work
// function updateText(words){
//     let p = document.querySelector('p')
//     p.textContent = words
// }
// updateText('This is really cool!')
// //=================================
// //works but doesn't work
// function updateText(words){
//     let p = document.querySelector('p')
//     p.innerText = words
// }
// updateText('This is really cool!')
// //-----------------------------------