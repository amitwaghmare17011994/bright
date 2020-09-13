var toggleImg = 0;

function f() {
    $('#logo_container').removeClass("logo_container_r");

    setTimeout(function () {
        $('#logo_container').addClass("logo_container_r");
        document.getElementById('logo_img').style = "width:284px;";
        document.getElementById('logo_img').src = toggleImg == 0 ? "images/marathi.png" : "images/logo.png";
        setTimeout(function () {
            toggleImg = toggleImg == 0 ? 1 : 0;
            f();
        }, 300);
    }, 3000);
}
f();