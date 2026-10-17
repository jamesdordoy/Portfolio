import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['sunIcon', 'moonIcon'];

    connect() {
        this.syncIcons();
    }

    toggle() {
        const isDark = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.syncIcons();
    }

    syncIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        this.sunIconTarget.classList.toggle('hidden', !isDark);
        this.moonIconTarget.classList.toggle('hidden', isDark);
    }
}
