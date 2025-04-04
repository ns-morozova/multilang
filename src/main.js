import './assets/css/style.css';
import { setupLangSwitcher } from './assets/js/lang.js';

document.addEventListener('DOMContentLoaded', () => {
    setupLangSwitcher(renderPosts);
});

const postsData = [
    {
        image: 'assets/img/post1.png',
        categories: {
            en: ['Aenean Eleifend', 'Aliquam'],
            ru: ['Энеан Элефенд', 'Аликвам']
        },
        icon: 'assets/svg/photo.svg',
        title: {
            en: 'Integer Maecenas Eget Viverra',
            ru: 'Целый Маэценас получает жизнь'
        },
        author: {
            en: 'Joanna Wellick',
            ru: 'Дж. Уэллик'
        },
        date: {
            en: 'June 28, 2018',
            ru: '28 июня 2018'
        },
        number_shares: {
            en: '1K shares',
            ru: '1K поделились'
        },
        description: {
            en: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
            ru: 'Возвышение перед началом, подушка гор и пустые слова, боль и цена до сказанного. Победа — просто идеальный финал. Напряжённый путь питания ведёт обратно в горы.'
        }
    },
    {
        image: 'assets/img/post2.png',
        categories: {
            en: ['Aenean Eleifend', 'Aliquam'],
            ru: ['Энеан Элефенд', 'Аликвам']
        },
        icon: 'assets/svg/video.svg',
        title: {
            en: 'Aenean eleifend ante maecenas',
            ru: 'Вечно возвышающийся покровитель'
        },
        author: {
            en: 'Joanna Wellick',
            ru: 'Дж. Уэллик'
        },
        date: {
            en: 'June 28, 2018',
            ru: '28 июня 2018'
        },
        number_shares: {
            en: '1K shares',
            ru: '1K поделились'
        },
        description: {
            en: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
            ru: 'Возвышение перед началом, подушка гор и пустые слова, боль и цена до сказанного. Победа — просто идеальный финал. Напряжённый путь питания ведёт обратно в горы.'
        }
    },
    {
        image: 'assets/img/post3.png',
        categories: {
            en: ['Aenean Eleifend', 'Aliquam'],
            ru: ['Энеан Элефенд', 'Аликвам']
        },
        icon: 'assets/svg/photo.svg',
        title: {
            en: 'Integer Maecenas Eget Viverra',
            ru: 'Целый Маэценас получает жизнь'
        },
        author: {
            en: 'Joanna Wellick',
            ru: 'Дж. Уэллик'
        },
        date: {
            en: 'June 28, 2018',
            ru: '28 июня 2018'
        },
        number_shares: {
            en: '1K shares',
            ru: '1K поделились'
        },
        description: {
            en: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.',
            ru: 'Возвышение перед началом, подушка гор и пустые слова, боль и цена до сказанного. Победа — просто идеальный финал. Напряжённый путь питания ведёт обратно в горы.'
        }
    }
];

function renderPosts(currentLang = 'en') {
    const container = document.querySelector('.posts');
    if (!container) return;

    container.innerHTML = '';

    postsData.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('post-card');

        const categoriesHTML = post.categories[currentLang]
            .map(cat => `<span class="category">${cat}</span>`)
            .join(' ');

        card.innerHTML = `
      <div class="post-image-wrapper">
        <img src="${post.image}" alt="${post.title[currentLang]}" class="post-image">
        <div class="post-overlay">
          <div class="post-categories">${categoriesHTML}</div>
          <div class="post-icon">
            <img src="${post.icon}" alt="icon">
          </div>
        </div>
      </div>

      <div class="post-content">
        <h3 class="post-title">${post.title[currentLang]}</h3>
        <div class="post-meta">
          <div class="post-author">
            <img src="assets/img/author.png" alt="author" class="post-author-photo">
            <span class="post-author-name">${post.author[currentLang]}</span>
          </div>
          <img src="assets/svg/dash_gray.svg" alt="dash">
          <span class="post-date">${post.date[currentLang]}</span>
          <img src="assets/svg/dot.svg" alt="dot">
          <div class="post-shares">
            <img src="assets/svg/shares.svg" alt="shares">
            <span>${post.number_shares[currentLang]}</span>
          </div>
        </div>
        <p class="post-descr">${post.description[currentLang]}</p>
        <a href="#" class="post-link" data-i18n="post_view">View post</a>
      </div>
    `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
});