class OverviewSidebar extends HTMLElement
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
                <a href="overview.html">Overview</a>
                <a href="defs.html">Definitions</a>
                <a href="scenes.html">Scenes</a>
                <a href="gameobjects.html">Game Objects</a>
                <a href="components.html">Components</a>
                <a href="mods.html">Mods</a>
            </div>`;
    }
}

customElements.define('overview-sidebar', OverviewSidebar);