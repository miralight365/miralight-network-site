// JavaScript for MiraLight site
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to MiraLight Network");

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
