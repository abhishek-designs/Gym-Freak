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
    // Disabling the menu wrap
    toggler.checked = false;
}

// Adding automatic smooth scrolling to the sections
// First accessing the links from which we can navigate
$('a, .btn').on('click',function(event){
    // Checking there is path link or not
    if(this.hash != '')
    {
        // There is a specified link on which screen will scroll through
        event.preventDefault();
        const hash = this.hash;

        // Now we have to animate the scroll to the path
        $('html, body').animate(
            // animate({property}, animation duration in ms)
            {scrollTop: $(hash).offset().top},
            800
        );
    }
});

// Now adding smooth scrolling to the landing page
// Accessing navigator

const navigator = document.querySelector('.navigator');

window.onscroll = function()
{
    if(window.pageYOffset > 550)
    {
        navigator.style.transform = 'translateX(0)';
    }
    else
    {
        navigator.style.transform = 'translateX(50px)';
    }
}