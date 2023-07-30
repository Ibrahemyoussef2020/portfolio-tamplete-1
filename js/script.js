/******  nav *******/
/* list */
const linksMenu = document.querySelector('.links__menu'),
        linksList = document.querySelector('.links__list')

linksMenu.addEventListener('click', e =>{
    linksList.classList.toggle('visible-list');
})

/* intro */

const transformers = document.querySelectorAll('.transformers');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const element = entry.target;
            //console.log(element.className);
            //console.log(element);
            
            if (element.classList.contains('intro__heading')) {
                element.classList.toggle('intro__heading-animation', entry.isIntersecting)
                
            }
            else if(element.classList.contains('move')){
                element.classList.toggle('back-home', entry.isIntersecting)
            }
            else if(element.classList.contains('rotate')){
                element.classList.toggle('rotate-home', entry.isIntersecting)
            }
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