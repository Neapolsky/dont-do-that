function menuOpen() {
    let hamburger = document.querySelector('#hamburger');
    let navList = document.querySelector('#navList');
    let body = document.querySelector('#body');
    hamburger.onclick = function(){
        hamburger.classList.toggle('_active');
        navList.classList.toggle('_included');
        body.classList.toggle('hidden')
    }
    
    // let linkInfo = document.querySelector('#info');
    // let linkPrepare = document.querySelector('#prepare');
    // let linkYou = document.querySelector('#you');
    // let linkCheck = document.querySelector('#check');
    // linkInfo.onclick = function(){
    //     hamburger.classList.remove('_active');
    //     navList.classList.remove('_included');
    //     body.classList.remove('hidden');
    // }
    // linkPrepare.onclick = function(){
    //     hamburger.classList.remove('_active');
    //     navList.classList.remove('_included');
    //     body.classList.remove('hidden');
    // }
    // linkYou.onclick = function(){
    //     hamburger.classList.remove('_active');
    //     navList.classList.remove('_included');
    //     body.classList.remove('hidden');
    // }
    // linkCheck.onclick = function(){
    //     hamburger.classList.remove('_active');
    //     navList.classList.remove('_included');
    //     body.classList.remove('hidden');
    // }
    let menuLinks = document.querySelectorAll('.nav__list a');
    console.log(menuLinks);
    menuLinks.forEach(function (menuLink){
        menuLink.onclick = function(){
            hamburger.classList.remove('_active');
            navList.classList.remove('_included');
            body.classList.remove('hidden');
        }
    })
        
    
}
menuOpen();