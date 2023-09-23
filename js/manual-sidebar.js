class ManualSidebar extends HTMLElement
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
                <a href="../docs.html">&lt;</a>
                <a href="icarian-engine/icarian-engine.html">Icarian Engine</a>
            </div>`;
    }
}

customElements.define('manual-sidebar', ManualSidebar);