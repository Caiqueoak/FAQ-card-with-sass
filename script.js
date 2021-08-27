/*TODO:
- FIX THE FONTS COLORS
- FIX MINOR DETAILS ABOUT POSITIONING
- ADD THE CLICK EFFECT ON THE QUESTIONS + ARROW CONTAINERS
- ADD FOOTER
- FATORAR O CÓDIGO INTEIRO
*/

const buttons = document.querySelectorAll('.FAQ-icons');
const answers = document.querySelectorAll('.answers');
const questions = document.querySelectorAll('.questions');
let height = 150;

function showAnswer(x) {
    // Get the answer equivalent index
    let index = Array.prototype.indexOf.call(buttons, x);
    // Get the current display value of the answer
    let displayState = (getComputedStyle(answers[index]).display);

    // MOBILE RESOLUTION
    if (window.matchMedia('(max-width: 767px)').matches) {
        // Closed FAQ
        if (displayState == 'none') {
            // Alters the answer's font style
            questions[index].style.fontWeight = '700';

            // Flips the image
            x.style.transform = 'rotate(180deg)';

            // Extends the body height
            if (height < 200) {
                height += 10;
                document.body.style.height = `${height}vh`;
            }
            
            // displays the answer
            answers[index].style.display = 'inline';
        }
        // Opened FAQ
        else {
            // Alters the answer's font style
            questions[index].style.fontWeight = '400';

            // Flips the image
            x.style.transform = 'rotate(360deg)';

            // Decreases the body height
            if (height > 150) {
                height -= 10;
                document.body.style.height = `${height}vh`;
            }

            // Hides the answer
            answers[index].style.display = 'none';
        }   
    }
    // DESKTOP RESOLUTION
    else {
        // Body height reset
        document.body.style.height = '100vh';

        // Closed FAQ
        if (displayState == 'none') {
            // Alters the answer's font style
            questions[index].style.fontWeight = '700';

            // Flips the image
            x.style.transform = 'rotate(180deg)';

            // Extends the body height
            if (height < 200) {
                height += 10;
                //document.body.style.height = `${height}vh`;
            }
            
            // displays the answer
            answers[index].style.display = 'inline';
        }
        // Opened FAQ
        else {
            // Alters the answer's font style
            questions[index].style.fontWeight = '400';

            // Flips the image
            x.style.transform = 'rotate(360deg)';

            // Decreases the body height
            if (height > 150) {
                height -= 10;
                //document.body.style.height = `${height}vh`;
            }

            // Hides the answer
            answers[index].style.display = 'none';
        }
    }
}

// calls the showAnswer function to all arrow icons
buttons.forEach(x => x.onclick = 
    function() {showAnswer(x)});