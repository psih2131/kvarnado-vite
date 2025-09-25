export default function readMoreHome() {
    const btn = document.querySelector('.home-seo-sec__read-more-mob');

    if (btn) {
        const wrapper = document.querySelector('.home-seo-sec__text-wrapper-cont');
        const content = document.querySelector('.home-seo-sec__wp-editor-post');

        let expanded = false; // состояние

        btn.addEventListener('click', () => {
            if (!expanded) {
                // раскрыть
                const fullHeight = content.scrollHeight; // вся высота контента
                wrapper.style.maxHeight = fullHeight + 'px';
                expanded = true;
                btn.classList.add('active');
                wrapper.classList.add('active-wrapper');
            } else {
                // свернуть
                wrapper.style.maxHeight = ''; // вернёт к изначальному стилю из CSS
                expanded = false;
                btn.classList.remove('active');
                wrapper.classList.remove('active-wrapper');
            }
        });
    }

}