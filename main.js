// window.addEventListener('DOMContentLoaded', () => {

//     const mediaFiles = document.querySelectorAll('img, video');
//     let i = 0;
//     let currentPercent = 0;

//     Array.from(mediaFiles).forEach((file, index) => {
        
//         file.onload = () => {
//             i++;
//             console.log(file.complete);
//             currentPercent = ((i * 100) / mediaFiles.length).toFixed(1);
//             percents.innerHTML = currentPercent;

//             if(i === mediaFiles.length) {
//                 preloader.classList.add('preloader--hide')
//                 percents.innerHTML = 100;
//             }
//         }
//     })

// })



const preloader = document.querySelector('#preloader');
console.log(preloader);

window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');
});
