function replacename() {
  let yourname = prompt("Enter your name: ");
  document.getElementById("yourname").innerHTML = yourname;
}
replacename();
document.getElementById("yourname").addEventListener("click", function () {
  replacename();
});
