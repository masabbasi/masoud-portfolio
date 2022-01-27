window.addEventListener('scroll', () => {
    if(window.scrollY < 500){
        document.querySelector('.html').setAttribute('style', "width :0%")
        document.querySelector('.css').setAttribute('style', "width :0%")
        document.querySelector('.js').setAttribute('style', "width :0%")
        document.querySelector('.photoshop').setAttribute('style', "width :0%")
        document.querySelector('.illustrator').setAttribute('style', "width :0%")
    }
    else if(window.scrollY > 500){
        document.querySelector('.html').setAttribute('style', "width :90%")
        document.querySelector('.css').setAttribute('style', "width :80%")
        document.querySelector('.js').setAttribute('style', "width :10%")
        document.querySelector('.photoshop').setAttribute('style', "width :70%")
        document.querySelector('.illustrator').setAttribute('style', "width :60%")
    } 
})