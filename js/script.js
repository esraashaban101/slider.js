let slider_container = Array.from(document.querySelectorAll('.slider-container img'));
let indicators = document.getElementById('indicators');
let countslides = slider_container.length;
let prevbtn = document.getElementById('prev');
let nextbtn = document.getElementById('next');
let slider_list = document.createElement('ul');
let slider_num = document.getElementById('slider-num');
slider_list.setAttribute('id', 'sliderlist');
let startslider = 1;
// create li of ul
for (var i = 1; i <= countslides; i++) {
    var slider_item = document.createElement('li');

    slider_item.setAttribute('data-index', i);
    slider_item.appendChild(document.createTextNode(i))
    slider_list.appendChild(slider_item);


}
//push ul into html
indicators.appendChild(slider_list);
// the checker function
startslider=1;
slider_num.innerHTML = 'slide #' + startslider + ' of ' + countslides;
slider_list.children[startslider - 1].classList.add("active");


// here you can check on btn status according to start slider
if(startslider==1)
    {
        prevbtn.classList.add('disabled')
    }

  function checker()
   {
    removeactive()
    // set slider_num
    slider_num.innerHTML = 'slide #' + startslider + ' of ' + countslides;
      
    // put active class on current slide
    slider_container[startslider - 1].classList.add("active")

    // put active class on current li indicator
    slider_list.children[startslider - 1].classList.add("active");
    if(startslider==1)
    {
        prevbtn.classList.add('disabled')
    }
    else
    {
        prevbtn.classList.remove('disabled')

    }
    if(startslider==5)
        {
            nextbtn.classList.add('disabled')
        }
        else
        {
            nextbtn.classList.remove('disabled')
    
        }
       

}
sliderli = Array.from(document.querySelectorAll('#sliderlist li'));
for(let i=0 ; i<sliderli.length ; i++)
{
    sliderli[i].onclick = function()
    {
        startslider =parseInt(this.getAttribute('data-index'));
        checker();
    }
}
// remove all active 
function removeactive() {
    slider_container.forEach(function (img) {
        img.classList.remove('active')
    })
   
    sliderli.forEach(function (slider) {
        slider.classList.remove('active')
    })
}
//btn functions
prevbtn.onclick = prevslide;
nextbtn.onclick = nextslide;
function prevslide() {
    if(prevbtn.classList.contains('disabled') || startslider ==1 )
    {
        return false;
    }
    else
    {
      startslider--;
      if(startslider>0)
       checker()
   }

}
function nextslide() {
       if(nextbtn.classList.contains('disabled'))
        {
            
            return false;
        }
        else
        {
          startslider++;
          checker()
       }
    
}

