/*TODO:
- ADJUST RESIZE MOBILE PROPORTIONALITY
*/

const icons = document.querySelectorAll('.FAQ-icons');
const containers = document.querySelectorAll('.FAQ-containers');
const answers = document.querySelectorAll('.answers');
const questions = document.querySelectorAll('.questions');
let height = 145;

function showAnswer(x) {
    // Get the answer equivalent index
    let index = Array.prototype.indexOf.call(containers, x);
    // Get the current display value of the answer
    let maxHeight = (getComputedStyle(answers[index]).maxHeight);

    // MOBILE RESOLUTION
    if (window.matchMedia('(max-width: 767px)').matches) {
        // Closed FAQ
        if (maxHeight == '0px') {
            // Alters the question's font style
            questions[index].style.fontWeight = '700';

            // Flips the image
            icons[index].style.transform = 'rotate(180deg)';

            // Extends the body height
            if (height < 225) {
                height += 15;
                document.body.style.height = `${height}vh`;
            }
            
            // displays the answer
            answers[index].style.maxHeight = '100%';
            answers[index].style.paddingTop = '5px';

        }
        // Opened FAQ
        else {
            // Alters the question's font style
            questions[index].style.fontWeight = '400';

            // Flips the image
            icons[index].style.transform = 'rotate(360deg)';

            // Decreases the body height
            if (height > 150) {
                height -= 15;
                document.body.style.height = `${height}vh`;
            }

            // Hides the answer
            answers[index].style.maxHeight = '0px';
            answers[index].style.paddingTop = '0px';
        }
        // updates footer position
        document.querySelector('footer').style.top = `${height-10}vh`;   
    }
    // DESKTOP RESOLUTION
    else {
        // Closed FAQ
        if (maxHeight == '0px') {
            // Alters the answer's font style
            questions[index].style.fontWeight = '700';

            // Flips the image
            icons[index].style.transform = 'rotate(180deg)';

            // Updates the body height for responsivess in mobile
            if (height < 225) {
                height += 15;
            }
            
            // maxHeights the answer
            answers[index].style.maxHeight = '100%';
            answers[index].style.paddingTop = '5px';
        }
        // Opened FAQ
        else {
            // Alters the answer's font style
            questions[index].style.fontWeight = '400';

            // Flips the image
            icons[index].style.transform = 'rotate(360deg)';

            // Updates the body height for responsivess in mobile
            if (height > 150) {
                height -= 15;
            }

            // Hides the answer
            answers[index].style.maxHeight = '0px';
            answers[index].style.paddingTop = '0px';
        }
    }
}

// Body height update on resize
window.onresize = () => {
    // Mobile resolution
    if (window.innerWidth < 768) {
        document.body.style.height = `calc(${height}vh - 5vw)`;
        // updates footer position
        document.querySelector('footer').style.top = `calc(${height}vh - 13vh)`;  
    }
    // Tablet resolution
    else if (window.innerWidth >= 768 && window.innerWidth < 1080) {
        document.body.style.height = '110vh';
        // updates footer position
        document.querySelector('footer').style.top = `103vh`;
    }
    // Desktop resolution
    else {
        document.body.style.height = '100vh';
        // updates footer position
        document.querySelector('footer').style.top = `94vh`;
    }
}

// calls the showAnswer function to all FAQ containers
containers.forEach(x => x.onclick = function() {showAnswer(x)});