class DancingCube {
  constructor (scene) {
    this.mesh // this will become the cube mesh
    this.d = 1
    this.setup(scene)
  }

  setup (scene) {
    const geo = new THREE.BoxGeometry()
    const mat = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      color: 0xff0000
    })
    this.mesh = new THREE.Mesh(geo, mat)
    scene.add(this.mesh)

    this.mesh.position.z = -3
    this.mesh.rotation.y = Math.PI / 4
    this.mesh.rotation.x = Math.PI / 4
  }

  update () {
    this.mesh.rotation.y += 0.01
    this.mesh.rotation.x += 0.02
    this.mesh.position.x = Math.sin(Date.now() * this.d * 0.0001) * 5.5
    this.mesh.position.y = Math.cos(Date.now() * this.d * 0.0005) * 5.5
  }
}
