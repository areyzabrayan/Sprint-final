// import {hombre, mujer, niños, deportivos, etiqueta, personalizados } from "./datashoes.js";
const URL_API = "http://localhost:3000/";

let random = [];

function randShoes(arr) {
  for (let i = 0; i < 6; i++) {
    let rand = arr[Math.floor(Math.random() * arr.length)];
    random.push(rand);
  }
  return random;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const shoes = await getShoes(URL_API);
    randShoes(shoes);
    printCards(random, containerCards);
    addInfoClickEvent();
  } catch (error) {
    console.log(error);
  }
});

const getShoes = async (url) => {
  try {
    const endpoint = "shoes";
    const resp = await fetch(`${URL_API}${endpoint}`);
    const response = await resp.json();
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};



const printCards = (shoes, container) => {
  container.innerHTML = "";
  shoes.forEach((element, index) => {
    container.innerHTML += `
        <article class="card">
        <figure class="card__figure">
        <img src=${element.imagen} alt=${element.nombre}>
        <div class="card__infoImage">
        <div class="info">
        <span class="material-symbols-outlined" class="info">
        info
        </span>
        </div>
        <div  class="favorite">
        <span class="material-symbols-outlined">
                    favorite
                    </span>
                    </div>
                    <div  class="cart">
                    <span class="material-symbols-outlined">
                    shopping_cart
                    </span>
                    </div>
        </div>
    </figure>
    <section class="card__body">
    <h3 class="card__name">${element.nombre}</h3>
    <h4 class="card__marca">${element.marca}</h4>
    <span class="card__price">$${Number(element.precio)}</span>
    <br>
    <span class="card__stock">${Number(element.stock)}</span>  
    </section>
    <section class="card__button">
                <button class="card__btn">Add</button>
    </section>
    </article>`;
  });
};

if (categoriaHombre && categoriaMujer && categoriaNiños && categoriaDeportivos && categoriaEtiqueta && categoriaPersonalizados) {
  categoriaHombre.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Hombre");
    printCards(filteredShoes, containerCards);
  });

  categoriaMujer.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Mujer");
    printCards(filteredShoes, containerCards);
  });

  categoriaNiños.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Niños");
    printCards(filteredShoes, containerCards);
  });

  categoriaDeportivos.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Deportivos");
    printCards(filteredShoes, containerCards);
  });

  categoriaEtiqueta.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Etiqueta");
    printCards(filteredShoes, containerCards);
  });

  categoriaPersonalizados.addEventListener("click", function () {
    const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Personalizados");
    printCards(filteredShoes, containerCards);
  });
};

 const shoes = await getShoes(URL_API);
printCards(shoes, containerCards);

const addInfoClickEvent = () => {
  const icons = document.querySelectorAll('.info');

  icons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const index = icon.getAttribute("data-index");
      window.location.href = `./pages/info.html?index=${index}`;
    });
  });
};

let sendToFavorite = document.getElementById("openFavorite");

sendToFavorite.addEventListener("click", () =>{
  console.log('hice click');
  location.href ="./pages/favorite.html"
})