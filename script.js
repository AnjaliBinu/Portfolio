const aboutModal = document.getElementById('aboutModal');
const aboutBtn = document.getElementById('aboutBtn');
const closeAboutBtn = document.getElementById('closeAboutBtn');

const contactModal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.getElementById('closeContactBtn');

const profilesModal = document.getElementById('profilesModal');
const profilesBtn = document.getElementById('profilesBtn');
const closeProfilesBtn = document.getElementById('closeProfilesBtn');

const projectsModal = document.getElementById('projectsModal');
const projectsBtn = document.getElementById('projectsBtn');
const closeProjectsBtn = document.getElementById('closeProjectsBtn');

const academicModal = document.getElementById('academicModal');
const academicBtn = document.getElementById('academicBtn');
const closeAcademicBtn = document.getElementById('closeAcademicBtn');

const nowModal = document.getElementById('nowModal');
const nowBtn = document.getElementById('nowBtn');
const closeNowBtn = document.getElementById('closeNowBtn');

aboutBtn.addEventListener('click', () => {
    aboutModal.classList.add('active');
});
closeAboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    contactModal.classList.remove('active');
});

profilesBtn.addEventListener('click', () => {
    profilesModal.classList.add('active');
});
closeProfilesBtn.addEventListener('click', () => {
    profilesModal.classList.remove('active');
});

projectsBtn.addEventListener('click', () => {
    projectsModal.classList.add('active');
});
closeProjectsBtn.addEventListener('click', () => {
    projectsModal.classList.remove('active');
});

academicBtn.addEventListener('click', () => {
    academicModal.classList.add('active');
});
closeAcademicBtn.addEventListener('click', () => {
    academicModal.classList.remove('active');
});

nowBtn.addEventListener('click', () => {
    nowModal.classList.add('active');
});
closeNowBtn.addEventListener('click', () => {
    nowModal.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.classList.remove('active');
    }   
    if (event.target === aboutModal) {
        aboutModal.classList.remove('active');
    }
    if (event.target === profilesModal) {
        profilesModal.classList.remove('active');
    }
    if (event.target === projectsModal) {
        projectsModal.classList.remove('active');
    }
    if (event.target === academicModal) {
        academicModal.classList.remove('active');
    }
    if (event.target === nowModal) {
        nowModal.classList.remove('active');
    }
});