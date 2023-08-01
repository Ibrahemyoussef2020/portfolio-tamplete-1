

/************ Intersection Observer  ************* */

const transformers = document.querySelectorAll('.transformers');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const element = entry.target;
            
            if (element.classList.contains('intro__heading')) {
                element.classList.toggle('intro__heading-animation', entry.isIntersecting)
            }
            else if(element.classList.contains('move')){
                element.classList.toggle('back-home', entry.isIntersecting)
            }
            else if(element.classList.contains('rotate')){
                element.classList.toggle('rotate-home', entry.isIntersecting)
            }

           // if (entry.isIntersecting) observer.unobserve(element)  
        }
            
        )
    },
    {
        threshold:0,
    }
)

transformers.forEach(transformer => {
    observer.observe(transformer)
})


/**************** list ***********/

const linksMenu = document.querySelector('.links__menu'),
        linksList = document.querySelector('.links__list')

linksMenu.addEventListener('click', e =>{
    linksList.classList.toggle('visible-list');
})



/************* testimonials-container *********/


const slider = document.querySelector('.testimonials-container'),
pagination_wrapper =  document.querySelector('.pagination-wrapper'),
    pag_spans =  document.querySelectorAll('.pag');



pagination_wrapper.addEventListener('click' , e =>{

    pag_spans.forEach(pag =>{

        if (pag.classList.contains('solid-pag') && pag.className !== e.target.className) {

            pag.classList.remove('solid-pag');
        }
    })

    if (e.target.classList.contains('pag')) {
        e.target.classList.add('solid-pag')
    }
    
    if (e.target.classList.contains('pag__1')) {
        slider.style.transform = 'translateX(0)';
    }
    else if (e.target.classList.contains('pag__2')) {
        slider.style.transform = 'translateX(-100%)'
    }
    else if (e.target.classList.contains('pag__3')) {
        slider.style.transform = 'translateX(-200%)'
    }
})