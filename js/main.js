let showNavbarClassList = document.getElementById('showNavbar').classList

let showNavbar = () => showNavbarClassList.add('open-navbar')
   
let scrollStyle = element => document.getElementById(element).scrollIntoView({behavior: "smooth"})

let hiddenNavbar = () =>  showNavbarClassList.remove('open-navbar')

document.addEventListener('scroll', () => {
    if(showNavbarClassList.contains('open-navbar')) showNavbarClassList.remove('open-navbar')

    let btnStyle = document.getElementById('back-to-top').style

    if (window.pageYOffset > 80) {
        btnStyle.visibility = 'visible'
        btnStyle.opacity = 0.7
    }  else {
        btnStyle.visibility = 'hidden'
        btnStyle.opacity = 0
    }
})