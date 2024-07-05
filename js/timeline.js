const timeline = document.getElementById('timeline');

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const callbackFunc = () => {
    const items = document.querySelectorAll('.timeline-item');
    for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add('in-view');
        }
    }
};

const createTimelineItem = (title, date, description, linkedProjectIndex, color) => {
    const newItem = document.createElement('div');
    newItem.classList.add('timeline-item');
    newItem.style.backgroundColor = color;
    newItem.innerHTML = `
        <div class="timeline-content">
            <h2>${title}</h2>
            <p>Started: ${date}</p>
            <p>Description: ${description}</p>
        </div>
    `;

    if (linkedProjectIndex) {
        const linkedProject = document.querySelectorAll('.timeline-item')[linkedProjectIndex];
        if (linkedProject) {
            linkedProject.classList.add('linked-start');
            newItem.classList.add('linked-end');
            const linkedColor = window.getComputedStyle(linkedProject).backgroundColor;
            linkedProject.style.backgroundColor = linkedColor;
            newItem.style.backgroundColor = linkedColor;
        }
    }

    timeline.appendChild(newItem);
    callbackFunc(); // Apply the in-view class if the new item is in viewport
};

window.addEventListener('load', callbackFunc);
window.addEventListener('resize', callbackFunc);
window.addEventListener('scroll', callbackFunc);
