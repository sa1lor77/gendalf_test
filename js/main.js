document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".faq__accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow-icon");
      const isOpen = content.style.maxHeight;

      // Закрываем все открытые элементы
      document.querySelectorAll(".faq__accordion-content").forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
          item.previousElementSibling.querySelector(
            ".arrow-icon"
          ).style.transform = "rotate(0deg)";
        }
      });

      // Открываем или закрываем текущий элемент
      if (isOpen) {
        content.style.maxHeight = null;
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = "rotate(90deg)";
        this.classList.add("active");
      }
    });
  });
});

const body = document.querySelector("body");

const header = document.querySelector(".header");
const openBurger = header.querySelector(".header__burger-btn");
const burgerList = header.querySelector(".burger__menu-list");

burgerList.addEventListener("click", function (event) {
  let li = event.target.closest("li");
  if (li) {
    header.classList.remove("open");
    body.classList.remove("over");
  }
});

openBurger.addEventListener("click", closeBurger);

function closeBurger() {
  if (!header.classList.contains("open")) {
    header.classList.add("open");
    body.classList.add("over");
  } else {
    header.classList.remove("open");
    body.classList.remove("over");
  }
}
