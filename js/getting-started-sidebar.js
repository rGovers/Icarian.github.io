class GettingStartedSidebar extends HTMLElement
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
                <a href="icarian/what-is-icarian.html">What is Icarian Engine?</a>
                <a href="overview/overview.html">Overview</a>
                <a href="editor/editor.html">Editor</a>
            </div>`;
    }
}

customElements.define('getting-started-sidebar', GettingStartedSidebar);