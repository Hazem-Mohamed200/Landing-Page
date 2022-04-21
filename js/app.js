/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let anchors = [];
const fragment = document.createDocumentFragment();
let sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

    function getSectionData(section)
    {
        let data = [];
        data.push(section.getAttribute("id"));
        data.push(section.getAttribute("data-nav"));

        return data;
    }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// building the nav
for(let i = 0; i < sections.length; i++)
{
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    const sectionData = getSectionData(sections[i]);
    
    anchor.href = `#${sectionData[0]}`;
    anchor.textContent = sectionData[1];
    anchor.classList.add("menu__link");
    
    // For smooth scrolling
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        sections[i].scrollIntoView({behavior: 'smooth', block: 'end'});
    });

    li.appendChild(anchor);
    fragment.appendChild(li);
}

navBar.appendChild(fragment);
anchors = document.getElementsByTagName('a');

// Making each section the active section when scrolled to it.
window.addEventListener('scroll', function()
{
    for(let i = 0; i < sections.length; i++)
    {
        const sectionTop = sections[i].getBoundingClientRect().top;
        const sectionBot = sections[i].getBoundingClientRect().bottom;
        if(sectionBot >= 700 && sectionTop <= 300)
        {
            sections[i].classList.add('activeClass');
            anchors[i].classList.add('navbar__active');
        }
        else
        {
            sections[i].classList.remove('activeClass');
            anchors[i].classList.remove('navbar__active');
        }
    }

});


/**
 * End Main Functions
 * 
*/
