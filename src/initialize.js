export function initializeWeb(){
    //initializing web page (loading header and navigation bar)
    const fullHeader = document.getElementById("content");
    fullHeader.innerHTML = `<header>
    <h1>Restaurant</h1>
    </header>
    <nav>
    <ul>
        <li id="home-button" >Home</li>
        <li id="menu-button">Menu</li>
        <li id="contact-button">Contact</li>
    </ul>
    </nav>
    <div id="custom-page"></div>`
}

