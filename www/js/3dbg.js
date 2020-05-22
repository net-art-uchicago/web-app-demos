
let renderer, scene, camera
let controls
let cubes = []
let cat

setup()
draw()

function setup () {
  scene = new THREE.Scene()
  const ar = innerWidth / innerHeight
  camera = new THREE.PerspectiveCamera(75, ar, 0.1, 1000)
  camera.position.z = 3

  const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
  scene.add(light)

  for (let i = 0; i < 10; i++) {
    let cube = new DancingCube(scene)
    cube.d = (i / 100) + 1
    cube.mesh.position.z = -5
    cubes.push(cube)
  }

  cat = new Cat(scene)

  // const geometry = new THREE.PlaneGeometry( 20, 20, 32, 32 )
  // const material = new THREE.MeshBasicMaterial({
  //   color: 0xcccccc,
  //   wireframe: true,
  //   side: THREE.DoubleSide
  // })
  // const plane = new THREE.Mesh( geometry, material )
  // plane.rotation.x = Math.PI / 2
  // scene.add( plane )


  renderer = new THREE.WebGLRenderer({
    alpha: true,
    // preserveDrawingBuffer: true
  })
  // renderer.autoClearColor = false
  renderer.setSize(innerWidth, innerHeight)
  document.body.appendChild(renderer.domElement)

  // controls = new THREE.OrbitControls(camera, renderer.domElement)

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
}

function draw () {
  requestAnimationFrame(draw)

  cubes.forEach(cube => cube.update())

  renderer.render(scene, camera)
}
