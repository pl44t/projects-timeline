const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];
const form = document.getElementById('add-form');
const linkProjectsCheckbox = document.getElementById('link-projects-checkbox');
const existingProjectsSelect = document.getElementById('existing-projects-select');

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

linkProjectsCheckbox.addEventListener('change', () => {
    if (linkProjectsCheckbox.checked) {
        existingProjectsSelect.style.display = 'block';
        populateExistingProjects();
    } else {
        existingProjectsSelect.style.display = 'none';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const selectedProject = existingProjectsSelect.value;
    if (title && date && description) {
        createTimelineItem(title, date, description, selectedProject);
        form.reset();
        modal.style.display = 'none';
    }
});

function populateExistingProjects() {
    const projects = document.querySelectorAll('.timeline-item');
    existingProjectsSelect.innerHTML = '<option value="">Select a project</option>';
    projects.forEach((project, index) => {
        const title = project.querySelector('h2').textContent;
        const option = document.createElement('option');
        option.value = index;
        option.textContent = title;
        existingProjectsSelect.appendChild(option);
    });
}
