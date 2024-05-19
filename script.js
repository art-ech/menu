// BURGER

let increaseBurger = document.getElementById('increaseBtnBurger')
let decreaseBurger = document.getElementById('decreaseBtnBurger')
let zeroBurger = 0
let countBurger = document.getElementById('countBurger')
let burgerTotal = document.getElementById('burgerTotal')

increaseBurger.addEventListener('click', (e)=> {
    zeroBurger ++
    countBurger.innerHTML = zeroBurger
    burgerTotal.innerHTML = `Php ${zeroBurger*80}.00`
    totalFunction()
})

decreaseBurger.addEventListener('click', (e)=> {
    zeroBurger --
    countBurger.innerHTML = zeroBurger
    burgerTotal.innerHTML = `Php ${zeroBurger*80}.00`
    totalFunction()
})

// FRIES

let increaseFries = document.getElementById('increaseBtnFries')
let decreaseFries = document.getElementById('decreaseBtnFries')
let zeroFries = 0
let countFries = document.getElementById('countFries')
let friesTotal = document.getElementById('friesTotal')

increaseFries.addEventListener('click', (e)=> {
    zeroFries ++
    countFries.innerHTML = zeroFries
    friesTotal.innerHTML = `Php ${zeroFries*50}.00`
    totalFunction()
})

decreaseFries.addEventListener('click', (e)=> {
    zeroFries --
    countFries.innerHTML = zeroFries
    friesTotal.innerHTML = `Php ${zeroFries*50}.00`
    totalFunction()
})

// TOTAL

let total = document.querySelector('.total')
let checkout = document.getElementById('proceed')

let totalFunction = ()=> {
    total.innerHTML = `Php ${zeroBurger*80 + zeroFries*50}.00`
}

let proceed = ()=> {
    checkout.addEventListener('click', (e)=> {
        console.log(`Php ${zeroBurger*80 + zeroFries*50}.00`)

        let total = document.querySelector('.total')
        total.innerHTML = `Ordered! Total of Php ${zeroBurger*80 + zeroFries*50}.00`
        total.style.backgroundColor = 'red'
        checkout.remove()
        increaseBurger.remove()
        decreaseBurger.remove()
        increaseFries.remove()
        decreaseFries.remove()
    })
}
proceed()



