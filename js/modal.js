const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];
const form = document.getElementById('add-form');
const linkProjectsCheckbox = document.getElementById('link-projects-checkbox');
const existingProjectsSelect = document.getElementById('existing-projects-select');
const colorPicker = document.getElementById('color-picker');
const colorPickerLabel = document.getElementById('color-picker-label');

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
        existingProjectsSelect.style.display = 'inline-block';
        colorPicker.style.display = 'none';
        colorPickerLabel.style.display = 'none';
        populateExistingProjects();
    } else {
        existingProjectsSelect.style.display = 'none';
        colorPicker.style.display = 'inline-block';
        colorPickerLabel.style.display = 'inline-block';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const selectedProject = existingProjectsSelect.value;
    const color = colorPicker.value;
    if (title && date && description) {
        createTimelineItem(title, date, description, selectedProject, color);
        form.reset();
        modal.style.display = 'none';
        resetForm();  // Add this line to reset the form
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

function resetForm() {
    linkProjectsCheckbox.checked = false; // Reset the checkbox
    existingProjectsSelect.style.display = 'none';
    colorPicker.style.display = 'inline-block';
    colorPickerLabel.style.display = 'inline-block';
}
