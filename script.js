const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

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

btnHamburger.addEventListener('click', displayList)

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