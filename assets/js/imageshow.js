function setImage() {
    setMinuteImage();
}
//setting Restuarant food ordering image - Minute chef
let minuteImagePosition = 1;
function setMinuteImage() {
    setInterval(() => {

        if (minuteImagePosition <= 10) {
            document.getElementById("minuteImage").src = "MinuteChef/screenshots/" + minuteImagePosition + ".jpg";
            minuteImagePosition++;
        } else {
            minuteImagePosition = 1;
        }


    }, 3000);
}