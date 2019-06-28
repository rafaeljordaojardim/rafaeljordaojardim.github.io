//identificar o clicque no menu
//verificar o item que foi clicado e fazer referencia com alvo
//verificar a distancia entre o alvo e o topo
//animar o scroll ate o alvo
$('nav a, header a').click(function(e) {
    e.preventDefault();
    const id = $(this).attr('href'); //puxa o atributo
    targetOfSet = $(id).offset().top;

    menuHeight = $('nav').innerHeight();
    console.log(menuHeight, targetOfSet);

    $('html, body').animate({
        scrollTop: targetOfSet - menuHeight
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
    alert('Implementar menu phone');
}