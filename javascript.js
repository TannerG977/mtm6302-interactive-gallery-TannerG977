const $imggallery = document.getElementById("imggallery");

const $pictures = [
    '<img src="images/fall_trees.jpg" alt="fall trees" caption="Fall Trees">',
    '<img src="images/vector_square.jpg" alt="vector squares" caption="Vector Squares">',
    '<img src="images/vaporwave.jpg" alt="vaporwave" caption="Vaporwave Sunset">',
    '<img src="images/goofy_dog.jpg" alt="goofy dog" caption="Goofy Dog">',
    '<img src="images/wheat_fields.jpg" alt="wheat fields" caption="Wheat Fields">',
    '<img src="images/scary_bridge.jpg" alt="scary bridge" caption="Scary Bridge">',
    '<img src="images/winter_wasteland.jpg" alt="winter wasteland" caption="Winter Wasteland">',
    '<img src="images/spooky_swings.jpg" alt="spooky swings" caption="Spooky Swings">',
    '<img src="images/foggy_mountains.jpg" alt="foggy mountains" caption="Foggy Mountains">',
    '<img src="images/glacier_wall.jpg" alt="glacier wall" caption="Glacier Wall">',
    '<img src="images/spider_man.jpg" alt="spider man" caption="Spider Man">',
    '<img src="images/many_faces.jpg" alt="many faces" caption="Many Faces">',

    
];

const $picItems = [];

for (picture of $pictures) {
    $picItems.push(`<div class="container">
    <div class="innerContainer">
        <div class="image">
            <div class="image">${picture}</div>
        </div>

        <div class="popup">
            <img class="popupimg" src="images/fall_trees.jpg" alt="falltrees" caption="texthere">
            <p></p>
        </div>
    </div>
    </div>`)
}

$imggallery.innerHTML = $picItems.join('');

const images = document.querySelectorAll('.image img');
const popup = document.querySelector('.popup');

images.forEach(image => {
    image.addEventListener('click', () => {
        popup.style.display = 'block';
        document.querySelector('.popupimg').src = image.getAttribute('src');
        document.querySelector('.popup p').textContent = image.getAttribute('caption');
    });
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});


    