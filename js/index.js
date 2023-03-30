// 4-oy Uyga Vazifa va Dars vaqtidagi amaliyotlar

// 4.1.1-Dars Uyga Vazifa
// const array = [1, 2, 3, 4, 5, 6]
// const findFun = function(array, element) {
//     const testArr = array.indexOf(element)
//     if (testArr === -1) {
//         return console.log([]);
//     } else {
//         return console.log([testArr]);
//     }
// }


// 4.1 .2
// let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const myFun = function(allPeople, userAge) {
//     const checkPeople = allPeople.every((set) => set.age >= userAge)

//     if (checkPeople) {
//         return 'katta';
//     } else {
//         return 'kachik';
//     }
// }

//  4.2.1

// const cars = [{
//         img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
//         car: 'BMW',
//         status: 'new',
//         quantity: 8
//     },
//     {
//         img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
//         car: 'BMW',
//         status: 'old',
//         quantity: 12
//     },
//     {
//         img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
//         car: 'Mercedes Benz',
//         status: 'new',
//         quantity: 2
//     },
//     {
//         img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
//         car: 'Tesla',
//         status: 'new',
//         quantity: 15
//     },
//     {
//         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
//         car: 'Toyota',
//         status: 'old',
//         quantity: 19
//     }

// ]

// const cardBox = document.querySelector('.row')

// const allDatas = cars.map((element) => {
//     return `<div class = "col-lg-4 align-content-center" >
//         <div class = " card"style = "width: 18rem;" >
//         <img src = "${element.img}" class = "card-img-top" alt = "car" >
//         <div class = "card-body" >
//         <h2 class = "h2" >${element.car} </h2> 
//         <h5 class = "card-title" > Status: ${element.status} </h5> 
//         <p class = "card-text" > Quantity: ${element.quantity} </p> 
//         </div> 
//         </div> 
//         </div>`
// })

// cardBox.innerHTML = allDatas.join('')

// 4.3.1

// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction' },
//     { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Fiction' },
//     { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' },
// ];

// books.sort((a, b) => {
//     return a.year - b.year
// })

// 4.3.2

// const students = [
//     { id: 1, name: 'Alice', grade: 'A' },
//     { id: 2, name: 'Bob', grade: 'C' },
//     { id: 3, name: 'Charlie', grade: 'B' },
//     { id: 4, name: 'Dave', grade: 'A' },
//     { id: 5, name: 'Eve', grade: 'B' },
// ];

// const form = document.querySelector('.form'),
//     input = document.querySelector('.input'),
//     idStudents = document.querySelector('.students')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let id = input.value

//     const findStudents = students.find((object) => object.id == id)
//     if (findStudents) {
//         return idStudents.innerHTML = `<h2> Name:${findStudents.name} Grade:${findStudents.grade} </h2>`
//     } else {
//         idStudents.innerHTML = `<h2> Bunday ID oquvchi yoq! </h2>`
//     }

//     form.reset()
// })