class IcarianEngineManualSidebar extends HTMLElement
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
                <a href="../manual.html">&lt;</a>
                <a href="definitions-animation-controller-def.html">Definitions.AnimationControllerDef</a>
                <a href="definitions-animator-def.html">Definitions.AnimatorDef</a>
                <a href="definitions-box-collision-shape-def.html">Definitions.BoxCollisionShapeDef</a>
                <a href="definitions-camera-def.html">Definitions.CameraDef</a>
                <a href="definitions-capsule-collision-shape-def.html">Definitions.CapsuleCollisionShapeDef</a>
                <a href="definitions-collision-shape-def.html">Definitions.CollisionShapeDef</a>
                <a href="definitions-component-def.html">Definitions.ComponentDef</a>
                <a href="definitions-cylinder-collision-shape-def.html">Definitions.CylinderCollisionShapeDef</a>
                <a href="definitions-def.html">Definitions.Def</a>
                <a href="definitions-def-library.html">Definitions.DefLibrary</a>
                <a href="definitions-def-table-attribute.html">Definitions.DefTableAttribute</a>
                <a href="definitions-directional-light-def.html">Definitions.DirectionalLightDef</a>
                <a href="definitions-game-object-def.html">Definitions.GameObjectDef</a>
                <a href="definitions-light-def.html">Definitions.LightDef</a>
                <a href="definitions-material-def.html">Definitions.MaterialDef</a>
                <a href="definitions-mesh-renderer-def.html">Definitions.MeshRendererDef</a>
                <a href="definitions-physics-body-def.html">Definitions.PhysicsBodyDef</a>
                <a href="definitions-point-light-def.html">Definitions.PointLightDef</a>
                <a href="definitions-render-texture-data.html">Definitions.RenderTextureData</a>
                <a href="definitions-renderer-def.html">Definitions.RendererDef</a>
                <a href="definitions-rigid-body-def.html">Definitions.RigidBodyDef</a>
                <a href="definitions-skeleton-animator-def.html">Definitions.SkeletonAnimatorDef</a>
                <a href="definitions-skeleton-clip-animation-controller-def.html">Definitions.SkeletonClipAnimationControllerDef</a>
                <a href="definitions-skinned-mesh-renderer-def.html">Definitions.SkinnedMeshRendererDef</a>
                <a href="definitions-sphere-collision-shape-def.html">Definitions.SphereCollisionShapeDef</a>
                <a href="definitions-spot-light-def.html">Definitions.SpotLightDef</a>
                <a href="definitions-texture-input.html">Definitions.TextureInput</a>
                <a href="definitions-trigger-body-def.html">Definitions.TriggerBodyDef</a>
            </div>`;
    }
}

customElements.define('icarian-engine-manual-sidebar', IcarianEngineManualSidebar);