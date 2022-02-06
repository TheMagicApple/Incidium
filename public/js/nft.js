//NFT Class
class Nft {
  constructor(objPath, mtlPath) {
    this.objPath = objPath;
    this.mtlPath = mtlPath;
  }
}
var monke = new Nft("/monke/monke.obj", "/monke/monke.mtl");
var pyramid = new Nft("/pyramid/pyramid.obj", "/monke/monke.mtl");

//Load specific OBJ
var displayNft = Number(localStorage.getItem("nftName")) - 1;
var paths = [monke, pyramid, "lambo", "sphere", "rocket", "duck"];
displayNft = paths[displayNft];


var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/assets/');
mtlLoader.setPath('/assets/');
mtlLoader.load(displayNft.mtlPath, function(materials) {
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('/assets/');
  objLoader.load(displayNft.objPath, function(object) {
    myObj = object;
    scene.add(object);
  })

})




//Functions
let fps = 60;
let tau = 2;            // 2 seconds
const step = 1 / (tau * fps);  // step per frame
let t = 0;

function rotate(t, direction){

  if (t >= 1) return; // Motion ended
  t += step;  // Increment time
  myObj.rotation.y += direction/10; // Increment rotation
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
      myObj.rotation.x-=0.1;
    }
    else if(event.keyCode==40){
      myObj.rotation.x+=0.1;
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

//var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
//ar mesh = new THREE.Mesh(geometry, material);


//Slick Silver Sphere
/*
var geometry = new THREE.SphereGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xc0c0c0 });
var mesh = new THREE.Mesh(geometry, material);
*/

//scene.add(mesh);

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
