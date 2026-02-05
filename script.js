// ===============================
// SUVIDHA KIOSK SCRIPT (BACKEND CONNECTED)
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

// -------------------------------
// Navigation Functions
// -------------------------------
function openSection(sectionId) {
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "none";
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = "block";
}

function goHome() {
  openSection("home");
}

// -------------------------------
// Language Selection (Demo)
// -------------------------------
const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    alert(
      "Language changed to: " +
      this.value +
      "\n(Multilingual support via backend/API)"
    );
  });
}

// -------------------------------
// Complaint Submission (REAL BACKEND)
// -------------------------------
const submitComplaintBtn = document.getElementById("submitComplaint");

if (submitComplaintBtn) {
  submitComplaintBtn.addEventListener("click", function () {
    const departmentValue =
      document.querySelector("#complaint select").value;

    const complaintText =
      document.querySelector("#complaint textarea").value;

    if (!departmentValue || !complaintText.trim()) {
      alert("Please fill all complaint details.");
      return;
    }

    fetch("http://localhost:3000/api/complaints/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        department: departmentValue,
        description: complaintText
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.complaintId) {
          alert(
            "Complaint submitted successfully!\n\nComplaint ID: " +
            data.complaintId
          );
          document.querySelector("#complaint textarea").value = "";
          goHome();
        } else {
          alert("Something went wrong. Try again.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Server not reachable. Please try later.");
      });
  });
}

// -------------------------------
// Payment Buttons (Backend Placeholder)
// -------------------------------
document.querySelectorAll("button").forEach(button => {
  if (button.textContent.includes("Pay")) {
    button.addEventListener("click", function () {
      fetch("http://localhost:3000/api/payments/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: "Utility Payment",
          amount: 100
        })
      })
        .then(res => res.json())
        .then(data => {
          alert(
            "Payment Successful!\nTransaction ID: " +
            data.transactionId
          );
        })
        .catch(() => {
          alert("Payment service unavailable.");
        });
    });
  }
});

// -------------------------------
// Initial Load
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {
  goHome();
});
