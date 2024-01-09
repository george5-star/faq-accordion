const allQuestionEls = document.querySelectorAll(".faq-accordion__subtitle");

const toggleAnswer = (e) => {
  const answer = e.target.closest(
    ".faq-accordion__question"
  ).nextElementSibling;
  answer.classList.toggle("show");
};

allQuestionEls.forEach((el) => {
  el.addEventListener("click", toggleAnswer);
});
