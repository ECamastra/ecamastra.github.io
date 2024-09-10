window.addEventListener("load", () => {
  const scrollTopButton = document.getElementById("scroll-top");

  scrollTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopButton.classList.remove("d-none");
    } else {
      scrollTopButton.classList.add("d-none");
    }
  };
});
