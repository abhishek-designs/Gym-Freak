// Accessing the slider container containing the slides
const slider = document.querySelectorAll('.slider-content');

// Accessing the indicator container
const indicatorContain = document.querySelector('.indicator');

// Creating each indicators according to the no. of slides
for(let i=0; i<slider.length; i++)
{
    var circle = document.createElement('div');
    circle.setAttribute("onclick","indicateSlide(this)");
    circle.classList.add('circle');
    circle.id = i;
    indicatorContain.appendChild(circle);
}

// Selecting indicators
var indicator = indicatorContain.querySelectorAll('.circle');
// console.log(indicator);

// Initially index no. is 0
let index = 0;

// When page loaded
slider[index].classList.add('active');
indicator[index].classList.add('current');

// Function for next slide
function nextSlide()
{
    if(index == slider.length-1)
    {
        // If index is greater than the no. of slides
        index = 0;
    }
    else
    {
        // Forward the slides
        index++;
    }
    changeSlide(index);
    updateIndicator(index);
}

// Function for previous slide
function prevSlide()
{
    if(index < 0)
    {
        // If index is lesser than the no. of slides
        index = 2;
    }
    else
    {
        // Backward the slides
        index--;
    }
    changeSlide(index);
}

// Controlling the indicator
function indicateSlide(element)
{
    let index = element.id;

    // Change the slide according to indicator
    changeSlide(index);

    // Update the indicator according to control
    updateIndicator(index);
}

// Change slide function to change the slides
function changeSlide(index)
{
    for(let i=0; i<slider.length; i++)
    {
        slider[i].classList.remove('active');
    }
    slider[index].classList.add('active');
}


// Function to update indicator
function updateIndicator(index)
{
    for(let i=0; i<slider.length; i++)
    {
        indicator[i].classList.remove('current');
    }
    indicator[index].classList.add('current');
}

// Autoplay function
function autoplay()
{
    nextSlide();
}

// Change slides automatically
let timer = setInterval(autoplay,3000);