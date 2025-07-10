const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", () => {
  const remaining = maxLength - textarea.value.length;
  charCount.textContent = `Characters left: ${remaining}`;

  if (remaining < 0) {
    charCount.style.color = "red";
  } else if (remaining <= 20) {
    charCount.style.color = "orange";
  } else {
    charCount.style.color = "#333";
  }
});
