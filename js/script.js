// automatically chage name=======================
function replacename() {
  let yourname = prompt("Enter your name: ");
  document.getElementById("yourname").innerHTML = yourname;
}
replacename();
document.getElementById("yourname").addEventListener("click", function () {
  replacename();
});

// automatically banner slide=======================
const slides = document.querySelectorAll(".banner-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);

// validation message=======================
document
  .querySelector(".main-message")
  .addEventListener("submit", function (event) {
    // Get the form inputs
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const job = document.getElementById("job-hire").value;
    const message = document.getElementById("message-area").value;

    // Validation flag
    let isValid = true;

    // Validate Name
    if (name === "") {
      alert("Name is required.");
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // Validate Job
    if (job === "") {
      alert("Please select a job.");
      isValid = false;
    }

    // Validate Message
    if (message === "") {
      alert("Message cannot be empty.");
      isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });
