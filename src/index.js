// write your code here
document.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then((data) => {
        //test 
        console.log(data);
        //insert function 
        ramenInfo(data);
    })

});

const imgDiv1 = document.getElementById("ramen-menu");
const ramenName = document.querySelector("h2.name");
const restaurant = document.querySelector("h3.restaurant");
const imgDiv2 = document.querySelector("img.detail-image");
const rating = document.getElementById("rating-display");
const comments = document.getElementById("comment-display");
const newRamen = document.getElementById("new-ramen");

function ramenInfo (data) {

    imgDiv1.innerHTML = "";

    for (const ramen of data) {

        let img = document.createElement('img');
        img.src = ramen.image;
        imgDiv1.append(img);

        img.addEventListener('click', () => {

            imgDiv2.src = ramen.image
            ramenName.textContent = ramen.name;
            restaurant.textContent = ramen.restaurant;
            rating.textContent = ramen.rating;
            comments.textContent = ramen.comment;

        })
    }


    //Adds new ramen
    newRamen.addEventListener('submit', (e) => {
        e.preventDefault();
        let img = document.createElement('img');
        img.src = document.getElementById('new-image').value;
        imgDiv1.append(img);

        imgDiv2.src = img.src;
        ramenName.textContent = document.getElementById('new-name').value;
        restaurant.textContent = document.getElementById('new-restaurant').value;
        rating.textContent = document.getElementById('new-rating').value;
        comments.textContent = document.getElementById('new-comment').value;

    })

}


