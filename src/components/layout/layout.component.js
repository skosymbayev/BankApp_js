export class Layout {
    constructor({router, children})
    {
        this.router = router
        this.children = children
    }

    render()
    {
        const headerHTML = `
            <header>
                header
            </header>
            <nav>
                <a href="/">Home</a>
                <a href="/auth">Auth</a>
            </nav>
        `

        return `
            ${headerHTML}
            <main>
                ${this.children}
            </main>
        `
    }
}