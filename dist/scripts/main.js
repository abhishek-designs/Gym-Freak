// Accessing toggler of menu
const toggler = document.querySelector('.toggler');
toggler.addEventListener('click',onChecked);


function onChecked()
{
    
    if(this.checked)
    {
        // Disable scroll
        disableScroll();
    }
    else
    {
        // Enable scroll
        enableScroll();
    }
}

// Control scrolling
window.addEventListener('scroll',disableScroll);
window.addEventListener('scroll',enableScroll);

function disableScroll()
{
    
    document.body.style.overflow = "hidden";
}

function enableScroll()
{
    document.body.style.overflow = "auto";
}


const menuWrap = document.querySelector('.menu-wrap');
var links = menuWrap.querySelectorAll('.nav-links');

for(let i=0; i<links.length; i++)
{
    var link = links[i];
    link.addEventListener('click',disableMenu);
}

function disableMenu()
{
    toggler.checked = false;
}