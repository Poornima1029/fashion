// Get modal elements
var contactModal = document.getElementById("contactModal");
var privacyModal = document.getElementById("privacyModal");

// Get buttons to open modals
var contactBtn = document.getElementById("contactBtn");
var privacyBtn = document.getElementById("privacyBtn");

// Get close elements
var closeBtns = document.getElementsByClassName("close");

// Open Contact Form modal
contactBtn.onclick = function () {
    contactModal.style.display = "block";
};

// Open Privacy Policy modal
privacyBtn.onclick = function () {
    privacyModal.style.display = "block";
};

// Close modal when 'x' is clicked
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
        contactModal.style.display = "none";
        privacyModal.style.display = "none";
    };
}

// Close modal when clicking outside of the modal
window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target == privacyModal) {
        privacyModal.style.display = "none";
    }
};
