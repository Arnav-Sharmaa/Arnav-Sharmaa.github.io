const body = document.body

const btnTheme = document.querySelector('#btn-theme')
const btnThemeButton = document.querySelector('.btn--icon[aria-label="toggle theme"]')
const btnHamburger = document.querySelector('.nav__hamburger i')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme') || 'light'
const getBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-moon'

// Clear any existing theme classes first
body.classList.remove('light', 'dark')
btnTheme.classList.remove('fa-moon', 'fa-sun')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
	// Remove existing theme classes
	body.classList.remove('light', 'dark')
	btnTheme.classList.remove('fa-moon', 'fa-sun')

	// Add new theme classes
	addThemeClass(bodyClass, btnClass)

	// Store in localStorage
	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () => {
	if (isDark()) {
		setTheme('light', 'fa-moon')
	} else {
		setTheme('dark', 'fa-sun')
	}
}

// Make sure the event listener is properly attached to the button, not just the icon
if (btnThemeButton && btnTheme) {
	btnThemeButton.addEventListener('click', toggleTheme)
} else {
	console.error('Theme button not found!')
}

const displayList = () => {
	const navUl = document.querySelector('.nav__list')
	const mainContent = document.querySelector('main')
	const aboutSection = document.querySelector('.about')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
		// Add blur effect to main content
		mainContent.classList.add('nav-blur')
		aboutSection.classList.add('nav-blur')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
		// Remove blur effect from main content
		mainContent.classList.remove('nav-blur')
		aboutSection.classList.remove('nav-blur')
	}
}

// Make sure the hamburger button event listener is properly attached
if (btnHamburger) {
	btnHamburger.parentElement.addEventListener('click', displayList)
} else {
	console.error('Hamburger button not found!')
}

// Function to close navigation menu
const closeNavMenu = () => {
	const navUl = document.querySelector('.nav__list')
	const mainContent = document.querySelector('main')
	const aboutSection = document.querySelector('.about')

	btnHamburger.classList.remove('fa-times')
	btnHamburger.classList.add('fa-bars')
	navUl.classList.remove('display-nav-list')
	// Remove blur effect from main content
	mainContent.classList.remove('nav-blur')
	aboutSection.classList.remove('nav-blur')
}

// Add event listeners to all navigation links
const navLinks = document.querySelectorAll('.nav__list .link--nav')
navLinks.forEach(link => {
	link.addEventListener('click', closeNavMenu)
})

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'flex'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)