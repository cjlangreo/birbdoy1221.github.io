import * as THREE from 'https://cdn.skypack.dev/three@0.132.2'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth - 20, window.innerHeight - 20);
camera.position.setZ(30);

renderer.render(scene, camera);

let shapeColor = 0x00ff00;

const geometry = new THREE.TorusGeometry(12, 5, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: shapeColor, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();