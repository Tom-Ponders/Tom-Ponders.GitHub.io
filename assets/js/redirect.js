// redirect.js
window.addEventListener('load', () => {
    const path = window.location.pathname;
    const normalizedPath = path.toLowerCase();
    
    if (path !== normalizedPath) {
        window.location.href = normalizedPath;
    }
});