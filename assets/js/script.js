document.querySelectorAll('.accordion-content').forEach(item => {
    item.style.maxHeight = 0;
})

document.querySelectorAll('.accordion-button').forEach((button) => {

    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if(button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionContent.style.borderTop = "2px solid #aaa";
        } else {
            accordionContent.style.maxHeight = 0;
            accordionContent.style.borderTop = "1px solid transparent";
        }
    })
});
