// NAVBAR CODE
const btnList = document.querySelector('.hamburger')
const iconBtn = document.querySelector('.hamburger i')
const navbarContents = document.querySelector('.navbar-contents')

btnList.addEventListener('click', function() {
    navbarContents.classList.toggle('slide')
    iconBtn.classList.toggle('fa-xmark')
})
// NAVBAR CODE END

// DARKMODE
const btnChangeTheme = document.querySelector('.theme-change')
const changeThemeIcon = document.querySelector('.theme-change i')

if(localStorage.getItem('theme') == 'dark')
    setDarkMode(true)

function setDarkMode(isDark) {
    if(isDark) {
        document.body.setAttribute('id', 'darkmode')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.setAttribute('id', '')
        localStorage.setItem('theme')
    }
}

btnClicked = true
btnChangeTheme.addEventListener('click', function() {
    if(btnClicked) {
        changeThemeIcon.classList.remove('fa-sun')
        changeThemeIcon.classList.add('fa-moon')
        btnClicked = false
    } else {
        changeThemeIcon.classList.add('fa-sun')
        changeThemeIcon.classList.remove('fa-moon')
        btnClicked = true
    }

    if(changeThemeIcon.classList.contains('fa-sun')) {
        setDarkMode(true)
    } else {
        setDarkMode(false)
    }
})
