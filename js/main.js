function toggleDish(index) {
    const dishCollection = document.getElementsByClassName('popular-foods__card')
    for (let i = 0; i < dishCollection.length; i++) {
        if (i !== index) {
            dishCollection[i].classList.remove('active-card')
        } else {
            dishCollection[i].classList.add('active-card')
        }
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu')
    const menuIcon = document.getElementById('menu-icon')
    const closeIcon = document.getElementById('close-icon')
    if (mobileMenu.classList.contains('hide-content')) {
        menuIcon.classList.add('hide-content')
        closeIcon.classList.remove('hide-content')
        mobileMenu.classList.remove('hide-content')
        mobileMenu.classList.remove('slide-out')
        mobileMenu.classList.add('slide-in')
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu')
    const menuIcon = document.getElementById('menu-icon')
    const closeIcon = document.getElementById('close-icon')
    closeIcon.classList.add('hide-content')
    menuIcon.classList.remove('hide-content')
    mobileMenu.classList.remove('slide-in')
    mobileMenu.classList.add('slide-out')
    setTimeout(() => {
        mobileMenu.classList.add('hide-content')
    }, 1000)
}