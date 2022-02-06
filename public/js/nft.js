//Load OBJ
const loader = new THREE.ObjectLoader();

// load a resource
loader.load(
	// resource URL
	'assets/test.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

//NFT Class
class Nft {
  constructor(model) {
    this.model = model;
  }
}


//Functions
let fps = 60;           // fps/seconds
let tau = 2;            // 2 seconds
const step = 1 / (tau * fps);  // step per frame
const finalAngle = Math.PI/2;
const angleStep = finalAngle * step;
let t = 0;

function rotate(t, direction){

  if (t >= 1) return; // Motion ended
  t += step;  // Increment time
  mesh.rotation.y += direction/10; // Increment rotation
  //requestAnimationFrame(() => rotate(t, direction));
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        rotate(0, -1)
    }
    else if(event.keyCode == 39) {
        rotate(0, 1);
    }
    else if(event.keyCode==38){
      mesh.rotation.x-=0.1;
    }
    else if(event.keyCode==40){
      mesh.rotation.x+=0.1;
    }
});

//Three.js

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
var nft=localStorage.getItem("nftName");
var geometry;
if(nft==1){
  geometry = new THREE.BoxGeometry(1, 1, 1);
}else if(nft==2){
  geometry = new THREE.TetrahedronGeometry(1);
  
  
}else{
  alert("not square or pyramid");
}

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


  renderer.render(scene, camera);

}

render();
