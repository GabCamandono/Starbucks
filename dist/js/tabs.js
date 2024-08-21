const tabs = document.querySelectorAll(".rewardsFavorites__category");
const contents = document.querySelectorAll(".rewardsFavorites__details");
const underline = document.querySelector(".rewardsFavorites__tabs");
var lastUnderline = `tabs-1-underline`;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");

    underline.classList.remove(lastUnderline);
    underline.classList.add(`${tab.id}-underline`);
    lastUnderline = `${tab.id}-underline`;
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
