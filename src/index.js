// write your code here

const url = "http://localhost:3000/ramens"
document.addEventListener('DOMContentLoaded', () => {
    getRamen()
    listenForForm()

})

function getRamen(){
    fetch(url)
    .then((resp) => resp.json())
    .then((json) => addToDOM(json))
}

function addToDOM(arr){
    for (const key in arr){
        const item = arr[key]
        const id = item.id
        const name = item.name
        const restaurant = item.restaurant
        const imgURL = item.image
        const rating = item.rating
        const comment = item.comment

        addImages(imgURL, id)   
    }
}

function addImages(src, id){
    const image = document.createElement('img')
    const div = document.getElementById('ramen-menu')
    image.src = src
    image.id = id
    image.addEventListener('click', e => ramenDetails(e))
    div.append(image)
}

function ramenDetails(e){
    const id = e.target.id
    const ramenURL = `${url}/${id}`

    fetch (ramenURL)
    .then((resp) => resp.json())
    .then((json) => displayDetails(json))
}

function displayDetails(arg){
    const id = arg.id
    const name = arg.name
    const restaurant = arg.restaurant
    const image = arg.image
    const rating = arg.rating
    const comment = arg.comment

    const detailName = document.getElementById('detail-name')
    detailName.innerText = name

    const detailImage = document.getElementById('detail-image')
    detailImage.src = image

    const detailRestaurant = document.getElementById('detail-restaurant')
    detailRestaurant.innerText = restaurant

    const ratingP = document.getElementById('rating-display')
    ratingP.innerText = `${rating} / 10`

    const commentP = document.getElementById('comment-display')
    commentP.innerText = `${comment}`
}

function listenForForm(){
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', e => addRamen(e))
}

function addRamen(e){
    e.preventDefault()
    const newName = document.getElementById('new-name').value
    const newRestaurant = document.getElementById('new-restaurant').value
    const newImage = document.getElementById('new-image').value
    
    const newRating = document.getElementById('new-rating').value
    const newComment = document.getElementById('new-comment').value

    addImage(newName, newRestaurant, newRating, newComment, newImage)
    



}

function addImage(name, restaurant, rating, comment, image){
    const img = document.createElement('img')
    const div = document.getElementById('ramen-menu')
    img.src = image
    
    img.addEventListener('click', e => {
        const detailName = document.getElementById('detail-name')
        detailName.innerText = name

        const detailImage = document.getElementById('detail-image')
        detailImage.src = image

        const detailRestaurant = document.getElementById('detail-restaurant')
        detailRestaurant.innerText = restaurant

        const ratingP = document.getElementById('rating-display')
        ratingP.innerText = `${rating} / 10`

        const commentP = document.getElementById('comment-display')
        commentP.innerText = `${comment}`
    })
    div.append(img)
}