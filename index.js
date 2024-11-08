const questions = document.querySelectorAll('.question__title');
if (questions) {
    questions.forEach((question) => {
        if (question) {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle("show")
                question.classList.toggle("selected")
            });
        }
    });

}
