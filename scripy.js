const qu1 = prompt('Введите ссылку на 1 картинку')
const qu11 = prompt('Введите ссылку на 2 картинку')
const qu2 = prompt('Введите имя')
const qu3 = prompt('Введите фамилию')
const qu4 = prompt('Введите возраст')
  

const box = document.createElement('div')
const photo1 = document.createElement('img')
const photo11 = document.createElement('img')
const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')
const box1 = document.createElement('div')
const yes = document.createElement('button1')
const no = document.createElement('button2')


const body = document.querySelector('body')

// const body = document.querySelector('body')

photo1.src = qu1
photo11.src = qu11
name.innerText = qu2
surname.innerText = qu3
age.innerText = qu4

yes.innerText = (Yes)
no.innerText = (No)

// body.append(name)
box.append(photo1)
box.append(photo11)
box.append(name)
box.append(surname)
box.append(age)
box1.append(yes)
box1.append(no)

box.classList = 'box'
photo1.style.width = '100px'
photo11.style.width = '100px'
box.style.border = ' 1px solid black'
box.style.width = '200px'
box.style.margin = '0 auto'
box1.style.width = '50px'


body.append(box)
body.append(box1)