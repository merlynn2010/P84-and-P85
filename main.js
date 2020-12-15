canvas = document.getElementById('myCanvas');

ctx = canvas.getConext('2d');

c_x = 10;
c_y = 10;

c_width = 70;
c_height = 70;

backgroun_image = 'download.jpg';
Car_image = 'download(1).png';

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(rover_imgTag, c_x, r_y, c_width, c_height);
}
