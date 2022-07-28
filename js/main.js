let showNavbarClassList = document.getElementById('showNavbar').classList

let showNavbar = () => showNavbarClassList.add('open-navbar')
   
let scrollStyle = element => document.getElementById(element).scrollIntoView({behavior: "smooth"})

let hiddenNavbar = () =>  showNavbarClassList.remove('open-navbar')

let mode = document.getElementById("mode")

const getTheme = () => {
    let theme = localStorage.getItem("theme")
    if(theme) {
        document.documentElement.setAttribute('data-theme', theme)
        if(theme === "dark") {
            mode.innerHTML = '<i class="fas fa-moon"></i>'
        } else {
            mode.innerHTML = '<i class="fas fa-sun"></i>'
        }
    }
}

mode.onclick = () => {
    let theme = localStorage.getItem("theme")
    if(!theme) {
        localStorage.setItem("theme", "dark")
    } else {
        if(theme !== "dark") {
            localStorage.setItem("theme", "dark")
            mode.innerHTML = '<i class="fas fa-moon"></i>'
        }
        else {
            localStorage.setItem("theme", "light")
            mode.innerHTML = '<i class="fas fa-sun"></i>'
        }
    }
    document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"))
}

document.addEventListener('scroll', () => {
    if(showNavbarClassList.contains('open-navbar')) showNavbarClassList.remove('open-navbar')
    let btnStyle = document.getElementById('back-to-top').style
    if (window.pageYOffset > 200) {
        btnStyle.visibility = 'visible'
        btnStyle.opacity = 1
    }  else {
        btnStyle.visibility = 'hidden'
        btnStyle.opacity = 0
    }
})