let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById('sideNav')
let menu = document.getElementById("menu")
const accordionItems = document.querySelectorAll('input[type="radio"][name="accordian"]');
const learnMoreSection = document.getElementById('learnmore-section');
const moveableButtons = document.querySelectorAll('.learnmore-buttons');


sideNav.style.right = "-250px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "img/closeMenu.png"
    }else{
        sideNav.style.right = "-250px";
        menu.src = "img/menuIcon.png"
    }
}


document.addEventListener("DOMContentLoaded", function () {
    accordionItems.forEach(item => {
        item.addEventListener("change", function () {
            if (item.checked) {
                // An accordion item is checked (open), so calculate and set the position
                const openAccordionItem = document.querySelector(`#${item.id} + .content`);
                const openAccordionItemHeight = openAccordionItem.scrollHeight;
                learnMoreSection.style.transform = `translateY(${openAccordionItemHeight}px)`;

                // Move the buttons with the same offset
                moveableButtons.forEach(button => {
                    button.style.transform = `translateY(${openAccordionItemHeight}px)`;
                });
            } else {
                // No accordion items are checked (closed), so reset the positions
                learnMoreSection.style.transform = 'translateY(0)';
                moveableButtons.forEach(button => {
                    button.style.transform = 'translateY(0)';
                });
            }
        });
    });
});
document.getElementById('map-overlay').addEventListener('click', function() {
    document.querySelector('.map-container').style.filter = 'blur(0px)'; // Remove the blur
});

accordionItems.forEach(item => {
    item.addEventListener("change", function () {
        if (item.checked) {
            // An accordion item is checked (open), so calculate and set the position
            const openAccordionItem = document.querySelector(`#${item.id} + .content`);
            const openAccordionItemHeight = openAccordionItem.scrollHeight;

            // Update the position of map-section and footer
            document.querySelector('.map-section').style.transform = `translateY(${openAccordionItemHeight}px)`;
            document.querySelector('.footer').style.transform = `translateY(${openAccordionItemHeight}px)`;

            // Move the buttons with the same offset
            moveableButtons.forEach(button => {
                button.style.transform = `translateY(${openAccordionItemHeight}px)`;
            });
        } else {
            // No accordion items are checked (closed), so reset the positions
            document.querySelector('.map-section').style.transform = 'translateY(0)';
            document.querySelector('.footer').style.transform = 'translateY(0)';
            moveableButtons.forEach(button => {
                button.style.transform = 'translateY(0)';
            });
        }
    });
});
