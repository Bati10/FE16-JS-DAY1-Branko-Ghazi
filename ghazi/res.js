"use strict";
var menu = { meal: 'kebab', info: 'Kebab is a cooked meat dish, with its origins in Middle Eastern cuisines. Many variants are popular around the world.Kebabs consist of cut up or ground meat, sometimes with vegetables, and various other accompaniments according to the specific recipe', img: 'https://i.pinimg.com/originals/9d/e0/7f/9de07fde15b54f8a71dec8d8dbdff0a0.jpg', price: 100, star: "&#11088;" };
document.querySelector(".container").innerHTML = `   <div class="card mb-3" >
<div class="row g-0">
  <div class="col-md-6">
    <img src="${menu.img}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-6">
    <div class="card-body">
      <h5 class="card-title">${menu.meal}</h5>
      <p class="card-text">${menu.info}</p><hr>
      <p class="card-text"> price:${menu.price}$</p><hr>
      <p classd-text"> Rate by custumers:${menu.star}${menu.star}${menu.star}</p> <button type="button" class="btn btn-warning">rate us</button><hr>


      <button type="button" class="btn btn-primary">Add to Card</button>
      <button type="button" class="btn btn-warning">total</button>
      <button type="button" class="btn btn-warning">0$</button>


      <button type="button" class="btn btn-danger">Canccle</button>


    </div>
  </div>
</div>
</div> `;
