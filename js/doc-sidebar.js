class DocSidebar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        // TODO: This is a hack so I could just get started on the docs.
        this.innerHTML = 
            `<div class="sidebar">
                <a href="../index.html">Home</a>
                <a href="getting-started/getting-started.html">Getting Started</a>
            </div>`;
    }
}

customElements.define('doc-sidebar', DocSidebar);