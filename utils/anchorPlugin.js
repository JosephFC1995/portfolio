import { ScrollbarPlugin } from 'smooth-scrollbar'

class AnchorPlugin extends ScrollbarPlugin {
    static pluginName = 'anchor'

    static defaultOptions = {
        scrollbar: null,
    }

    onHashChange = () => {
        this.handleHash(location.hash)
    }

    onClick = (event) => {
        const { target } = event

        if (target.tagName !== 'A') {
            return
        }

        var hash = target.getAttribute('href')
        const dataHash = target.getAttribute('data-hash')

        hash = dataHash

        if (!hash || hash.charAt(0) !== '#') {
            return
        }

        this.handleHash(hash)
    }

    handleHash = (hash) => {
        // console.log('hash:', hash)
        // console.log('hash:', this.scrollbar)

        if (!hash) {
            return
        }

        if (hash === '#top') {
            this.scrollbar.setMomentum(0, -this.scrollbar.scrollTop)
        } else {
            // console.log('scrollTop:', this.scrollbar.containerEl.scrollTop)

            this.scrollbar.scrollIntoView(document.querySelector(hash), {
                offsetTop: -this.scrollbar.containerEl.scrollTop,
            })
        }
    }

    onInit() {
        this.handleHash(location.hash)

        window.addEventListener('hashchange', this.onHashChange)

        this.scrollbar.contentEl.addEventListener('click', this.onClick)
        document.querySelector('#section-navigation').addEventListener('click', this.onClick)
        document.querySelector('#menu').addEventListener('click', this.onClick)
    }

    onDestory() {
        window.removeEventListener('hashchange', this.onHashChange)

        this.scrollbar.contentEl.removeEventListener('click', this.onClick)
    }
}

export default AnchorPlugin