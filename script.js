// Scroll to top (smooth)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Button select
const btn = document.getElementById("topBtn");

// Create progress ring
const circle = document.createElement("div");
circle.classList.add("progress-ring");
btn.appendChild(circle);

// Initial state
btn.style.opacity = "0";
btn.style.pointerEvents = "none";

// Scroll event
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Show / hide button
  if (scrollTop > 200) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
    btn.style.transform = "translateY(0)";
  } else {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
    btn.style.transform = "translateY(20px)";
  }

  // Progress ring update
  circle.style.background = `conic-gradient(#ffffff ${scrollPercent}%, rgba(255,255,255,0.2) ${scrollPercent}%)`;
});

// Click animation
btn.addEventListener("click", () => {
  btn.style.transform = "scale(0.9)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 150);
});