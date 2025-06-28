function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const symbol = button.querySelector(".symbol");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    symbol.textContent = "+";
  } else {
    answer.style.display = "block";
    symbol.textContent = "−";
  }
}
