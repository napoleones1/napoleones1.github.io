//untuk navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// untuk hamburger buton

const hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener ('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


//klik di luar haburger
window.addEventListener ('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
    }
})

//darkmode toggle
//const darkToggle = document.querySelector('#dark-toggle');
//const html = document.querySelector('html');
//
//darkToggle.addEventListener('click', function() {
//    if (darkToggle.checked) {
//        html.classList.add('dark');
//        localStorage.theme = 'dark';
//    } else {
//        html.classList.remove('dark');
//        localStorage.theme = 'light'
//    }
//})
//
//
////memindahkan posisi toggle dark mode
//if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//    darkToggle.checked = true;
//  } else {
//    darkToggle.checked = false;
//  }

//icon
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

//them vars
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
};

//inithial them check
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('display-none');
        return
    }
    sunIcon.classList.add('display-none');
};

//manual them switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener('click', () => {
    themeSwitch();
});
moonIcon.addEventListener('click', () => {
    themeSwitch();
});

//invoke theme check to initial load
themeCheck();