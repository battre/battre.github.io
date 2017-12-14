window.onload = () => {
  document.getElementById("switch-button").addEventListener("click", () => {
    var label = document.getElementById("field-label");
    var field = document.getElementById("field");

    if (field.type == "text") {
      field.type = "password";
      label.innerHTML = "password";
    } else {
      field.type = "text";
      label.innerHTML = "text";
    }
  });
}
