var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Resizing window

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  
})

//Famous Yellow Cube

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);


//Slick Silver Sphere
/*
var geometry = new THREE.SphereGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xc0c0c0 });
var mesh = new THREE.Mesh(geometry, material);
*/

scene.add(mesh);

//Light

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

var light2 = new THREE.PointLight(0xFFFFFF, 1, 500);
light2.position.set(-10, 0, 25);
scene.add(light2);


//Render
var render = function() {
  requestAnimationFrame(render);

  mesh.rotation.y += 0.01;
  mesh.rotation.x+=0.005;
  renderer.render(scene, camera);

}

render();
