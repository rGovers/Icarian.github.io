class EditorSidebar extends HTMLElement
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
                <a href="../getting-started.html">&lt;</a>
            </div>`;
    }
}

customElements.define('editor-sidebar', EditorSidebar);