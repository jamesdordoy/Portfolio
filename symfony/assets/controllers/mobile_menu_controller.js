import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['panel', 'openIcon', 'closeIcon'];

    toggle() {
        this.panelTarget.classList.toggle('hidden');
        this.openIconTarget.classList.toggle('hidden');
        this.closeIconTarget.classList.toggle('hidden');
    }

    close() {
        this.panelTarget.classList.add('hidden');
        this.openIconTarget.classList.remove('hidden');
        this.closeIconTarget.classList.add('hidden');
    }
}
