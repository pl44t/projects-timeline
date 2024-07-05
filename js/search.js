document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const timeline = document.getElementById('timeline');

  searchBar.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const projects = timeline.getElementsByClassName('timeline-item');
      
      Array.from(projects).forEach(project => {
          const title = project.querySelector('h2').textContent.toLowerCase();
          if (title.includes(searchTerm)) {
              project.style.display = '';
          } else {
              project.style.display = 'none';
          }
      });
  });
});
