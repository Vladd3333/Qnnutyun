  const btn = document.getElementById('mode-toggle');
        const body = document.documentElement;

        btn.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
            } else {
                body.setAttribute('data-theme', 'dark');
            }
        });