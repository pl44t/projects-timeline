document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.getElementById('settings-button');
    const sidebar = document.getElementById('sidebar');
    const themeBoxes = document.querySelectorAll('.theme-box');

    settingsButton.addEventListener('click', () => {
        sidebar.style.width = '250px';
    });

    sidebar.addEventListener('mouseleave', () => {
        sidebar.style.width = '0';
    });

    themeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const theme = box.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    function applyTheme(theme) {
        switch (theme) {
            case 'theme1':
                document.documentElement.style.setProperty('--text-color', '#4a69bd');
                document.documentElement.style.setProperty('--body-bg-color', '#6a89cc');
                document.documentElement.style.setProperty('--header-bg-color', '#82ccdd');
                document.documentElement.style.setProperty('--accent-color', '#60a3bc');
                break;
            case 'theme2':
                document.documentElement.style.setProperty('--text-color', '#78e08f');
                document.documentElement.style.setProperty('--body-bg-color', '#38ada9');
                document.documentElement.style.setProperty('--header-bg-color', '#b8e994');
                document.documentElement.style.setProperty('--accent-color', '#60a3bc');
                break;
            case 'theme3':
                document.documentElement.style.setProperty('--text-color', '#f8c291');
                document.documentElement.style.setProperty('--body-bg-color', '#e55039');
                document.documentElement.style.setProperty('--header-bg-color', '#f3a683');
                document.documentElement.style.setProperty('--accent-color', '#cf6a87');
                break;
            case 'theme4':
                document.documentElement.style.setProperty('--text-color', '#60a3bc');
                document.documentElement.style.setProperty('--body-bg-color', '#3c6382');
                document.documentElement.style.setProperty('--header-bg-color', '#82ccdd');
                document.documentElement.style.setProperty('--accent-color', '#78e08f');
                break;
            case 'theme5':
                document.documentElement.style.setProperty('--text-color', '#ff9a9e');
                document.documentElement.style.setProperty('--body-bg-color', '#fecfef');
                document.documentElement.style.setProperty('--header-bg-color', '#f78fb3');
                document.documentElement.style.setProperty('--accent-color', '#cf6a87');
                break;
            case 'theme6':
                document.documentElement.style.setProperty('--text-color', '#e66767');
                document.documentElement.style.setProperty('--body-bg-color', '#ff6b6b');
                document.documentElement.style.setProperty('--header-bg-color', '#ffcccc');
                document.documentElement.style.setProperty('--accent-color', '#f8c291');
                break;
            case 'theme7':
                document.documentElement.style.setProperty('--text-color', '#38ada9');
                document.documentElement.style.setProperty('--body-bg-color', '#78e08f');
                document.documentElement.style.setProperty('--header-bg-color', '#b8e994');
                document.documentElement.style.setProperty('--accent-color', '#60a3bc');
                break;
            case 'theme8':
                document.documentElement.style.setProperty('--text-color', '#6a89cc');
                document.documentElement.style.setProperty('--body-bg-color', '#4a69bd');
                document.documentElement.style.setProperty('--header-bg-color', '#60a3bc');
                document.documentElement.style.setProperty('--accent-color', '#cf6a87');
                break;
            case 'theme9':
                document.documentElement.style.setProperty('--text-color', '#82ccdd');
                document.documentElement.style.setProperty('--body-bg-color', '#60a3bc');
                document.documentElement.style.setProperty('--header-bg-color', '#3c6382');
                document.documentElement.style.setProperty('--accent-color', '#cf6a87');
                break;
            default:
                break;
        }

        // Update the sidebar color
        sidebar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
    }
});
