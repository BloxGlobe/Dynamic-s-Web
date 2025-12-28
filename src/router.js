// Simple hash router

(function() {
    function loadPage() {
        const page = window.location.hash.slice(1) || 'home';
        const container = document.getElementById('mainContent');
        
        if (!container) return;

        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${page}`) {
                link.classList.add('active');
            }
        });

        // Load page script
        const script = document.createElement('script');
        script.src = `src/pages/${page}.js`;
        
        script.onload = () => {
            const initFunc = window[`init${page.charAt(0).toUpperCase() + page.slice(1)}`];
            if (initFunc) initFunc(container);
        };

        script.onerror = () => {
            container.innerHTML = `<h1 class="page-title">404 - Page not found</h1>`;
        };

        document.body.appendChild(script);
    }

    window.addEventListener('hashchange', loadPage);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPage);
    } else {
        loadPage();
    }
})();