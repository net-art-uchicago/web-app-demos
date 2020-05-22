class Cat {
  constructor (scene) {
    this.mesh
    this.setup(scene)
  }

  setup (scene) {
    const loader = new THREE.GLTFLoader().setPath('models/')
    loader.load('Cat_01(1).gltf', (gltf) => {
      const cat = gltf.scene.children[0]
      const mat = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
      })
      cat.traverse((child) => {
        if (child.isMesh) child.material = mat
      })
      cat.scale.set(0.01, 0.01, 0.01)
      cat.position.z = -3
      this.mesh = cat
      scene.add(cat)
      this.setupEventListener()
    })
  }

  setupEventListener () {
    document.addEventListener('mousemove', (e) => {
      const y = THREE.Math.mapLinear(e.clientX, 0, innerWidth, -0.2, 0.2)
      this.mesh.rotation.y = y
      const x = THREE.Math.mapLinear(e.clientY, 0, innerHeight, -0.2, 0.2)
      this.mesh.rotation.x = x
    })
  }
}
