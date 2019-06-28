window.onhashchange = function (e) {
    const oldUrl = e.oldURL.split('#')[1];
    const newUrl = e.newURL.split('#')[1];
    const oldLink = document.querySelector(`.menu [href='#${oldUrl}']`);
    const newLink = document.querySelector(`.menu [href='#${newUrl}']`);
    console.log(oldLink, newLink);
    
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}
const menuToggle = document.querySelector('.menu-toggle')
menuToggle.onclick = function () {
    alert('Implementar menu phone');
}