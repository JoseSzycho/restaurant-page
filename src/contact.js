export function loadContactPage(){
   
    const contactPage = document.getElementById("custom-page");
    contactPage.innerHTML = (`<div class="contact-container">
    <div class="contact-information">
        <div class="information-card">
            <img src="" alt="address-icon">
            <p>Address</p>
        </div>
        <div class="information-card">
            <img src="" alt="clock-icon">
            <p>Opening hours</p>
        </div>
        <div class="information-card">
            <img src="" alt="celphone-icon">
            <p>123 456 789</p>
        </div>  
    </div>
    <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}</style><a href="https://www.embedgooglemap.net">google maps embed zoom</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px; border-radius: 4px;}</style></div></div>   
    </div>`);
}

