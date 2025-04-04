export function setupLangSwitcher(renderPosts) {
    const switcher = document.getElementById('langSwitcher');
    const defaultLang = localStorage.getItem('lang') || 'en';

    function applyTranslations(data) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.textContent = data[key];
            }
        });
    }

    function loadLang(lang) {
        fetch(`lang/${lang}.json`)
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('lang', lang);
                document.getElementById('langSwitcher').value = lang;

                renderPosts(lang);
                applyTranslations(data);
            });
    }

    switcher.addEventListener('change', (e) => {
        loadLang(e.target.value);
    });

    loadLang(defaultLang);
}
