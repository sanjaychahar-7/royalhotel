document.addEventListener("DOMContentLoaded", () => {
  // ✅ ACTIVE NAV LINK HIGHLIGHTING
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ✅ SMOOTH SCROLL FOR HASH LINKS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ✅ BACK TO TOP BUTTON
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.className = "back-to-top";
  backToTop.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: var(--primary); color: white;
    border: none; border-radius: 8px;
    padding: 10px 15px; display: none;
    cursor: pointer; z-index: 999;
  `;
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ✅ PAGE FADE-IN EFFECT
  document.body.style.opacity = 0;
  window.onload = () => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = 1;
  };

  // ✅ GALLERY LIGHTBOX
  document.querySelectorAll(".lightbox").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:rgba(0,0,0,0.85);display:flex;align-items:center;
        justify-content:center;z-index:999;
      `;
      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.style.maxWidth = "90%";
      largeImg.style.maxHeight = "90%";
      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    });
  });

 

  // ✅ BOOKING FORM WHATSAPP SUBMIT
  
 const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Validate inputs
    if (!name || !phone || !email || !checkin || !checkout) {
      alert("Please fill all details before booking!");
      return;
    }

    // Create WhatsApp message
    const message = `*📌 Royal Hotel Booking Request*%0A` +
                    `👤 Name: ${name}%0A` +
                    `📞 Phone: ${phone}%0A` +
                    `📧 Email: ${email}%0A` +
                    `🏨 Check-in: ${checkin}%0A` +
                    `🏁 Check-out: ${checkout}%0A`;

    // Replace with your WhatsApp number (with country code, no "+" or "-" or spaces)
    const yourNumber = "919058949307"; 
    const whatsappURL = `https://wa.me/${yourNumber}?text=${message}`;

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");

    // Reset form
    bookingForm.reset();
  });
}


  

  // ✅ FACILITY CARDS FADE-IN ON SCROLL
  const cards = document.querySelectorAll(".facility-card");
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transition = "opacity 0.5s ease-in-out";
  });

  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.style.opacity = 1;
      }
    });
  });
});

// ✅ MOBILE MENU TOGGLE FUNCTION
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}


