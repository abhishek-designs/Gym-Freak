// Accessing toggler of menu
const toggler = document.querySelector('.toggler');

var checked = false;

toggler.addEventListener('click',function(){
    if(checked == false)
    {
        checked = true;
        
        // disable scroll
    }
    else
    {
        checked = false;
        console.log('unchecked');
    }
})
