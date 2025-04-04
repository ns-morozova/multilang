export function setupLangSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const defaultLang = localStorage.getItem('lang') || 'en';
    function loadLang(lang) {
        fetch(`lang/${lang}.json`)
            .then((res) => res.json())
            .then((data) => {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (data[key]) el.textContent = data[key];
                });
                localStorage.setItem('lang', lang);
                switcher.value = lang;
            });
    }

    switcher.addEventListener('change', (e) => {
        loadLang(e.target.value);
    });

    loadLang(defaultLang);
}

