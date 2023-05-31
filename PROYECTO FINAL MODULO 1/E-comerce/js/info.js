const containerCard = document.getElementById("containerCard");

const mostrarTarjetaSeleccionada = () => {
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');

  if (index !== null) {
    // Obtener la tarjeta correspondiente al índice
    const tarjetaSeleccionada = hombre[index];

    // Mostrar la tarjeta seleccionada en el contenedor
    containerCard.innerHTML = `
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
  }
};

mostrarTarjetaSeleccionada();