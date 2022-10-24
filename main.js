let images = document.querySelectorAll('.item')

let imagesPersonal = document.querySelectorAll('.personalproject')
let imagesLading = document.querySelectorAll('.ladingpage')
let imagesStore = document.querySelectorAll('.store')


const buttonAll = document.getElementById('buttonAll')
const buttonPersonal = document.getElementById('buttonPersonal')
const buttonLading = document.getElementById('buttonLading')
const buttonStore = document.getElementById('buttonStore')

function removeClassHidden() {
  images.forEach((e) => {
    e.classList.remove('none')
  })
}

function removeClicked() {
  const listButtons = document.querySelectorAll('#listButtons button')
  listButtons.forEach((e) => {
    e.classList.remove('clicked')
  })
}


buttonAll.addEventListener('click', () => {
  removeClicked()
  removeClassHidden()
  buttonAll.classList.add('clicked')
})

buttonPersonal.addEventListener('click', () => {
  removeClicked()
  removeClassHidden()
  buttonPersonal.classList.add('clicked')
  imagesLading.forEach((e) => {
    e.classList.add('none')
  })

  imagesStore.forEach((e) => {
    e.classList.add('none')
  })
})

buttonLading.addEventListener('click', () => {
  removeClicked()
  removeClassHidden()
  buttonLading.classList.add('clicked')

  imagesStore.forEach((e) => {
    e.classList.add('none')
  })

  imagesPersonal.forEach((e) => {
    e.classList.add('none')
  })
})

buttonStore.addEventListener('click', () => {
  removeClicked()
  removeClassHidden()
  buttonStore.classList.add('clicked')

  imagesPersonal.forEach((e) => {
    e.classList.add('none')
  })

  imagesLading.forEach((e) => {
    e.classList.add('none')
  })
})


/* when scroll */



window.addEventListener('scroll', () => {
  showButtonToTop()
  animeScroll()
})


const backToTop = document.getElementById('backToTop')

function showButtonToTop() {
  if (window.scrollY >= 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

backToTop.onclick = function () {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}



/* menu */

const menu = document.getElementById('menu')
const list = document.getElementById('list')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  menu.classList.toggle('openmenu')
  list.classList.toggle('show')
  body.classList.toggle('hidden')
})

const links = document.querySelectorAll('#list li a')

for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('openmenu')
    list.classList.remove('show')
    body.classList.remove('hidden')

  })
}



/* form */

const form = document.getElementById('form')
const nameInput = document.getElementById('fullname')
const email = document.getElementById('email')
const title = document.getElementById('title')
const message = document.getElementById('message')
const submit = document.getElementById('submit')
const sucess = document.getElementById('sucess')



submit.addEventListener('click', (ev) => {
  ev.preventDefault()


  if (fullname.value === '' || email.value === '' || title.value === '' || message.value === '') {

    sucess.innerHTML = 'Form fields were not filled in correctly'
    sucess.style.color = 'red'

    return
  }

  const templateParams = {
    from_name: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    title: document.getElementById('title').value,
    message: document.getElementById('message').value
  }

  emailjs.send("service_vl6heve", 'template_2d52467', templateParams, 'vkJONRtaliQbsr39T').then((response) => {
    console.log('email enviado', response.status, response.text)

    document.getElementById('fullname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('title').value = ''
    document.getElementById('message').value = ''

    sucess.innerHTML = 'Message sent successfully'
    sucess.style.color = '#81b71a'

  }, (error) => {
    console.log('error: ', error)


  })
})



/* animated */
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.80)
  target.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass)
    } else {
      e.classList.remove(animationClass)
    }
  })
}