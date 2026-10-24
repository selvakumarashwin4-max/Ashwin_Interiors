// ====== EDIT THIS ======
// WhatsApp number with country code, digits only (no + or spaces). Example: 919876543210
const WHATSAPP_NUMBER = "916374578206";
// =======================

// Sticky header background on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Floating WhatsApp button
document.getElementById("whatsappBtn").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent("Hello Ashwin Interiors, I would like to know more about your services.");

// Kitchen photo viewer (lightbox)
let photos = [];
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
let current = 0;

function showPhoto(i) {
  current = (i + photos.length) % photos.length;
  lbImg.src = photos[current].src;
  lbImg.alt = photos[current].alt;
}
function openLightbox(i) {
  showPhoto(i);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
// Each gallery (kitchens, wardrobes...) cycles only through its own photos
document.querySelectorAll(".masonry img").forEach((img) =>
  img.addEventListener("click", () => {
    photos = Array.from(img.closest(".masonry").querySelectorAll("img"));
    openLightbox(photos.indexOf(img));
  })
);
document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => showPhoto(current - 1));
document.getElementById("lbNext").addEventListener("click", () => showPhoto(current + 1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPhoto(current - 1);
  if (e.key === "ArrowRight") showPhoto(current + 1);
});

// Enquiry form -> opens WhatsApp with the details filled in
document.getElementById("enquiryForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
    `Hello Ashwin Interiors,\n\n` +
    `Name: ${name}\nPhone: ${phone}\nService: ${service}\n` +
    (message ? `Message: ${message}` : "");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});
