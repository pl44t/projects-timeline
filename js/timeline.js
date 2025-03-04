function createTimelineItem(title, date, description, selectedProject, color) {
    const timeline = document.getElementById('timeline');
    const newItem = document.createElement('div');
    newItem.className = 'timeline-item';
    newItem.style.backgroundColor = color;

    const itemTitle = document.createElement('h2');
    itemTitle.textContent = title;

    const itemDate = document.createElement('p');
    itemDate.textContent = selectedProject !== "" ? `End Date: ${date}` : `Start Date: ${date}`;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    newItem.appendChild(itemTitle);
    newItem.appendChild(itemDate);
    newItem.appendChild(itemDescription);

    if (selectedProject !== "") {
        const startItem = document.querySelectorAll('.timeline-item')[selectedProject];
        const connector = document.createElement('div');
        connector.className = 'connector';
        connector.textContent = ''; // Remove text content for the connector
        connector.style.backgroundColor = color;
        startItem.appendChild(connector);
    }

    timeline.appendChild(newItem);
}
