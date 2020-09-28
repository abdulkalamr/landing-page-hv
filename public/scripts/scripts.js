const $menuBar = document.getElementById('menubar');
const $navMenu = document.getElementById('nav-menu');
const $nav = document.getElementById('nav');

$menuBar.style.top = $menuBar.offsetHeight + 'px';

$navMenu.addEventListener('click', () => {
    if ($nav.style.display === 'none') {
        $nav.style.removeProperty('display');
    } else {
        $nav.style.display = 'none';
    }
});