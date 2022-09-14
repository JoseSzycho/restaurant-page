export function loadMenuPage(){
    const menuPage = document.getElementById("custom-page")
    menuPage.innerHTML = (`<div class="menu-container">
    <div class="dish">
        <img src="" alt="dish-photo">
        <div class="dish-title"><h2>Titulo del plato</p></div>
        <div class="dish-description"><p>Descripcion del plato</p></div>
    </div>
    <div class="dish">
        <img src="" alt="dish-photo">
        <div class="dish-title"><h2>Titulo del plato</p></div>
        <div class="dish-description"><p>Descripcion del plato</p></div>
    </div>
    </div>`);
}

