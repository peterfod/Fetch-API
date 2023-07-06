const imgDog = document.getElementById('img-dog')
const btnDog = document.getElementById('btn-dog')

// window.addEventListener('load', fetchImgDog)
// btnDog.addEventListener('click', fetchImgDog)
window.addEventListener('load', getDogImage)
btnDog.addEventListener('click', getDogImage)
const API_URL = 'https://dog.ceo/api/breeds/image/random'

//1. megoldás: fetch
function fetchImgDog() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      imgDog.innerHTML = `<img src="${data.message}">`
    })
    .catch(
      (error) =>
        (imgDog.innerHTML = '<p>Az API nem elérhető<br>' + error + '</p>')
    )
}

//2. megoldás: async/await
// async function getDogImage() {
//   const response = await fetch(API_URL)
//   const data = await response.json()
//   imgDog.innerHTML = `<img class="card-img-top" src="${data.message}">`
// }

//2. megoldás + try-catch
async function getDogImage() {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    imgDog.innerHTML = `<img src="${data.message}">`
  } catch (error) {
    //console.log(error)
    imgDog.innerHTML = '<p>Az API nem elérhető<br>' + error + '</p>'
  }
}
