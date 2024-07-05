document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementsByClassName('close')[0];
  const form = document.getElementById('add-form');
  const timeline = document.getElementById('timeline');

  addButton.addEventListener('click', () => {
      modal.style.display = 'flex';
  });

  closeModal.onclick = () => {
      modal.style.display = 'none';
  };

  window.onclick = (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  };

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const date = document.getElementById('date').value;
      const description = document.getElementById('description').value;
      if (title && date && description) {
          createTimelineItem(title, date, description);
          form.reset();
          modal.style.display = 'none';
      }
  });

  window.addEventListener('load', callbackFunc);
  window.addEventListener('resize', callbackFunc);
  window.addEventListener('scroll', callbackFunc);
});
