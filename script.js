function toggleSection(sectionId) {
  var sections = document.querySelectorAll('section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });

  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

function scrollToSection(sectionId) {
  var targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

document.querySelectorAll('nav a').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var sectionId = this.getAttribute('href').substring(1);
    toggleSection(sectionId);
    scrollToSection(sectionId);
  });
});

document.getElementById('certificates').addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    var certificateTitle = document.getElementById('certificate-title');
    certificateTitle.innerText = e.target.innerText;
    certificateTitle.classList.remove('hidden');
  }
});

document.getElementById('certificate-title').classList.add('hidden');
