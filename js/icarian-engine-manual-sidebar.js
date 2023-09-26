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
                <a href="maths-color.html">Maths.Color</a>
                <a href="maths-mathf.html">Maths.Mathf</a>
                <a href="maths-matrix4.html">Maths.Matrix4</a>
                <a href="maths-quaternion.html">Maths.Quaternion</a>
                <a href="maths-vector2.html">Maths.Vector2</a>
                <a href="maths-vector3.html">Maths.Vector3</a>
                <a href="maths-vector4.html">Maths.Vector4</a>
                <a href="mod-assembly-control.html">Mod.AssemblyControl</a>
                <a href="mod-icarian-assembly.html">Mod.IcarianAssembly</a>
                <a href="mod-icarian-assembly-info.html">Mod.IcarianAssemblyInfo</a>
                <a href="mod-mod-control.html">Mod.ModControl</a>
                <a href="physics-collision-data.html">Physics.CollisionData</a>
                <a href="physics-force-mode.html">Physics.ForceMode</a>
                <a href="physics-physics.html">Physics.Physics</a>
                <a href="physics-physics-body.html">Physics.PhysicsBody</a>
                <a href="physics-raycast-result.html">Physics.RaycastResult</a>
                <a href="physics-rigid-body.html">Physics.RigidBody</a>
                <a href="physics-trigger-body.html">Physics.TriggerBody</a>
                <a href="physics-shapes-box-collision-shape.html">Physics.Shapes.BoxCollisionShape</a>
                <a href="physics-shapes-capsule-collision-shape.html">Physics.Shapes.CapsuleCollisionShape</a>
                <a href="physics-shapes-collision-shape.html">Physics.Shapes.CollisionShape</a>
                <a href="physics-shapes-cylinder-collision-shape.html">Physics.Shapes.CylinderCollisionShape</a>
                <a href="physics-shapes-sphere-collision-shape.html">Physics.Shapes.SphereCollisionShape</a>
                <a href="rendering-camera.html">Rendering.Camera</a>
                <a href="rendering-cull-mode.html">Rendering.CullMode</a>
                <a href="rendering-default-render-pipeline.html">Rendering.DefaultRenderPipeline</a>
                <a href="rendering-depth-render-texture.html">Rendering.DepthRenderTexture</a>
                <a href="rendering-irender-texture.html">Rendering.IRenderTexture</a>
                <a href="rendering-material.html">Rendering.Material</a>
                <a href="rendering-mesh-renderer.html">Rendering.MeshRenderer</a>
                <a href="rendering-model.html">Rendering.Model</a>
                <a href="rendering-multi-render-texture.html">Rendering.MultiRenderTexture</a>
                <a href="rendering-pixel-shader.html">Rendering.PixelShader</a>
                <a href="rendering-primitive-mode.html">Rendering.PrimitiveMode</a>
                <a href="rendering-render-command.html">Rendering.RenderCommand</a>
                <a href="rendering-renderer.html">Rendering.Renderer</a>
                <a href="rendering-render-pipeline.html">Rendering.RenderPipeline</a>
                <a href="rendering-render-texture.html">Rendering.RenderTexture</a>
                <a href="rendering-shader-buffer-input.html">Rendering.ShaderBufferInput</a>
                <a href="rendering-shader-buffer-type.html">Rendering.ShaderBufferType</a>
                <a href="rendering-shader-slot.html">Rendering.ShaderSlot</a>
                <a href="rendering-skinned-vertex.html">Rendering.SkinnedVertex</a>
                <a href="rendering-texture.html">Rendering.Texture</a>
                <a href="rendering-texture-sampler.html">Rendering.TextureSampler</a>
                <a href="rendering-vertex-input-attribute.html">Rendering.VertexInputAttribute</a>
                <a href="rendering-vertex.html">Rendering.Vertex</a>
                <a href="rendering-vertex-shader.html">Rendering.VertexShader</a>
                <a href="rendering-vertex-type.html">Rendering.VertexType</a>
                <a href="rendering-viewport.html">Rendering.Viewport</a>
                <a href="rendering-animation-animation-clip.html">Rendering.Animation.AnimationClip</a>
                <a href="rendering-animation-animation-controller.html">Rendering.Animation.AnimationController</a>
                <a href="rendering-animation-animation-field.html">Rendering.Animation.AnimationField</a>
                <a href="rendering-animation-animation-key.html">Rendering.Animation.AnimationKey</a>
                <a href="rendering-animation-animation-update-mode.html">Rendering.Animation.AnimationUpdateMode</a>
                <a href="rendering-animation-animator.html">Rendering.Animation.Animator</a>
                <a href="rendering-animation-bone.html">Rendering.Animation.Bone</a>
                <a href="rendering-animation-skeleton.html">Rendering.Animation.Skeleton</a>
                <a href="rendering-animation-skeleton-animator.html">Rendering.Animation.SkeletonAnimator</a>
                <a href="rendering-animation-skeleton-clip-animation-controller.html">Rendering.Animation.SkeletonClipAnimationController</a>
                <a href="rendering-animation-skinned-mesh-renderer.html">Rendering.Animation.SkinnedMeshRenderer</a>
            </div>`;
    }
}

customElements.define('icarian-engine-manual-sidebar', IcarianEngineManualSidebar);