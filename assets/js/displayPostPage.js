let myPageList = document.querySelectorAll("#pageNumber");




let btns = document.getElementsByClassName('page');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = (document.getElementsByClassName('page active'));


        for (let i = 0; i < btns.length; i++) {
            let x = i + 1;
            let stringpage = 'postPage' + x;
            document.getElementById(stringpage).style.display = "none";
        }

        let x = i + 1;

        stringpage = 'postPage' + x;
        document.getElementById(stringpage).style.display = "flex";
        current[0].className = "page";
        btns[i].className += " active";
    }
    );
}




