// Function to detect if an element is visible on the screen
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', revealOnScroll);
      

// File drop/upload handlers
function dropHandler(ev) {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    handleFiles(files);
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function handleFiles(files) {
    const uploadArea = document.getElementById('upload-area');
    for (const file of files) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.width = '100px';
        img.style.margin = '10px';
        uploadArea.appendChild(img);
    }
}
