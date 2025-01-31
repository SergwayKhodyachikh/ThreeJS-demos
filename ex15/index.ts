import {
  BoxGeometry,
  Color,
  Geometry,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TorusGeometry,
  Vector3,
  WebGLRenderer
} from 'three';
import { FaceNormalsHelper } from 'three/examples/jsm/helpers/FaceNormalsHelper.js';

let createGeometry = () => {
  let geometry = new Geometry();

  geometry.vertices.push(new Vector3(-3, 0, 0));
  geometry.vertices.push(new Vector3(0, 0, 0));
  geometry.vertices.push(new Vector3());
  geometry.vertices.push(new Vector3());
  geometry.vertices.push(new Vector3());
  geometry.vertices.push(new Vector3());
  geometry.vertices.push(new Vector3());
  geometry.vertices.push(new Vector3());
};

(() => {
  // init
  const scene = new Scene();
  scene.background = new Color(0xffffff);

  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  camera.position.z = 20;

  let geometry = new TorusGeometry(5, 2, 10, 12);

  const material = new MeshBasicMaterial({ color: 0xbbbbbb, wireframe: true });

  const cube = new Mesh(geometry, material);

  scene.add(cube);

  const renderer = new WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  (function mainLoop() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(mainLoop);
  })();
})();
