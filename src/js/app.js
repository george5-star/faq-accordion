const allQuestionEls = document.querySelectorAll(".faq-accordion__subtitle");
const allIcons = document.querySelectorAll(".icon");

const toggleIcon = (e) => {
  console.log(e.target.nextElementSibling);
};

const toggleAnswer = (e) => {
  const answer = e.target.closest(
    ".faq-accordion__question"
  ).nextElementSibling;
  answer.classList.toggle("show");

  const iconPlus = e.target
    .closest(".faq-accordion__question")
    .querySelector(".icon-plus");
  const iconMinus = e.target
    .closest(".faq-accordion__question")
    .querySelector(".icon-minus");

  iconPlus.classList.toggle("hide");
  iconMinus.classList.toggle("show");
};

allQuestionEls.forEach((el) => {
  el.addEventListener("click", toggleAnswer);
});

allIcons.forEach((icon) => {
  icon.addEventListener("click", toggleAnswer);
});
