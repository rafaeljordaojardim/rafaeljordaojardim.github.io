//identificar o clicque no menu
//verificar o item que foi clicado e fazer referencia com alvo
//verificar a distancia entre o alvo e o topo
//animar o scroll ate o alvo
$('nav a, header a').click(function(e) {
    e.preventDefault();
    const id = $(this).attr('href'); //puxa o atributo
    targetOfSet = $(id).offset().top;
    const slider = document.getElementById('menu-slide');
    slider.style.right = "-220px";
    $('html, body').animate({
        scrollTop: targetOfSet - 80
    }, 800)

});


window.onhashchange = function(e) {
    const oldUrl = e.oldURL.split('#')[1];
    const newUrl = e.newURL.split('#')[1];
    const oldLink = document.querySelector(`.menu [href='#${oldUrl}']`);
    const newLink = document.querySelector(`.menu [href='#${newUrl}']`);
    console.log(oldLink, newLink);

    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}
const menuToggle = document.querySelector('.menu-toggle')
menuToggle.onclick = function() {
    const slider = document.getElementById('menu-slide');
    slider.style.height = window.innerHeight - 60 + 'px';
    if (slider.style.right == "0px") {
        slider.style.right = "-220px";
    } else {
        slider.style.right = "0px";
    }
}