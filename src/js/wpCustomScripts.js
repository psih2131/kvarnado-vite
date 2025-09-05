function removeElementorStyle() {
    document.addEventListener('DOMContentLoaded', () => {
        const styleEl = document.getElementById('hello-elementor-css');

        const styleElChild = document.getElementById('hello-elementor-child-style-css');

        const styleElTheme = document.getElementById('hello-elementor-theme-style-css');

        if (styleEl) {
            styleEl.remove();
            console.log('❌ styleEl удалён');
        }

        if (styleElChild) {
            styleElChild.remove();
            console.log('❌ styleElChild удалён');
        }

        if (styleElTheme) {
            styleElTheme.remove();
            console.log('❌ styleElTheme удалён');
        }
    });
}

export { removeElementorStyle }