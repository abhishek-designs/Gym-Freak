// Accessing the carousel 
const testCarous = document.querySelectorAll('.client-tab');

// Index numbers of the slides
let indexNo = 0;

// Creating indicator
const testIndicator = document.querySelector('.test-indicator');

for(let i=0; i<testCarous.length; i++)
{
    var indicateCircle = document.createElement('div');
    indicateCircle.id = i;
    indicateCircle.classList.add('circle-indicate');
    indicateCircle.setAttribute("onclick","indicatorSelect(this)");

    // Appending the circles to indicator
    testIndicator.appendChild(indicateCircle);

}

// Accessing circles of indicator
var circleIndicate = testIndicator.querySelectorAll('.circle-indicate');

// What happens initially
testCarous[indexNo].classList.add('active');
circleIndicate[indexNo].classList.add('current');

// Next slide function for forwarding testimonials
function next()
{
    if(indexNo == testCarous.length-1)
    {
        indexNo = 0;
    }
    else
    {
        indexNo++;
    }

    // Calling the changeSlide function
    change(indexNo);
    // Calling the updateIndicator function
    update(indexNo);
}

// Previous slide function for backwarding testimonials
function prev()
{
    if(indexNo < 0)
    {
        indexNo = 2;
    }
    else
    {
        indexNo--;
    }

    // Calling the changeSlide function
    change(indexNo);
    // Calling the updateIndicator function
    update(indexNo);
}

// changeSlide function for swiping the carousel
function change(indexNo)
{
    // First removing all the active classes from the slides or resetting the slides
    for(let i=0; i<testCarous.length; i++)
    {
        testCarous[i].classList.remove('active');
    }
    // Adding active class only on the slide with specific index num
    testCarous[indexNo].classList.add('active');
}

// Update the indicator state
function update(indexNo)
{   
    for(let i=0; i<testCarous.length; i++)
    {
        circleIndicate[i].classList.remove('current');
    }
    circleIndicate[indexNo].classList.add('current');
}

// indicatorSelect function through which we can control the slide
function indicatorSelect(indicateBtn)
{
    change(indicateBtn.id);
    update(indicateBtn.id);
}

// Autoplay function
function auto()
{
    next();
}

// Auto swipe the carousel
let time = setInterval(auto,3000);

