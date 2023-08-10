const video = document.querySelector('.video-container');
const btns = document.querySelector('.switch-btn');

btns.addEventListener('click',function(){
    if(!btns.classList.contains('slide')){
        btns.classList.add("slide");
        video.pause();
    }else{
        btns.classList.remove('slide');
        video.play();
    }
});







const preLoader = document.querySelector('.preloader');
window.addEventListener('load',function(){
    preLoader.classList.add('hide-preloader');
})