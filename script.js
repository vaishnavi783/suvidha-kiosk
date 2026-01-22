// ===============================
// SUVIDHA KIOSK SCRIPT
// ===============================

// List of all sections in the kiosk
const sections = [
  "home",
  "electricity",
  "gas",
  "water",
  "municipal",
  "complaint"
];

// Function to open a specific section
function openSection(sectionId) {
  // Hide all sections
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = "none";
    }
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

// Function to go back to home screen
function goHome() {
  openSection("home");
}

// ===============================
// LANGUAGE SELECTION (DEMO ONLY)
// ===============================

const languageSelect = document.querySelector("select");

if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    alert(
      "Language changed to: " + this.value +
      "\n(Multilingual content can be integrated via backend/API)"
    );
  });
}

// ===============================
// COMPLAINT SUBMISSION (DEMO)
// ===============================

const submitButtons = document.querySelectorAll("button");

submitButtons.forEach(button => {
  if (button.textContent.includes("Submit Complaint")) {
    button.addEventListener("click", function () {
      const complaintId = "CMP" + Math.floor(Math.random() * 100000);
      alert(
        "Complaint submitted successfully!\nComplaint ID: " + complaintId
      );
      goHome();
    });
  }
});

// ===============================
// PAYMENT BUTTON DEMO ALERTS
// ===============================

submitButtons.forEach(button => {
  if (
    button.textContent.includes("Pay") ||
    button.textContent.includes("Payment")
  ) {
    button.addEventListener("click", function () {
      alert(
        "Secure payment gateway integration will be implemented here."
      );
    });
  }
});

// ===============================
// INITIAL LOAD
// ===============================

// Show home screen when kiosk starts
document.addEventListener("DOMContentLoaded", function () {
  goHome();
});
