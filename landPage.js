


//the global variables navigation bar and sections to store them in the variables.
let navMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/*end of global variablse...*/

// this function is building the navigation bar

function navFunctionBuilder() {
    let unOrdedList = "";
    //looping the sections to get their IDs and their data-nav
    for (const section of sections) {
        // holding evry section id in here
        function getSectioId() { 
            const sectionId = section.id;
            console.log(sectionId);
            return sectionId;
        };
        // data_nav attribute is been sorting in here
        function getSectioDataNav() {
            const sectionDataN = section.dataset.nav;
            console.log(sectionDataN);
            return sectionDataN;
        };

        //............2...............
        //  creating LI elements 
        unOrdedList = document.createElement("LI");
        //  creating anchor elements
        let anchor = document.createElement("a");
        //  naming the anchor elements
        let anchorName = document.createTextNode(getSectioId());
        //append names to the anchor elements
        anchor.appendChild(anchorName);
        //setting class atrribute
        anchor.setAttribute('class', 'list-LALA');
        //setting href attribute where it is going on click
        anchor.setAttribute('href', getSectioDataNav());
        //adding anchors th the UL
        unOrdedList.appendChild(anchor);
        //adding UL th the navigation bar
        navMenu.appendChild(unOrdedList);
    }
    //scrolling to the clicked section smoothly
    let links = document.querySelectorAll(".list-LALA");
    //looping links to add event listener so when it clicked scrolling in a smooth way
    for (link of links) {
        console.log(link);

        link.addEventListener("click", (e) => {
            e.preventDefault();
            document
                .getElementById(e.target.innerText.toLowerCase().replace(/\s/g, ""))
                .scrollIntoView({
                    behavior: "smooth",
                });
        });
    }
};
// calling the navFunctionBuilder function
navFunctionBuilder();
//this function will inspect if the screen on the top of the page or not
function viewedInScreen(e) {
    const position = e.getBoundingClientRect();
    return (
        position.left >= 0 &&
        position.top >= 0 )
      //  position.bottom < position.height + 50 &&
       // position.right <= (window.innerWidth || document.documentElement.clientWidth));
};
// this function is adding 'your-active-class' to the section on port
function activateTheClass() {
    for (section of sections) {
        if (viewedInScreen(section))
        {
            // Adding active class if it is viewed in screen
            section.setAttribute('class', 'your-active-class');
        }
         // deleting active class if it is not viewed in screen
        else {
            section.setAttribute("class", "");      
        }
    }
};
// activate the function when scrolling
document.addEventListener("scroll", activateTheClass);






