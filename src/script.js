// import './style.css'
import * as THREE from 'three'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
//use  --->npm run dev   (to run it)



var camera, scene, renderer, goal, cube, keys, canvas,follow;

var dir = new THREE.Vector3;
var a = new THREE.Vector3;
var b = new THREE.Vector3;
var distance = 0.3;
var velocity = 0.0;
var speed = 0.0;

camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(-.6, .5, 0);
camera.rotateY=Math.PI/2;



scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const plight=new THREE.PointLight(0xffffff,2,100);
plight.position.y=8;
scene.add( plight );

const loader = new GLTFLoader();



cube = new THREE.Group();

let mixer;
let mixer1;


//cycle model final wali
loader.load("/models/final_cycle/scene.gltf", function (gltf) {
  cube.add(gltf.scene);
  gltf.scene.scale.set(0.005, 0.005, 0.005)
  mixer = new THREE.AnimationMixer(gltf.scene);
  const action = mixer.clipAction(gltf.animations[0]);
  action.play(); //method hai in clipAction
  gltf.scene.rotation.y = -Math.PI / 2;
})

loader.load("/models/man_sitting/scene.gltf", function (gltf) {
  cube.add(gltf.scene);
  gltf.scene.scale.set(0.04, 0.04, 0.04)
  mixer1 = new THREE.AnimationMixer(gltf.scene);
  const action = mixer1.clipAction(gltf.animations[0]);
  action.play(); //method hai in clipAction
  gltf.scene.position.y = .05
  gltf.scene.position.z = -.07
})
scene.add(cube);





////    BUILDINGS LOADING    //////

//       orion         //
loader.load("/models/orion.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.06, 0.06, 0.04)
  gltf.scene.position.x = 15.3
  gltf.scene.position.z = 24
  gltf.scene.position.y = .75
})



///ojas
loader.load("/models/ojas1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.25, 0.25, 0.3)
  gltf.scene.position.x = 39
  gltf.scene.position.z = 31.5
  gltf.scene.rotation.y = Math.PI / 2
})


///Placemnet and traininig cell
loader.load("/models/training&placement.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.2, 0.1)
  gltf.scene.position.x = -1.4
  gltf.scene.position.z = 24
  gltf.scene.rotation.y = -Math.PI / 2*2
  
})


///Placemnet and traininig cell opalnamed type buidling
loader.load("/models/opalnamed.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.2, 0.06)
  gltf.scene.position.x = .6
  gltf.scene.position.z = 25.8
  // gltf.scene.rotation.y = -Math.PI / 2
})



//Lyceum
loader.load("/models/lyceum.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.3, 0.3, 0.15)
  gltf.scene.position.x = -20
  gltf.scene.position.z = 24
  gltf.scene.rotation.y = Math.PI / 2
})


//civil department
loader.load("/models/civil.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.18, 0.3, 0.18)
  gltf.scene.position.x = -20
  gltf.scene.position.z = 16
  // gltf.scene.rotation.y = Math.PI / 2
})


//CSE Department
loader.load("/models/cse.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.28, 0.3, 0.1)
  gltf.scene.position.x = -24
  gltf.scene.position.z = 21.8
  gltf.scene.rotation.y = -Math.PI / 2
})


//Lecture hall complex
loader.load("/models/LECTURE.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.14, 0.2, 0.08)
  gltf.scene.position.x = -2.5
  gltf.scene.position.z = 32.5
  gltf.scene.rotation.y = -Math.PI / 2
})


//ICE
loader.load("/models/ICE.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.18, 0.15)
  gltf.scene.position.x = -24
  gltf.scene.position.z = 33
  // gltf.scene.rotation.y = Math.PI / 2
  
})



//Architecture
loader.load("/models/architecture.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.18, 0.22, 0.18)
  gltf.scene.position.x = 27
  gltf.scene.position.z = 25.5
  gltf.scene.rotation.y = -Math.PI / 2
})


//mig 23
loader.load("/models/jet.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.5, 0.5, 0.5)
  gltf.scene.position.x = 22.1
  gltf.scene.position.z = 18.8
  gltf.scene.position.y = .2
  gltf.scene.rotation.y = -Math.PI / 2*1.5
})

// base
loader.load("/models/jetplatform.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.1)
  gltf.scene.position.x = 24
  gltf.scene.position.z = 17.5
  gltf.scene.rotation.y = -Math.PI / 2*1.5
})


//Golden jublie
loader.load("/models/goldenjubileev1.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(1, .5, 1.5)
  gltf.scene.position.x = 18
  gltf.scene.position.z = 38
  gltf.scene.rotation.y = Math.PI / 2*2
  
})


//landmark//
loader.load("/models/landmark.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.08, 0.12)
  gltf.scene.position.x = -.1
  gltf.scene.position.z = -2.7
})


//basket
loader.load("/models/basket.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.08, 0.12)
  gltf.scene.position.x = -15
  gltf.scene.position.z = 2
  gltf.scene.position.y = -.06
  gltf.scene.rotation.y = Math.PI / 2
})

//library
loader.load("/models/library.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.04, 0.07, 0.05)
  gltf.scene.position.x = -23.2
  gltf.scene.position.z = 1
  gltf.scene.rotation.y = Math.PI / 2
})




//tanks miyawaki ke right me 
loader.load("/models/tank.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.2, 0.6, 0.3)
  gltf.scene.position.x = 5
  gltf.scene.position.z = 30
})

loader.load("/models/tank.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.2, 0.6, 0.3)
  gltf.scene.position.x = 6.5
  gltf.scene.position.z = 30
})

loader.load("/models/tank.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.2, 0.6, 0.3)
  gltf.scene.position.x = 5
  gltf.scene.position.z = 28.5
})

loader.load("/models/tank.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.2, 0.6, 0.3)
  gltf.scene.position.x = 6.5
  gltf.scene.position.z = 27.5
})


//Octagon computer center
loader.load("/models/thirdeye.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.15, 0.25, 0.18)
  gltf.scene.position.x = -6.7
  gltf.scene.position.z = 35.5
})


//Octagon csg
loader.load("/models/octagonstar.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.055, 0.16, 0.06)
  gltf.scene.position.x = -6.7
  gltf.scene.position.z = 29.5
  gltf.scene.rotation.y  = Math.PI / 2*2.5
})


//Production engineering department
loader.load("/models/prodandeng.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.12, 0.28, 0.12)
  gltf.scene.position.x = -13.2
  gltf.scene.position.z = 32.5
})

///---------------------------------------------------------------------------------///
///Powder Metallurgy
loader.load("/models/bluepowder.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.12, 0.3, 0.15)
  gltf.scene.position.x = -13.2
  gltf.scene.position.z = 28
})


//Automobile lab
loader.load("/models/orangepowder.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.12, 0.3, 0.15)
  gltf.scene.position.x = -5.8
  gltf.scene.position.z = 17.3
  // gltf.scene.rotation.y = Math.PI / 2*4
})



//Electrical and electronics
loader.load("/models/electrical.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.3, 0.2)
  gltf.scene.position.x = -5.72-1
  gltf.scene.position.z = 11.4
  // gltf.scene.rotation.y = Math.PI / 2*2
})


//MEchanical and metallurgical department
loader.load("/models/mmd.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.3, 0.2)
  gltf.scene.position.x = -11.2-.7
  gltf.scene.position.z = 12
  // gltf.scene.rotation.y = Math.PI / 2*2
})

//Department of mechanical
loader.load("/models/mechanical.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.3, 0.14)
  gltf.scene.position.x = -10.45
  gltf.scene.position.z = 17.5
  gltf.scene.rotation.y = Math.PI / 2*2
})


//DOMS
loader.load("/models/doms.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.15, 0.25, 0.18)
  gltf.scene.position.x = -17.85
  gltf.scene.position.z = 34.5
  gltf.scene.rotation.y = Math.PI / 2
})


//Silver jubliee
loader.load("/models/silver.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.12, 0.19, 0.12)
  gltf.scene.position.x = -21.1
  gltf.scene.position.z = 31
  gltf.scene.rotation.y = Math.PI / 2
})



///nitt power house ke right
loader.load("/models/BLUETIN1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -9.7
  gltf.scene.position.z = 25
  // gltf.scene.rotation.y = Math.PI / 2
})

loader.load("/models/BLUETIN1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -9.7
  gltf.scene.position.z = 22
  // gltf.scene.rotation.y = Math.PI / 2
})

loader.load("/models/BLUETIN1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -11.9
  gltf.scene.position.z = 23.5
  // gltf.scene.rotation.y = Math.PI / 2
})

loader.load("/models/BLUETIN1.glb", function (gltf) {
   scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -11.9
  gltf.scene.position.z = 20.5
  // gltf.scene.rotation.y = Math.PI / 2
})

loader.load("/models/BLUETIN1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -14.1
  gltf.scene.position.z = 17.5
  // gltf.scene.rotation.y = Math.PI / 2
})

loader.load("/models/BLUETIN1.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.21, 0.25, 0.21)
  gltf.scene.position.x = -8.1
  gltf.scene.position.z = 17.5
  // gltf.scene.rotation.y = Math.PI / 2
})






//      admin        //
loader.load("/models/admin.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.02, 0.08, 0.025)
  gltf.scene.position.x = .2
  gltf.scene.position.z = 16
  gltf.scene.rotation.y = -Math.PI / 2
})




//hostel jade type
loader.load("/models/jadehostel.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.14)
  gltf.scene.position.x = -23
  gltf.scene.position.z = 52
  gltf.scene.rotation.y = -Math.PI / 2
})



//Bru stall wali
loader.load("/models/emerald.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.17)
  gltf.scene.position.x = -15
  gltf.scene.position.z = 52
  gltf.scene.rotation.y = -Math.PI / 2
})


//Vinayak tea stall wali or sara foods ke left 
loader.load("/models/lapis.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.13)
  gltf.scene.position.x = -2.4
  gltf.scene.position.z = 57
  gltf.scene.rotation.y = -Math.PI / 2
})



//Bru stall ke left  wali
loader.load("/models/diamond.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.17)
  gltf.scene.position.x = -4
  gltf.scene.position.z = 52
  gltf.scene.rotation.y = -Math.PI / 2
})

//Overhead water tank  wali
loader.load("/models/sapphire.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.16)
  gltf.scene.position.x = -4
  gltf.scene.position.z = 65.5
  gltf.scene.rotation.y = -Math.PI / 2
})



//Sultan stall or topaz cycle parking  wali
loader.load("/models/topaznamed.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.10)
  gltf.scene.position.x = -12.15
  gltf.scene.position.z = 64
  gltf.scene.rotation.y = -Math.PI / 2
})




//Zicron A
loader.load("/models/zicronA.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.10)
  gltf.scene.position.x = -17.6
  gltf.scene.position.z = 64.8
  gltf.scene.rotation.y = -Math.PI / 2
})


//Zicron B
loader.load("/models/zicronB.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.10)
  gltf.scene.position.x = -17.9
  gltf.scene.position.z = 70
  gltf.scene.rotation.y = -Math.PI / 2
})


//Zicron C

loader.load("/models/zicronCglb.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.09)
  gltf.scene.position.x = -12
  gltf.scene.position.z = 70
  gltf.scene.rotation.y = -Math.PI / 2
})



//Cricket ground ke right me kumara guru foods ke right me 3 zicron buildings

loader.load("/models/AQUAmarine.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.17)
  gltf.scene.position.x = -25.5
  gltf.scene.position.z = 76
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/AQUAmarine.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.17)
  gltf.scene.position.x = -25.5
  gltf.scene.position.z = 83
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/jasper.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.17)
  gltf.scene.position.x = -25.5
  gltf.scene.position.z = 87.5
  gltf.scene.rotation.y = -Math.PI / 2
})



//Annpurna ke right me or cricket ground ke left me
loader.load("/models/amber.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.13)
  gltf.scene.position.x = -3.8
  gltf.scene.position.z = 83
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/amber.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.13)
  gltf.scene.position.x = -3.8
  gltf.scene.position.z = 87.5
  gltf.scene.rotation.y = -Math.PI / 2
})




//Garnet A
loader.load("/models/garnetA.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.21, 0.08)
  gltf.scene.position.x = 9
  gltf.scene.position.z = 45.5
  gltf.scene.rotation.y = -Math.PI / 2
})


//Garnet B

loader.load("/models/garnetB.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.21, 0.08)
  gltf.scene.position.x = 9
  gltf.scene.position.z = 52
  gltf.scene.rotation.y = -Math.PI / 2
})


//Garnet C

loader.load("/models/garnetC.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.21, 0.07)
  gltf.scene.position.x = 2
  gltf.scene.position.z = 54
  gltf.scene.rotation.y = -Math.PI / 2
})





//PWD office wali
loader.load("/models/ruby.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.23)
  gltf.scene.position.x = -19
  gltf.scene.position.z = 57
  gltf.scene.rotation.y = -Math.PI / 2
})

//Sara foods wali
loader.load("/models/pearl.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.17)
  gltf.scene.position.x = -9.1
  gltf.scene.position.z = 57
  gltf.scene.rotation.y = -Math.PI / 2
})


//lassi shop wali or tasty chat khazana
loader.load("/models/coral.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.19)
  gltf.scene.position.x = -11
  gltf.scene.position.z = 42
  gltf.scene.rotation.y = -Math.PI / 2
})

//Sj foods wali
loader.load("/models/agate.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.17)
  gltf.scene.position.x = -.4
  gltf.scene.position.z = 44
  gltf.scene.rotation.y = -Math.PI / 2
})



//long hostel 3 connected
loader.load("/models/long_hostel.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.17, 0.25, 0.22)
  gltf.scene.position.x = -21.7
  gltf.scene.position.z = 42
  gltf.scene.rotation.y = -Math.PI / 2
})


//Opalnamed street no 21 ke just upar wala box staff quaters ke side me

//128 road ke niche wali do buildings
loader.load("/models/opalnamed.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.07, 0.25, 0.06)
  gltf.scene.position.x = -44.8
  gltf.scene.position.z = .5
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/opalnamed.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.08, 0.25, 0.1)
  gltf.scene.position.x = -40
  gltf.scene.position.z = 0
  gltf.scene.rotation.y = -Math.PI / 2
})




//Parking ke niche do buildings
loader.load("/models/opalnamed.glb", function (gltf) {
  
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.08, 0.25, 0.09)
  gltf.scene.position.x = -42
  gltf.scene.position.z = -5
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/opalnamed.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.08, 0.25, 0.09)
  gltf.scene.position.x = -49
  gltf.scene.position.z = -5
  gltf.scene.rotation.y = -Math.PI / 2
})



//vertical wali white
loader.load("/models/opalnamed.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.08, 0.25, 0.14)
  gltf.scene.position.x = -52
  gltf.scene.position.z = .5
})



///staff hordings
loader.load("/models/staffbanner.glb", function (gltf) {

  scene.add(gltf.scene)
  gltf.scene.scale.set(0.08, 0.25, 0.14)
  gltf.scene.position.x = -27
  gltf.scene.position.z = 18.5
  gltf.scene.rotation.y = -Math.PI / 2*2
})


//Opalnamed street no 21 ke just upar wala box staff quaters ke side me


let zn227,zn228,zn229;

///   Chemical     ////
loader.load("/models/chemical.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.2, 0.3, 0.3)
  gltf.scene.position.x = 8.5
  gltf.scene.position.z = 15
})


///     Hospital     ///
loader.load("/models/hospital.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.3, 0.45, 0.22)
  gltf.scene.position.x = -29
  gltf.scene.position.z = 45
  gltf.scene.rotation.y = Math.PI / 2
})



//   New guest house   ///
loader.load("/models/newguest.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.15, 0.2, 0.1)
  gltf.scene.position.x = -33.3
  gltf.scene.position.z = -20
  gltf.scene.rotation.y = Math.PI / 2
})



///direction board
loader.load("/models/orionroad.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 5.5
  gltf.scene.rotation.y = Math.PI / 2*2
})

loader.load("/models/libdir.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -.8
  gltf.scene.position.z = 5.5
  gltf.scene.rotation.y = Math.PI / 2*2
})

loader.load("/models/csedep.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -.8
  gltf.scene.position.z = 13
  gltf.scene.rotation.y = Math.PI / 2*2
})

loader.load("/models/goldendir.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = 4.5
  gltf.scene.position.z = 14.5
  gltf.scene.rotation.y = Math.PI / 2*2
})

loader.load("/models/girlsdir.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -1.5
  gltf.scene.position.z = 6.4
  gltf.scene.rotation.y = Math.PI / 2*2
})




//// posters promotoin ////

loader.load("/models/amplifire.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -.8
  gltf.scene.position.z = -.5
  gltf.scene.rotation.y = -Math.PI / 2*2.5
})

loader.load("/models/bugbounty.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -.8
  gltf.scene.position.z = 1
  gltf.scene.rotation.y = -Math.PI / 2*2.5
})

loader.load("/models/scavenger.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -.8
  gltf.scene.position.z = 2.5
  gltf.scene.rotation.y = -Math.PI / 2*2.5
})

loader.load("/models/reelcrunch.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 3.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/scrimmage.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 4.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/nitt verse.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 6.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/dub.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 7.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/checkx.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 8.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})


loader.load("/models/eliminator.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 9.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/codathon.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 11.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/webathon.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = .8
  gltf.scene.position.z = 12.5
  gltf.scene.rotation.y = Math.PI / 2*2.5
})






loader.load("/models/scavenger.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = 18
  gltf.scene.position.z = 16
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/reelcrunch.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = 14
  gltf.scene.position.z = 16
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/amplifire.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -21
  gltf.scene.position.z = -6
  gltf.scene.rotation.y = -Math.PI / 2*2.5
})

loader.load("/models/bugbounty.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -24
  gltf.scene.position.z = -6
  gltf.scene.rotation.y = -Math.PI / 2*2.5
})


loader.load("/models/scrimmage.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = 8.5
  gltf.scene.position.z = 27
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/nitt verse.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -7
  gltf.scene.position.z = 51.2
  gltf.scene.rotation.y = Math.PI / 2*2.5
})

////BUILDINGS LOADING  //////






/// Winners Announcement /////
loader.load("/models/amplifirew.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -17
  gltf.scene.position.z = 18
  // gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/bugbountyw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -22.5
  gltf.scene.position.z = 18
  // gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/checkxw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -18
  gltf.scene.position.z = 19
  // gltf.scene.rotation.y = Math.PI / 2*2.5
})


loader.load("/models/codathonw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -25.2
  gltf.scene.position.z = 19
  // gltf.scene.rotation.y = Math.PI / 2*2.5
})

loader.load("/models/dubverw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -20.5
  gltf.scene.position.z = 21.5
 
})

loader.load("/models/eliminatorw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -19
  gltf.scene.position.z = 20
})

loader.load("/models/reelcrunchw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -23
  gltf.scene.position.z = 20
})
loader.load("/models/scavnegew.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -24.5
  gltf.scene.position.z = 20
})

loader.load("/models/scrimmagew.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -20
  gltf.scene.position.z = 20
})

loader.load("/models/webathonw.glb", function (gltf) {
  scene.add(gltf.scene)
  gltf.scene.scale.set(0.1, 0.1, 0.05)
  gltf.scene.position.x = -21
  gltf.scene.position.z = 19
 
})



/// Winners Announcement /////









////                          working on trees                   //////




// main entrance ke just left wali line (main road)


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=3
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=0
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=-2
})


// security office or public toilet wale box me 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=5
gltf.scene.position.z=5.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=5
gltf.scene.position.z=4.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=5.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6.5
gltf.scene.position.z=5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=6
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=10
gltf.scene.position.z=7.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=11
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=12
gltf.scene.position.z=8.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=8.9
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=15
gltf.scene.position.z=9.7
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=16
gltf.scene.position.z=10.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=10.5
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=19
gltf.scene.position.z=11.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=20
gltf.scene.position.z=11.8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=12.2
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=22
gltf.scene.position.z=12.75
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=23
gltf.scene.position.z=13.1
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=25
gltf.scene.position.z=14.4
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=27
gltf.scene.position.z=15.4
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=28
gltf.scene.position.z=15.8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=30
gltf.scene.position.z=16.6
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=31
gltf.scene.position.z=17
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=33
gltf.scene.position.z=17.8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=34
gltf.scene.position.z=18.3
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=36
gltf.scene.position.z=19.3
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=38
gltf.scene.position.z=20.4
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=40
gltf.scene.position.z=21.4
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=41
gltf.scene.position.z=21.8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=42
gltf.scene.position.z=22.2
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=44
gltf.scene.position.z=23.2
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=24
gltf.scene.rotation.y=Math.PI/4*1.2
})

////ojas wale box me niche ki side///

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=18.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=34
gltf.scene.position.z=19.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=36
gltf.scene.position.z=20.3
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=37
gltf.scene.position.z=20.9
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=39
gltf.scene.position.z=22
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=41
gltf.scene.position.z=22.8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=42
gltf.scene.position.z=23.4
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=43
gltf.scene.position.z=24
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=44.7
gltf.scene.position.z=24.7
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=25.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

///upar     ojas ke niche wali line  me//




// ojas ke left side me bhar ki side ////

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=26.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=27.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=28.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=29.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=30.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=31.1
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=33.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=34.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=35.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=36.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=37.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=38.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=39.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=40.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=41.1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=46
gltf.scene.position.z=42.1
})


// upar ojas me left bhar//





// Architecture Building left me stright line///
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=19.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=20.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=21.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=23.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=24.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=25.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=26.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=28.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=29.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=30.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=31.5
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=33.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=34.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=35.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=37
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=32
gltf.scene.position.z=38
})

//upar Architecture Building left me stright line///






///  Miyawaki forest///

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=20
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=19
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=18
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=16
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=15
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=14
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=31
})


//2nd line forest
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=20
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=19
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=18
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=16
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=15
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=14
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=30
})

//forest right side 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=29
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=28
})



//Forest left side
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=29
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=28
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=27
})

///  Miyawaki forest///




//Jublie below//

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=23
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=22
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=20
gltf.scene.position.z=33
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=18
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=16
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=15
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=14
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=11
gltf.scene.position.z=33
})

//upar Jublie below//


//cycle parking jublie ke niche //// 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=11
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=10
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=9
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=31
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=29
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=28
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=27
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=26
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=25.5
})






loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=27
gltf.scene.rotation.y=Math.PI/2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=5.5
gltf.scene.position.z=27
gltf.scene.rotation.y=Math.PI/2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6.5
gltf.scene.position.z=27
gltf.scene.rotation.y=Math.PI/2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=.2
gltf.scene.position.z=32
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=11
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=30
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=28
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=27
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=33
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=34
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=31
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=30
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=29
})




//upar cycle parking jublie ke niche //// 




///chemical department me niche//

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=10
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=13.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=16
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4.5
gltf.scene.position.z=20
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=6.7
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=13
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=12
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=13
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=12
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=13
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=16
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=19
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=21
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=7.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=8
gltf.scene.position.z=20
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=10
gltf.scene.position.z=8.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=10
gltf.scene.position.z=20
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=10
gltf.scene.position.z=21.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=11
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

//   upar chemical department me niche ki line me //


//Chemistry department ke niche
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=7.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=21.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=38
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=37
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=36
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=28
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=28.8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=32
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.8
gltf.scene.position.z=33
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.3
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.9
gltf.scene.position.z=32
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.9
gltf.scene.position.z=34
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.9
gltf.scene.position.z=30
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.9
gltf.scene.position.z=28
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.8
gltf.scene.position.z=28
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.4
gltf.scene.position.z=36
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.4
gltf.scene.position.z=34
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.4
gltf.scene.position.z=32
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.4
gltf.scene.position.z=29
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.4
gltf.scene.position.z=27.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

//bluetin me tree left to right 
loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.4
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-7.4
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12.5
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.9
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-20
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.4
gltf.scene.position.z=26.5
gltf.scene.rotation.y=Math.PI/4*1.2
})





loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=36
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=34
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=32
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=29
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=27.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=26.4
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=24.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=21
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=18
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=15
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=12
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.6
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.6
gltf.scene.position.z=12.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.6
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.6
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.6
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.6
gltf.scene.position.z=12.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.6
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.6
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.6
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=13.2
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=15.2
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-20.5
gltf.scene.position.z=15.2
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.5
gltf.scene.position.z=17
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.2
gltf.scene.position.z=21.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6
gltf.scene.position.z=19.2
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8
gltf.scene.position.z=19.2
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6
gltf.scene.position.z=21.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8
gltf.scene.position.z=21.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6
gltf.scene.position.z=14
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-11
gltf.scene.position.z=14
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=16
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-7.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-7.5
gltf.scene.position.z=9.5
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.8
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.4
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.5
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-28.5
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-32.8
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-34.5
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-41.5
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-44
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-46
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-49
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-53
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


//deploy fully right 
loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=37.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=35.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=32.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=30.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=28.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=26.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=24.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=21.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=18.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=16.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=12.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54.5
gltf.scene.position.z=9.1
gltf.scene.rotation.y=Math.PI/4*1.2
})



///hostel jade tree vegetation 
loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=51
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.5
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.5
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-13
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})
loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24
gltf.scene.position.z=53
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12.5
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24
gltf.scene.position.z=55.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=58
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12.5
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24
gltf.scene.position.z=60
gltf.scene.rotation.y=Math.PI/4*1.2
})





loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=62
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=65
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=68
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=71
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=73
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=76
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=79
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=82
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=85
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=88
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=92
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.5
gltf.scene.position.z=94
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-5.5
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-7
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-9.5
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.5
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19.5
gltf.scene.position.z=93
gltf.scene.rotation.y=Math.PI/4*1.2
})

/////




loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=35.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=32.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=30.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=28.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=26.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=24.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=21.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=18.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=16.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=12.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){
  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42.5
gltf.scene.position.z=9.1
gltf.scene.rotation.y=Math.PI/4*1.2
})







loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.6
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.3
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.8
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.4
gltf.scene.position.z=40
gltf.scene.rotation.y=Math.PI/4*1.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.6
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=42
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=44
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=44
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14
gltf.scene.position.z=44
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=46
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.6
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.3
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14
gltf.scene.position.z=46.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=48
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-.6
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.8
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.8
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.4
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.3
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.8
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.4
gltf.scene.position.z=49.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3.5
gltf.scene.position.z=51
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=22.8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=7.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=12
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=13.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=19
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2.5
gltf.scene.position.z=21
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=7.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=12
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=13.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1.5
gltf.scene.position.z=20
gltf.scene.rotation.y=Math.PI/4*1.2
})



//admin building rigtht me niche tree

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=6.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=19.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=7.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=12.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1
gltf.scene.position.z=13.8
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=6.6
gltf.scene.rotation.y=-Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=7.6
gltf.scene.rotation.y=-Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=20
gltf.scene.rotation.y=-Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=8
gltf.scene.rotation.y=-Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=11
gltf.scene.rotation.y=-Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=12
gltf.scene.rotation.y=-Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.5
gltf.scene.position.z=13.5
gltf.scene.rotation.y=-Math.PI/4*1.2
})





//upar Chemistry department ke niche



///orion //
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=13
gltf.scene.position.z=9.9
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=14
gltf.scene.position.z=10.3
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=15
gltf.scene.position.z=10.7
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=11.7
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=18
gltf.scene.position.z=12.1
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=19
gltf.scene.position.z=12.5
gltf.scene.rotation.y=Math.PI/4*1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=13.5
gltf.scene.rotation.y=Math.PI/4*1.2
})
///  upar orion niche wali line me   ///




// security office ke around

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=1
gltf.scene.rotation.y=-Math.PI/2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=1
gltf.scene.rotation.y=-Math.PI/2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4
gltf.scene.position.z=2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4
gltf.scene.position.z=3
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4
gltf.scene.position.z=4
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4
gltf.scene.position.z=5
})



// playground ke just left wali line or main entrance ke right me 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=1
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=3
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=4
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=5
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=-1
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=-2
})

// playground ke just left wali line or main entrance ke right me 






// playground box me or just  upar wali line  

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.5
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-2.4
gltf.scene.position.z=5.2
})







loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-4.5
gltf.scene.position.z=5.2
})






loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6.2
gltf.scene.position.z=5.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-9.2
gltf.scene.position.z=5.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.7
gltf.scene.position.z=5.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12.2
gltf.scene.position.z=4.6
})

// playground box me or just  upar wali line  






// playground wale box me right me perpendicular tree wali line 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12.2
gltf.scene.position.z=3.6
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-12
gltf.scene.position.z=2.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-11.7
gltf.scene.position.z=.6
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-11.6
gltf.scene.position.z=-.6
})
// playground wale box me right me perpendicular tree wali line 






// playgorund just right me 3 tree angle se rotate 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.3
gltf.scene.position.z=2.5
gltf.scene.rotation.y=Math.PI/4
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-9.9
gltf.scene.position.z=3.2
gltf.scene.rotation.y=Math.PI/4
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x=-9.5
  gltf.scene.position.z=3.9
  gltf.scene.rotation.y=Math.PI/4
})
// playgorund just right me 3 tree angle se rotate 







///Playground ke niche ki side wale tree two parallel lines me

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.2
gltf.scene.position.z=-7
gltf.scene.rotation.y=-Math.PI/2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-10.2
gltf.scene.position.z=-7.5
gltf.scene.rotation.y=-Math.PI/2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-9.7
gltf.scene.position.z=-7.5
gltf.scene.rotation.y=-Math.PI/2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.7
gltf.scene.position.z=-7
gltf.scene.rotation.y=-Math.PI/2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-8.7
gltf.scene.position.z=-7.5
gltf.scene.rotation.y=Math.PI/2
})
///Playground ke niche ki side wale tree two parallel lines me








// Swimmning or library wale me upar wali line 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-13.1
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-13.4
gltf.scene.position.z=5.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.2
gltf.scene.position.z=5.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.7
gltf.scene.position.z=5.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.2
gltf.scene.position.z=5.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19.2
gltf.scene.position.z=5.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-20.2
gltf.scene.position.z=5.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-20.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.1
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.4
gltf.scene.position.z=5.2
})


// NITT fitness centre library swimming pool wale box me top wali line





// Library  ke left me biccyle parking circle

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.4
gltf.scene.position.z=4.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.4
gltf.scene.position.z=3.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.4
gltf.scene.position.z=1.2
})
//library ke left me



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.7
gltf.scene.position.z=3.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-22.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-22.2
gltf.scene.position.z=3.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-22.7
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-22.7
gltf.scene.position.z=3.2
})


// Library  ke left me biccyle parking circle






// Library  ke right me biccyle parking circle

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=9.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=8.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=6.7
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=3.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=2.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.2
gltf.scene.position.z=1.2
})







loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=9.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=7.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=6.7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=4.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=3.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=2.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-24.7
gltf.scene.position.z=1.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=9.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=7.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=6.7
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=4.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=3.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.2
gltf.scene.position.z=2.2
})



// Library le right me cicle ke right biccycle parking 






//khokho court ke niche wali building 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14.7
gltf.scene.position.z=-7
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.2
gltf.scene.position.z=-7
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.7
gltf.scene.position.z=-7
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.2
gltf.scene.position.z=-7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.2
gltf.scene.position.z=-7
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.7
gltf.scene.position.z=-7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.7
gltf.scene.position.z=-7
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14.2
gltf.scene.position.z=-6.5
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-13.2
gltf.scene.position.z=-6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-14.7
gltf.scene.position.z=-4.5
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.7
gltf.scene.position.z=-4.5
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.2
gltf.scene.position.z=-4.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.7
gltf.scene.position.z=-4.5
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.7
gltf.scene.position.z=-4.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.2
gltf.scene.position.z=-4.5
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.7
gltf.scene.position.z=-4.5
})





// khokho court ke niche wali building 






// m_road21 ke left se long straight line top to bottom 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=74.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=71.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=69.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=67.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=65.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=62.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=60.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=58.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=56.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=53.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=51.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=48.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=46.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=44.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=42.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=40.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=38.7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=36.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=34.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=32.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=29.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=26.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=24.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=22.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=20.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=18.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=16.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=14.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=12.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=10.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=8.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=6.7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=4.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=2.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-2.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-4.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-6.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-8.2
})






loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21.7
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19.7
gltf.scene.position.z=-11.2
gltf.scene.position.y=-Math.PI/2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19.7
gltf.scene.position.z=-8.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-18.7
gltf.scene.position.z=-9.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17.7
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16.7
gltf.scene.position.z=-9.7
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-15.7
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-12.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-14.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25.7
gltf.scene.position.z=-16.2
})



// m_road21 ke left se long straight line top to bottom  (upar wali)






// Streets me vegetation 

// straight line left me long 

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=46.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=44.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=42.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=40.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=38.7
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=36.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=34.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=32.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=29.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=26.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=23.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=22.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=19.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=18.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=15.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=14.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=12.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=10.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=7.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=4.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=2.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-2.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-4.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-6.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-8.2
})
// upar,    straight line left me long







// straight line right me long

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=31.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=28.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=24.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=22.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=19.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=17.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=14.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=12.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=9.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=5.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=2.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=-2.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=-6.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.6
gltf.scene.position.z=-8.2
})

// upar,     straight line right me long




// 14 street 2 row buildings vegetation 

// above wali 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =29.65
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -27.5
  gltf.scene.position.z =29.65
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z = 29.65
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =29.65
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =29.65
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =29.65
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 29.65
  gltf.scene.rotation.y = -Math.PI / 2
})




// below wali
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =27.35
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = 28.35
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =27.35
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  28.35
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 27.35
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 28.35
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =27.35
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =28.35
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =27.35
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 28.35
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 27.35
  gltf.scene.rotation.y = -Math.PI / 2
})






// 12 street 2 row buildings vegetation 

// above wali 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z = 23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =  23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 23.9
  // gltf.scene.rotation.y = -Math.PI / 2
})




//below wali
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z =  21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 22.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = 21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =22.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 21.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

//12



// 11 street 2 row buildings vegetation 

// above wali 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z = 19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = 19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 19.9
  // gltf.scene.rotation.y = -Math.PI / 2
})




//below wali
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =17.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z =  16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 17.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =  16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =17.8
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 16.8
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 17.8
  // gltf.scene.rotation.y = -Math.PI / 2
})



// 11 street 2 row buildings vegetation 









// 10 street 2 row buildings vegetation 

// above wali 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = 14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =  14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =14.9
  // gltf.scene.rotation.y = -Math.PI / 2
})




//below wali
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =11.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -27.5
  gltf.scene.position.z =  11.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = 12.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z =  11.9
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =  12.9
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 11.9
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 12.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 11.9
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 12.9
  // gltf.scene.rotation.y = -Math.PI / 2
})


// 10 street 2 row buildings vegetation 






// 9 street 2 row buildings vegetation 

// above wali 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =  11.1
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  11.1
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =   11.1
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =   11.1
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =  11.1
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =  11.1
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 11.1
  gltf.scene.rotation.y = -Math.PI / 2
})




//below wali
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =  8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  9.6
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =   8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =  8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =    8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =  8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 8.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

// 9 street 2 row buildings vegetation 



//8 th streeet niche


//2 row me niche ki side 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =  6.4
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  6.4
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z =  6.4
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =  7.4-.2
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =  6.4
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =  7.4-.2
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =   6.4
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 7.4-.2
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -35.5
  gltf.scene.position.z = 6.4
  gltf.scene.rotation.y = -Math.PI / 2
})
//2 row me niche ki side 




//2 row me upar ki side 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =  7.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  7.7
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =   7.7
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z =  7.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =    7.7
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z =  7.7
  gltf.scene.rotation.y = -Math.PI / 2
})


//2 row me upar ki side 


//8 th streeet niche 





//7 th streeet niche 

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z =  3.3
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  3.3
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z =  4.3
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =  3.3
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z =  4.3
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = 3.3
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z =  3.3
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z =  3.3
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 3.3
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 4.3
  // gltf.scene.rotation.y = -Math.PI / 2
})


//7 th streeet niche 






//6 th streeet niche 

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = 1.3
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = 1.3
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z =1.3
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = 2.3
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 1.3
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = 2.3
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 1.3
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = 2.3
  // gltf.scene.rotation.y = -Math.PI / 2
})



//6 th streeet niche 






//5 th streeet niche 

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = -.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = .7-.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = -.7
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = .7-.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z = -.7
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = .7-.6
  // gltf.scene.rotation.y = -Math.PI / 2
})



//5 th streeet niche 





//4 th streeet niche 

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = -2.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -2.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -1.7
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -2.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -1.7
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = -2.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = -1.7
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = -2.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = -1.7
  // gltf.scene.rotation.y = -Math.PI / 2
})


//4 th streeet niche 



//3rd street me vegetation building wali row ke niche long line

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -3.7
  // gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -3.7
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = -3.7
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = -3.7
  // gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -37.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -38.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -40.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})




loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -42.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -44.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -46.5
  gltf.scene.position.z =-4.7
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -48.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -50.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -52.5
  gltf.scene.position.z = -4.7
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -55.5
  gltf.scene.position.z =-4.3
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -57.5
  gltf.scene.position.z = -4.3
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -59.5
  gltf.scene.position.z = -4.3
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -61.5
  gltf.scene.position.z = -4.3
  gltf.scene.rotation.y = -Math.PI / 2
})



//upar ,     3rd street me vegetation building wali row ke niche long line





//2nd street me vegetation building wali row ke niche long line

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -26.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -28.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -30.5
  gltf.scene.position.z = -6.28+.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -32.5
  gltf.scene.position.z = -6.28+.6
  // gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -33.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.5
  gltf.scene.position.z = -6.28+.6
  // gltf.scene.rotation.y = -Math.PI / 2  
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -37.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -39.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -41.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})




loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -43.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -45.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -47.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -49.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -51.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -53.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -56.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -58.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -60.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})

loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -64.5
  gltf.scene.position.z = -7.28+.6
  gltf.scene.rotation.y = -Math.PI / 2
})



//2nd street me vegetation building wali row ke niche long line 







//1st street me vegetation building wali row ke niche

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-28.3
gltf.scene.position.z=-9.3
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-30.3
gltf.scene.position.z=-9.3
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-32.3
gltf.scene.position.z=-9.3
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-34.3
gltf.scene.position.z=-9.3
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.3
gltf.scene.position.z=-9.3
})



// Upar,      Streets me vegetation  









// Director residence wale box me//

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-11.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-27.3
gltf.scene.position.z=-11.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-28.3
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-29.3
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-12.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-27.3
gltf.scene.position.z=-12.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-28.3
gltf.scene.position.z=-12.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-29.3
gltf.scene.position.z=-12.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.8
gltf.scene.position.z=-13.2
})








loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-14.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-29.3
gltf.scene.position.z=-14.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.8
gltf.scene.position.z=-14.8
})







loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-26.4
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-27.3
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-28.3
gltf.scene.position.z=-15.6
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-29.3
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-30.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-31.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-32.3
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-33.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-34.3
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-35.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-36.3
gltf.scene.position.z=-15.6
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-38.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-39.3
gltf.scene.position.z=-15.6
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-40.3
gltf.scene.position.z=-15.6
})


//Director residence wale box me//


// Fully Bhar ki side straight line opalnamed ke right side me lane no. 21 ke just upar wali 


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = -6.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = -4.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = -2.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = -.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = 2.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.5
  gltf.scene.position.z = 4.28
})


// Fully Bhar ki side straight line opalnamed ke right side me lane no. 21 ke just upar wali




// Fully Bhar ki side straight line opalnamed ke right side me 
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 6.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x =-62.5
  gltf.scene.position.z = 8.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 10.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 12.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 14.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 16.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 18.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 20.28
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 22.28
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -62.5
  gltf.scene.position.z = 24.28
})


// Fully Bhar ki side straight line opalnamed ke right side me 





// 1st street//






// Nit trichy Hindu Temple//



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-31.3
gltf.scene.position.z=-11
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-33.3
gltf.scene.position.z=-11
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-35.3
gltf.scene.position.z=-11
})





// //right me 



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42
gltf.scene.position.z=-11.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-44
gltf.scene.position.z=-11.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-46
gltf.scene.position.z=-11.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-48
gltf.scene.position.z=-11.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-50
gltf.scene.position.z=-11.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-52
gltf.scene.position.z=-11.2
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54
gltf.scene.position.z=-11.2
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-57
gltf.scene.position.z=-11.2
})











loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-37.6
gltf.scene.position.z=-13
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42
gltf.scene.position.z=-13
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-44
gltf.scene.position.z=-13
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-47
gltf.scene.position.z=-13
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-49
gltf.scene.position.z=-13
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-51
gltf.scene.position.z=-13
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-54
gltf.scene.position.z=-13
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-55
gltf.scene.position.z=-13
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-57
gltf.scene.position.z=-13
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-42
gltf.scene.position.z=-10.65
})





loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-46
gltf.scene.position.z=-10.65
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-47
gltf.scene.position.z=-10.65
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-49
gltf.scene.position.z=-10.65
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-50
gltf.scene.position.z=-10.65
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-52
gltf.scene.position.z=-10.65
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-53
gltf.scene.position.z=-10.65
})




loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-55
gltf.scene.position.z=-10.65
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-56
gltf.scene.position.z=-10.65
})


//Nit trichy Hindu Temple//









// Lane no 6
loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -27.2
  gltf.scene.position.z = 5.2
})





loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -29.2
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -31.2
  gltf.scene.position.z = 5.2
})




loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -34.2
  gltf.scene.position.z = 5.2
})





loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -36.2
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -37.7
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -40.7
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -43.7
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -44.7
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -46.7
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -48.7
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -50.7
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -53.7
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -54.7
  gltf.scene.position.z = 5.2
})




loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -57.2
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -58.2
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -60.2
  gltf.scene.position.z = 5.2
})




loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -63.2
  gltf.scene.position.z = 5.2
})



loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -65.2
  gltf.scene.position.z = 5.2
})


loader.load("/models/t.glb", function (gltf) {

  scene.add(gltf.scene);
  gltf.scene.scale.set(0.008,0.007,0.004)
  gltf.scene.position.x = -66.2
  gltf.scene.position.z = 5.2
})


// Lane no 6 upar //





//// Main road tree high way entrance gate
loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=1
gltf.scene.position.z=-2.2
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-1.2
gltf.scene.position.z=-3.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=2
gltf.scene.position.z=-1.9
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=3
gltf.scene.position.z=-1.3
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=4
gltf.scene.position.z=-.7
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=5
gltf.scene.position.z=-.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-5
gltf.scene.position.z=-5.8
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=6
gltf.scene.position.z=.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-6
gltf.scene.position.z=-6.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=7
gltf.scene.position.z=1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-7
gltf.scene.position.z=-6.9
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=16
gltf.scene.position.z=6.4
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-16
gltf.scene.position.z=-11.9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=17
gltf.scene.position.z=7
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-17
gltf.scene.position.z=-12.5
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=19
gltf.scene.position.z=8.2
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-19
gltf.scene.position.z=-13.7
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=21
gltf.scene.position.z=9.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-21
gltf.scene.position.z=-14.8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=23
gltf.scene.position.z=10.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-23
gltf.scene.position.z=-15.6
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=25
gltf.scene.position.z=11
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-25
gltf.scene.position.z=-16.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=27
gltf.scene.position.z=12.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-27
gltf.scene.position.z=-17.8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=29
gltf.scene.position.z=13.5
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-29
gltf.scene.position.z=-19
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=31
gltf.scene.position.z=14.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-31
gltf.scene.position.z=-19.8
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=33
gltf.scene.position.z=15.6
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-33
gltf.scene.position.z=-21.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=35
gltf.scene.position.z=16.7
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-35
gltf.scene.position.z=-22.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=37
gltf.scene.position.z=17.7
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-37
gltf.scene.position.z=-23.5
gltf.scene.rotation.y=Math.PI/4*1.2
})



loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=39
gltf.scene.position.z=18.9
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-39
gltf.scene.position.z=-24.7
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=41
gltf.scene.position.z=20.1
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-41
gltf.scene.position.z=-25.9
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=43
gltf.scene.position.z=21.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-43
gltf.scene.position.z=-27.1
gltf.scene.rotation.y=Math.PI/4*1.2
})


loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=45
gltf.scene.position.z=22.3
gltf.scene.rotation.y=Math.PI/4*1.2
})

loader.load("/models/t.glb", function(gltf){

  scene.add(gltf.scene);
gltf.scene.scale.set(0.008,0.007,0.004)
gltf.scene.position.x=-45
gltf.scene.position.z=-28.1
gltf.scene.rotation.y=Math.PI/4*1.2
})












const texture = new THREE.TextureLoader();

const roadtexture = texture.load('/texture/grass/5.jpg');
const ptexture = texture.load('/texture/grass/4.jpg');
// ise check karna hai repeated pattren ko
roadtexture.repeat.set(60, 60);
roadtexture.wrapS = THREE.RepeatWrapping;
roadtexture.wrapT = THREE.RepeatWrapping;
roadtexture.magFilter = THREE.LinearFilter;

ptexture.repeat.set(4, 4);
ptexture.wrapS = THREE.RepeatWrapping;
ptexture.wrapT = THREE.RepeatWrapping;

const roadt = texture.load('/texture/roads/9.jpg');
roadt.wrapS = THREE.RepeatWrapping;
roadt.wrapT = THREE.RepeatWrapping;
roadt.repeat.set(2, 2);

var material = new THREE.MeshNormalMaterial();

const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(5, 5),
  new THREE.MeshBasicMaterial({
    map: roadtexture
  })
);
floor.rotateX(-Math.PI / 2);

// !!!!!!!!!!!!!!!!!!!!!!  working on roads    !!!!!!!!!!!!!!!!!!!!!!!!!!!!     ////
var mat = new THREE.MeshBasicMaterial({
  map: roadt
});

var main_road1 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.6, 100),
  mat
);
main_road1.rotateX(-Math.PI / 2)
main_road1.position.z = -4 + .1;
main_road1.position.y = .001;
main_road1.rotateZ((Math.PI / 4) * 1.35);

var main_road2 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.6, 100),
  mat
);
main_road2.rotateX(-Math.PI / 2)
main_road2.position.z = -4.62;
main_road2.position.y = .001;
main_road2.rotateZ((Math.PI / 4) * 1.35)

var side_road1 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.4, 100),
  mat
);
side_road1.rotateX(-Math.PI / 2)
side_road1.rotateZ((Math.PI / 4) * 1.35)
side_road1.position.z = -3.50 + .18;
side_road1.position.y = .001;

var side_road2 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.4, 100),
  mat
);
side_road2.rotateX(-Math.PI / 2)
side_road2.rotateZ((Math.PI / 4) * 1.35)
side_road2.position.z = -5.2;
side_road2.position.y = .001;


const circle = new THREE.Mesh(
  new THREE.CircleBufferGeometry(.9, 32),
  mat
);
circle.rotateX(-Math.PI / 2)
circle.position.y = .0005;
circle.position.z = -2.5;

var m_road1 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road1.rotateX(-Math.PI / 2)
m_road1.position.z = 2.1;
m_road1.position.x = .4;
m_road1.position.y = .0003;

var m_road2 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road2.rotateX(-Math.PI / 2)
m_road2.position.z = 2.1;
m_road2.position.x = -.4;
m_road2.position.y = .0003;

var m_road3 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 45.4),
  mat
);
m_road3.rotateX(-Math.PI / 2)
m_road3.rotateZ(-Math.PI / 2)
m_road3.position.z = 6.1;
m_road3.position.x = -16.7;
m_road3.position.y = .0005;

const circle2 = new THREE.Mesh(
  new THREE.CircleBufferGeometry(.8, 26),
  mat
);
circle2.rotateX(-Math.PI / 2)
circle2.position.y = .001;
circle2.position.z = 6.6;

const pground = new THREE.Mesh(
  new THREE.CircleBufferGeometry(4, 32),
  new THREE.MeshBasicMaterial({
    map: ptexture
  })
);
pground.rotateX(-Math.PI / 2)
pground.position.y = .001;
pground.position.z = 0.6;
pground.position.x = -6;

scene.add(pground);

var m_road4 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road4.rotateX(-Math.PI / 2);
m_road4.position.z = 10;
m_road4.position.x = .4;
m_road4.position.y = .0004;

var m_road5 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road5.rotateX(-Math.PI / 2)
m_road5.position.z = 10;
m_road5.position.x = -.4;
m_road5.position.y = .0004;

var m_road6 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 49.5),
  mat
);
m_road6.rotateX(-Math.PI / 2)
m_road6.position.z = 9.5 + 21.5;
m_road6.position.x = 4;
m_road6.position.y = .0003;

var m_road7 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 44.4),
  mat
);
m_road7.rotateX(-Math.PI / 2)
m_road7.position.z = 9.5 + 19.05;
m_road7.position.x = -4;
m_road7.position.y = .0003;

var m_road8 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.1),
  mat
);
m_road8.rotateX(-Math.PI / 2)
m_road8.rotateZ(-Math.PI / 2)
m_road8.position.x = 2.2;
m_road8.position.z = 10;
m_road8.position.y = .001;

var m_road9 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.1),
  mat
);
m_road9.rotateX(-Math.PI / 2)
m_road9.rotateZ(-Math.PI / 2)
m_road9.position.x = -2.2;
m_road9.position.z = 10;
m_road9.position.y = .001;

const circle3 = new THREE.Mesh(
  new THREE.CircleBufferGeometry(.7, 32),
  mat
);
circle3.rotateX(-Math.PI / 2)
circle3.position.y = .0009;
circle3.position.z = 14;

var m_road10 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.1),
  mat
);
m_road10.rotateX(-Math.PI / 2)
m_road10.rotateZ(-Math.PI / 2)
m_road10.position.x = -2.2;
m_road10.position.z = 18;
m_road10.position.y = .0001;

var m_road11 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 21),
  mat
);
m_road11.rotateX(-Math.PI / 2)
m_road11.position.z = 28.25;
m_road11.position.x = -.4;
m_road11.position.y = .001;

var m_road12 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 25.1 + 11),
  mat
);
m_road12.rotateX(-Math.PI / 2)
m_road12.rotateZ(-Math.PI / 2)
m_road12.position.x = -17.2 - 1.5;
m_road12.position.z = 27;
m_road12.position.y = .0014;

var m_road13 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 89.5),
  mat
);
m_road13.rotateX(-Math.PI / 2)
m_road13.rotateZ(-Math.PI / 2)
m_road13.position.z = 37.5;
m_road13.position.x = -41;
m_road13.position.y = .0015;

var m_road14 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4),
  mat
);
m_road14.rotateX(-Math.PI / 2)
m_road14.rotateZ(-Math.PI / 2)
m_road14.position.z = 28;
m_road14.position.x = 1.8;
m_road14.position.y = .0002;

var m_road15 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road15.rotateX(-Math.PI / 2)
m_road15.position.z = 25.25;
m_road15.position.x = 2;
m_road15.position.y = .00004;

var m_road16 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.44),
  mat
);
m_road16.rotateX(-Math.PI / 2)
m_road16.rotateZ(-Math.PI / 2)
m_road16.position.x = 1;
m_road16.position.z = 23;
m_road16.position.y = .000005;

var m_road17 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.6),
  mat
);
m_road17.rotateX(-Math.PI / 2)
m_road17.rotateZ(-Math.PI / 2)
m_road17.position.x = 3;
m_road17.position.z = 26;
m_road17.position.y = .000005;

var m_road18 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.6 + 26),
  mat
);
m_road18.rotateX(-Math.PI / 2)
m_road18.rotateZ(-Math.PI / 2)
m_road18.position.z = 50.5;
m_road18.position.x = -8.95;
m_road18.position.y = .0015;

var m_road19 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 60),
  mat
);
m_road19.rotateX(-Math.PI / 2)
m_road19.rotateZ((Math.PI / 4) * 1.45)
m_road19.position.z = 18.6;
m_road19.position.x = 33;
m_road19.position.y = .0002;

var m_road20 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 44.4),
  mat
);
m_road20.rotateX(-Math.PI / 2)
m_road20.position.z = 9.5 + 19.05;
m_road20.position.x = -16;
m_road20.position.y = .001;

var m_road21 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 88.75),
  mat
);
m_road21.rotateX(-Math.PI / 2)
m_road21.position.z = 10 + 18.02;
m_road21.position.x = -26;
m_road21.position.y = .001;

var m_road22 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 13.5),
  mat
);
m_road22.rotateX(-Math.PI / 2)
m_road22.rotateZ(-119.5);
m_road22.position.z = -.6;
m_road22.position.x = -12;
m_road22.position.y = .0001;

var m_road23 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5.8),
  mat
);
m_road23.rotateX(-Math.PI / 2)
m_road23.rotateZ(Math.PI / 2 * .6);
m_road23.position.z = -8.9;
m_road23.position.x = -13.3;
m_road23.position.y = .00001;

var m_road24 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 23),
  mat
);
m_road24.rotateX(-Math.PI / 2)
m_road24.rotateZ(-Math.PI / 2)
m_road24.position.z = -10.5;
m_road24.position.x = -27;
m_road24.position.y = .0001;

var m_road25 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 46),
  mat
);
m_road25.rotateX(-Math.PI / 2)
m_road25.rotateZ(-Math.PI / 2)
m_road25.position.z = -7;
m_road25.position.x = -49;
m_road25.position.y = .00001;

var m_road26 = new THREE.Mesh( //12 ke right me thoda upar
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
);
m_road26.rotateX(-Math.PI / 2)
m_road26.rotateZ(-Math.PI / 2)
m_road26.position.z = 30;
m_road26.position.x = -31.5;
m_road26.position.y = .0001;

var m_road27 = new THREE.Mesh( //26 ke side me right 
  new THREE.PlaneBufferGeometry(.5, 43.5),
  mat
);
m_road27.rotateX(-Math.PI / 2)
m_road27.position.z = 8.4;
m_road27.position.x = -37;
m_road27.position.y = .001;

var m_road28 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 55),
  mat
);
m_road28.rotateX(-Math.PI / 2)
m_road28.position.z = 19.5;
m_road28.position.x = -55;
m_road28.position.y = .001;

var m_road29 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.8 + 21),
  mat
);
m_road29.rotateX(-Math.PI / 2)
m_road29.rotateZ(-Math.PI / 2)
m_road29.position.z = 8;
m_road29.position.x = -40.5;
m_road29.position.y = .0001;

var m_road30 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.8 + 21),
  mat
);
m_road30.rotateX(-Math.PI / 2)
m_road30.rotateZ(-Math.PI / 2)
m_road30.position.z = 25;
m_road30.position.x = -40.5;
m_road30.position.y = .0001;

var m_road31 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.3 + 22.1),
  mat
);
m_road31.rotateX(-Math.PI / 2)
m_road31.position.z = 22.9;
m_road31.position.x = -42;
m_road31.position.y = .001;

var m_road32 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 13.5),
  mat
);
m_road32.rotateX(-Math.PI / 2)
m_road32.position.z = 37;
m_road32.position.x = -31;
m_road32.position.y = .001;

var m_road33 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 10.6),
  mat
);
m_road33.rotateX(-Math.PI / 2)
m_road33.rotateZ(-Math.PI / 2)
m_road33.position.z = 33;
m_road33.position.x = -36.5;
m_road33.position.y = .0005;

var m_road34 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 48),
  mat
);
m_road34.rotateX(-Math.PI / 2)
m_road34.position.z = 71.5;
m_road34.position.y = .0003;

var m_road35 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 40),
  mat
);
m_road35.rotateX(-Math.PI / 2)
m_road35.rotateZ(-Math.PI / 2)
m_road35.position.z = 55;
m_road35.position.x = -20;
m_road35.position.y = .0002;

var m_road36 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 25.5),
  mat
);
m_road36.rotateX(-Math.PI / 2)
m_road36.rotateZ(-Math.PI / 2)
m_road36.position.z = 63;
m_road36.position.x = -13;
m_road36.position.y = .0002;

var m_road37 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 25.5),
  mat
);
m_road37.rotateX(-Math.PI / 2)
m_road37.rotateZ(-Math.PI / 2)
m_road37.position.z = 72.2;
m_road37.position.x = -13;
m_road37.position.y = .001;

var m_road38 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 22.2),
  mat
);
m_road38.rotateX(-Math.PI / 2)
m_road38.rotateZ((-Math.PI / 4) * .09)
m_road38.position.z = 83.45;
m_road38.position.x = -20.5;
m_road38.position.y = .0001;

var m_road39 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 21.5),
  mat
);
m_road39.rotateX(-Math.PI / 2)
m_road39.rotateZ((-Math.PI / 2) * 1.03)
m_road39.position.z = 94.8;
m_road39.position.x = -10.5;
m_road39.position.y = .001;

var m_road40 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
);
m_road40.rotateX(-Math.PI / 2)
m_road40.rotateZ((-Math.PI / 2))
m_road40.position.z = 92;
m_road40.position.x = -24;
m_road40.position.y = .00001;

var m_road41 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 22.4),
  mat
);
m_road41.rotateX(-Math.PI / 2)
m_road41.position.z = 83.47;
m_road41.position.x = -7.5;
m_road41.position.y = .000001;

var m_road42 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 14.5),
  mat
);
m_road42.rotateX(-Math.PI / 2)
m_road42.rotateZ(-Math.PI / 2)
m_road42.position.z = 80.2;
m_road42.position.x = -7;
m_road42.position.y = .00006;

var m_road43 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 17.5),
  mat
);
m_road43.rotateX(-Math.PI / 2)
m_road43.position.z = 71.7;
m_road43.position.x = -14.5;
m_road43.position.y = .00008;

var m_road44 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
);
m_road44.rotateX(-Math.PI / 2)
m_road44.rotateZ((-Math.PI / 2))
m_road44.position.z = 81;
m_road44.position.x = -23.5;
m_road44.position.y = .0001;

var m_road45 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
);
m_road45.rotateX(-Math.PI / 2)
m_road45.position.x = -25.5;
m_road45.position.z = 80;
m_road45.position.y = .00001;

var m_road46 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road46.rotateX(-Math.PI / 2)
m_road46.rotateZ((-Math.PI / 2))
m_road46.position.z = 69;
m_road46.position.x = -15;
m_road46.position.y = .00000001;

var m_road47 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7),
  mat
);
m_road47.rotateX(-Math.PI / 2)
m_road47.rotateZ((-Math.PI / 2))
m_road47.position.z = 67.5;
m_road47.position.x = -14;
m_road47.position.y = .0000001;

var m_road48 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2),
  mat
);
m_road48.rotateX(-Math.PI / 2)
m_road48.position.x = -17.6;
m_road48.position.z = 68.25;
m_road48.position.y = .001;

var m_road49 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.4),
  mat
);
m_road49.rotateX(-Math.PI / 2)
m_road49.rotateZ((-Math.PI / 4) * .3)
m_road49.position.x = -10.25;
m_road49.position.z = 67.07;
m_road49.position.y = .0001;

var m_road50 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5.8),
  mat
);
m_road50.rotateX(-Math.PI / 2)
m_road50.rotateZ((Math.PI / 4) * .09)
m_road50.position.z = 69.4;
m_road50.position.x = -7.7;
m_road50.position.y = .000001;

var m_road51 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.74),
  mat
);
m_road51.rotateX(-Math.PI / 2)
m_road51.rotateZ((-Math.PI / 2))
m_road51.position.x = -9;
m_road51.position.z = 66.3;
m_road51.position.y = .001;

var m_road52 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.74),
  mat
);
m_road52.rotateX(-Math.PI / 2)
m_road52.rotateZ((-Math.PI / 2))
m_road52.position.x = -9;
m_road52.position.z = 65;
m_road52.position.y = .001;


var m_road53 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road53.rotateX(-Math.PI / 2)
m_road53.position.z = 64;
m_road53.position.x = -7.9;
m_road53.position.y = .000001;

var m_road54 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road54.rotateX(-Math.PI / 2)
m_road54.position.z = 64;
m_road54.position.x = -10.15;
m_road54.position.y = .000001;

var m_road55 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.74),
  mat
);
m_road55.rotateX(-Math.PI / 2)
m_road55.rotateZ((-Math.PI / 2))
m_road55.position.x = -9;
m_road55.position.z = 61.5;
m_road55.position.y = .001;

var m_road56 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.8),
  mat
);
m_road56.rotateX(-Math.PI / 2)
m_road56.position.x = -6.8;
m_road56.position.z = 62;
m_road56.position.y = .00002;

var m_road57 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.6),
  mat
);
m_road57.rotateX(-Math.PI / 2)
m_road57.rotateZ((-Math.PI / 2))
m_road57.position.x = -6.25;
m_road57.position.z = 61;
m_road57.position.y = .001;

var m_road58 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6.5),
  mat
);
m_road58.rotateX(-Math.PI / 2)
m_road58.position.x = -5.2;
m_road58.position.z = 58;
m_road58.position.y = .00002;

var m_road59 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
);
m_road59.rotateX(-Math.PI / 2)
m_road59.position.x = -9.7;
m_road59.position.z = 56;
m_road59.position.y = .00002;

var m_road60 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4.5),
  mat
);
m_road60.rotateX(-Math.PI / 2)
m_road60.position.x = -20;
m_road60.position.z = 52.5;
m_road60.position.y = .00002;

var m_road61 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.6),
  mat
);
m_road61.rotateX(-Math.PI / 2)
m_road61.rotateZ((-Math.PI / 2))
m_road61.position.x = -9;
m_road61.position.z = 53.4;
m_road61.position.y = .000002;

var m_road62 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
);
m_road62.rotateX(-Math.PI / 2)
m_road62.rotateZ((-Math.PI / 2))
m_road62.position.x = -7;
m_road62.position.z = 44;
m_road62.position.y = .000002;

var m_road63 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6.1),
  mat
);
m_road63.rotateX(-Math.PI / 2)
m_road63.rotateZ((-Math.PI / 4) * .09)
m_road63.position.x = -7;
m_road63.position.z = 47.30;
m_road63.position.y = .001;

var m_road64 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 12),
  mat
);
m_road64.rotateX(-Math.PI / 2)
m_road64.position.x = -10;
m_road64.position.z = 33;
m_road64.position.y = .001;

const circle4 = new THREE.Mesh(
  new THREE.RingBufferGeometry(.4, .6, 32),
  mat
);
circle4.rotateX(-Math.PI / 2)
circle4.position.y = .01;
circle4.position.x = -10;
circle4.position.z = 39.5;

var m_road65 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.8),
  mat
);
m_road65.rotateX(-Math.PI / 2)
m_road65.position.x = -11;
m_road65.position.z = 49.5;
m_road65.position.y = .001;


var m_road66 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8.2),
  mat
);
m_road66.rotateX(-Math.PI / 2)
m_road66.position.x = -13;
m_road66.position.z = 59;
m_road66.position.y = .00002;

var m_road67 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4.2),
  mat
);
m_road67.rotateX(-Math.PI / 2)
m_road67.rotateZ((-Math.PI / 4) * .9)
m_road67.position.x = -11;
m_road67.position.z = 53.4;
m_road67.position.y = .000002;

var m_road68 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road68.rotateX(-Math.PI / 2)
m_road68.rotateZ((Math.PI / 4) * 1.2)
m_road68.position.x = -18;
m_road68.position.z = 53.5;
m_road68.position.y = .000002;

var m_road69 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.8),
  mat
);
m_road69.rotateX(-Math.PI / 2)
m_road69.position.x = 2;
m_road69.position.z = 51.5;
m_road69.position.y = .0003;

var m_road70 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4),
  mat
);
m_road70.rotateX(-Math.PI / 2)
m_road70.rotateZ(-Math.PI / 2)
m_road70.position.x = 6;
m_road70.position.z = 47.5;
m_road70.position.y = .00006;

var m_road71 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.5),
  mat
);
m_road71.rotateX(-Math.PI / 2)
m_road71.position.x = 7.8;
m_road71.position.z = 49;
m_road71.position.y = .001;

var m_road72 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 18),
  mat
);
m_road72.rotateX(-Math.PI / 2)
m_road72.rotateZ(-Math.PI / 2)
m_road72.position.x = 13;
m_road72.position.z = 32;
m_road72.position.y = .0002;

var m_road73 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 23.5),
  mat
);
m_road73.rotateX(-Math.PI / 2)
m_road73.position.x = 11.9;
m_road73.position.z = 20.5;
m_road73.position.y = .0001;

var m_road74 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 18.9),
  mat
);
m_road74.rotateX(-Math.PI / 2)
m_road74.position.x = 22;
m_road74.position.z = 22.79;
m_road74.position.y = .0001;


var m_road75 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road75.rotateX(-Math.PI / 2)
m_road75.rotateZ(-Math.PI / 2)
m_road75.position.x = 8;
m_road75.position.z = 25;
m_road75.position.y = .00006;


var m_road76 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road76.rotateX(-Math.PI / 2)
m_road76.rotateZ(-Math.PI / 2)
m_road76.position.x = 8;
m_road76.position.z = 23;
m_road76.position.y = .00006;

var m_road77 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 26),
  mat
);
m_road77.rotateX(-Math.PI / 2)
m_road77.rotateZ((Math.PI / 4) * 1.45)
m_road77.position.z = 37.4;
m_road77.position.x = 33.9;
m_road77.position.y = .0002;

var m_road78 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 18.2),
  mat
);
m_road78.rotateX(-Math.PI / 2)
m_road78.position.x = 33;
m_road78.position.z = 27.75;
m_road78.position.y = .0001;

var m_road79 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3),
  mat
);
m_road79.rotateX(-Math.PI / 2)
m_road79.position.x = 27;
m_road79.position.z = 17.5;
m_road79.position.y = .0001;

var m_road80 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 18.2),
  mat
);
m_road80.rotateX(-Math.PI / 2)
m_road80.position.x = 45.55;
m_road80.position.z = 33.5;
m_road80.position.y = .0001;

var m_road81 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3),
  mat
);
m_road81.rotateX(-Math.PI / 2)
m_road81.position.x = 40;
m_road81.position.z = 23.5;
m_road81.position.y = .0001;

var m_road82 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.5),
  mat
);
m_road82.rotateX(-Math.PI / 2)
m_road82.rotateZ((Math.PI / 4) * 1.2);
m_road82.position.x = 40.5;
m_road82.position.z = 25;
m_road82.position.y = .00004;

var m_road83 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.8),
  mat
);
m_road83.rotateX(-Math.PI / 2)
m_road83.rotateZ(-(Math.PI / 4) * 1.2);
m_road83.position.x = 39.5;
m_road83.position.z = 25;
m_road83.position.y = .00001;

var m_road84 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5.5),
  mat
)
m_road84.rotateX(-Math.PI / 2)
m_road84.position.x = 28;
m_road84.position.z = 37.3;
m_road84.position.y = .000008;

var m_road85 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6.2),
  mat
)
m_road85.rotateX(-Math.PI / 2)
m_road85.position.x = 26;
m_road85.position.z = 37;
m_road85.position.y = .000008;

var m_road86 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.5),
  mat
);
m_road86.rotateX(-Math.PI / 2)
m_road86.rotateZ(-(Math.PI / 4) * 1.8);
m_road86.position.x = 27;
m_road86.position.z = 40;
m_road86.position.y = .001;

var circle5 = new THREE.Mesh(
  new THREE.RingBufferGeometry(1, 1.5, 23, 19, 0, 3), //inner radius,outer radius,thetaSegments,phiSegments,thetaStart,thetaLenght
  mat
);
circle5.rotateX(-Math.PI / 2);
circle5.rotateZ(-Math.PI / 2);
circle5.position.x = 4;
circle5.position.z = 36;
circle5.position.y = .00008;

var m_road87 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2),
  mat
);
m_road87.rotateX(-Math.PI / 2)
m_road87.rotateZ(-Math.PI / 2)
m_road87.position.x = -5;
m_road87.position.z = 28.4;
m_road87.position.y = .0001;

var m_road88 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.7),
  mat
);
m_road88.rotateX(-Math.PI / 2)
m_road88.position.x = -6;
m_road88.position.z = 27.3;
m_road88.position.y = .001;

var m_road89 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.7),
  mat
);
m_road89.rotateX(-Math.PI / 2)
m_road89.position.x = -6;
m_road89.position.z = 7.5;
m_road89.position.y = .0003;

var m_road90 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3),
  mat
);
m_road90.rotateX(-Math.PI / 2)
m_road90.position.x = -11;
m_road90.position.z = 7.75;
m_road90.position.y = .0003;

var circle6 = new THREE.Mesh(
  new THREE.RingBufferGeometry(.7, 1.2, 23, 19, 0, 8),
  mat
);
circle6.rotateX(-Math.PI / 2);
circle6.rotateZ(-Math.PI / 2);
circle6.position.x = -6;
circle6.position.z = 10;
circle6.position.y = .001;

var circle7 = new THREE.Mesh(
  new THREE.RingBufferGeometry(1, 1.5, 23, 19, 0, 8),
  mat
);
circle7.rotateX(-Math.PI / 2);
circle7.rotateZ(-Math.PI / 2);
circle7.position.x = -11;
circle7.position.z = 10.3;
circle7.position.y = .001;

var m_road91 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4.5),
  mat
);
m_road91.rotateX(-Math.PI / 2)
m_road91.rotateZ(-Math.PI / 2)
m_road91.position.x = -6.25;
m_road91.position.z = 13.2;
m_road91.position.y = .0002;

var m_road92 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3),
  mat
);
m_road92.rotateX(-Math.PI / 2)
m_road92.position.x = -8.5;
m_road92.position.z = 13.2;
m_road92.position.y = .0003;

var m_road93 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.8),
  mat
);
m_road93.rotateX(-Math.PI / 2)
m_road93.rotateZ((Math.PI / 4) * 1.1)
m_road93.position.x = -9.2;
m_road93.position.z = 11.3;
m_road93.position.y = .0002;

var m_road94 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.4),
  mat
);
m_road94.rotateX(-Math.PI / 2)
m_road94.rotateZ(-Math.PI / 2)
m_road94.position.x = -14.1;
m_road94.position.z = 10.6;
m_road94.position.y = .0002;

var m_road95 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.2),
  mat
);
m_road95.rotateX(-Math.PI / 2)
m_road95.position.x = -21;
m_road95.position.z = 39.2;
m_road95.position.y = .001;

var m_road96 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.2),
  mat
);
m_road96.rotateX(-Math.PI / 2)
m_road96.rotateZ((-Math.PI / 4) * .15)
m_road96.position.x = -20.6;
m_road96.position.z = 36;
m_road96.position.y = .001;

var circle8 = new THREE.Mesh(
  new THREE.RingBufferGeometry(1, 1.5, 23, 19, 0, 3),
  mat
);
circle8.rotateX(-Math.PI / 2);
circle8.rotateZ(Math.PI / 2);
circle8.position.x = -16;
circle8.position.z = 31;
circle8.position.y = .0001;

var m_road97 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 12),
  mat
);
m_road97.rotateX(-Math.PI / 2)
m_road97.position.x = -22;
m_road97.position.z = 21;
m_road97.position.y = .001;

var m_road98 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4),
  mat
);
m_road98.rotateX(-Math.PI / 2)
m_road98.rotateZ(-Math.PI / 2)
m_road98.position.x = -20;
m_road98.position.z = 26;
m_road98.position.y = .0001;

var m_road99 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7),
  mat
);
m_road99.rotateX(-Math.PI / 2)
m_road99.position.x = -18;
m_road99.position.z = 23.5;
m_road99.position.y = .001;

var m_road100 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.5),
  mat
);
m_road100.rotateX(-Math.PI / 2)
m_road100.rotateZ(-Math.PI / 2)
m_road100.position.x = -21;
m_road100.position.z = 21;
m_road100.position.y = .0001;

var m_road101 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5),
  mat
);
m_road101.rotateX(-Math.PI / 2)
m_road101.position.x = -23.5;
m_road101.position.z = 7;
m_road101.position.y = .0002;

var circle9 = new THREE.Mesh(
  new THREE.RingBufferGeometry(.3, .6, 23, 19, 0, 8),
  mat
);
circle9.rotateX(-Math.PI / 2);
circle9.rotateZ(-Math.PI / 2);
circle9.position.x = -23.5;
circle9.position.z = 4.1;
circle9.position.y = .001;

var m_road102 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.5),
  mat
);
m_road102.rotateX(-Math.PI / 2)
m_road102.position.x = -23.8;
m_road102.position.z = 3;
m_road102.position.y = .0002;

var m_road103 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2.5),
  mat
);
m_road103.rotateX(-Math.PI / 2)
m_road103.position.x = -23.8;
m_road103.position.z = -9;
m_road103.position.y = .001;

var m_road104 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.4),
  mat
);
m_road104.rotateX(-Math.PI / 2)
m_road104.rotateZ(-Math.PI / 2 * .1)
m_road104.position.x = -14;
m_road104.position.z = -8.4;
m_road104.position.y = .001;

var m_road105 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 10.2),
  mat
);
m_road105.rotateX(-Math.PI / 2)
m_road105.rotateZ(-(Math.PI / 2))
m_road105.position.x = -19;
m_road105.position.z = -7.5;
m_road105.position.y = .001;

var m_road106 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4),
  mat
);
m_road106.rotateX(-Math.PI / 2)
m_road106.position.x = -24;
m_road106.position.z = 29;
m_road106.position.y = .0001;

var m_road107 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2),
  mat
);
m_road107.rotateX(-Math.PI / 2)
m_road107.rotateZ(-(Math.PI / 2))
m_road107.position.x = -24.75;
m_road107.position.z = 31;
m_road107.position.y = .001;


var m_road108 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4.8),
  mat
);
m_road108.rotateX(-Math.PI / 2)
m_road108.position.x = -36;
m_road108.position.z = 35.2;
m_road108.position.y = .0001;

var m_road109 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road109.rotateX(-Math.PI / 2)
m_road109.rotateZ(-(Math.PI / 2))
m_road109.position.x = -31.5;
m_road109.position.z = 21;
m_road109.position.y = .0001;

var m_road110 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road110.rotateX(-Math.PI / 2)
m_road110.rotateZ(-(Math.PI / 2))
m_road110.position.x = -31.5;
m_road110.position.z = 16;
m_road110.position.y = .0001;

var m_road111 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road111.rotateX(-Math.PI / 2)
m_road111.rotateZ(-(Math.PI / 2))
m_road111.position.x = -31.5;
m_road111.position.z = 11.5;
m_road111.position.y = .0001;

var m_road112 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
)
m_road112.rotateX(-Math.PI / 2)
m_road112.rotateZ(-(Math.PI / 2))
m_road112.position.x = -46;
m_road112.position.z = 21;
m_road112.position.y = .0001;

var m_road113 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
)
m_road113.rotateX(-Math.PI / 2)
m_road113.rotateZ(-(Math.PI / 2))
m_road113.position.x = -46;
m_road113.position.z = 13.2;
m_road113.position.y = .0001;

var m_road114 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
)
m_road114.rotateX(-Math.PI / 2)
m_road114.rotateZ(-(Math.PI / 2))
m_road114.position.x = -45;
m_road114.position.z = 11.5;
m_road114.position.y = .0001;

var m_road115 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road115.rotateX(-Math.PI / 2)
m_road115.rotateZ(-(Math.PI / 2))
m_road115.position.x = -31.5;
m_road115.position.z = 3;
m_road115.position.y = .0001;

var m_road116 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road116.rotateX(-Math.PI / 2)
m_road116.rotateZ(-(Math.PI / 2))
m_road116.position.x = -31.5;
m_road116.position.z = 1;
m_road116.position.y = .0001;

var m_road117 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road117.rotateX(-Math.PI / 2)
m_road117.rotateZ(-(Math.PI / 2))
m_road117.position.x = -31.5;
m_road117.position.z = -1;
m_road117.position.y = .0001;

var m_road118 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road118.rotateX(-Math.PI / 2)
m_road118.rotateZ(-(Math.PI / 2))
m_road118.position.x = -31.5;
m_road118.position.z = -3;
m_road118.position.y = .0001;

var m_road119 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 11),
  mat
)
m_road119.rotateX(-Math.PI / 2)
m_road119.rotateZ(-(Math.PI / 2))
m_road119.position.x = -31.5;
m_road119.position.z = -5;
m_road119.position.y = .0001;

var m_road120 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.4),
  mat
);
m_road120.rotateX(-Math.PI / 2)
m_road120.rotateZ(-Math.PI / 2)
m_road120.position.x = -26.95;
m_road120.position.z = -9.15;
m_road120.position.y = .001;

var m_road121 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6),
  mat
);
m_road121.rotateX(-Math.PI / 2)
m_road121.rotateZ(-(Math.PI / 2) * 1.1)
m_road121.position.x = -28.7;
m_road121.position.z = -17;
m_road121.position.y = .001;

var m_road122 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 1.4),
  mat
);
m_road122.rotateX(-Math.PI / 2)
m_road122.rotateZ(-Math.PI / 2)
m_road122.position.x = -26.95;
m_road122.position.z = -14.95;
m_road122.position.y = .001;

var m_road123 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 12),
  mat
);
m_road123.rotateX(-Math.PI / 2)
m_road123.rotateZ(-Math.PI / 2)
m_road123.position.x = -42.7;
m_road123.position.z = -13.5;
m_road123.position.y = .001;

var m_road124 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5.5),
  mat
);
m_road124.rotateX(-Math.PI / 2)
m_road124.position.x = -48.5;
m_road124.position.z = -16.5;
m_road124.position.y = .001;

var m_road125 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 8),
  mat
);
m_road125.rotateX(-Math.PI / 2)
m_road125.rotateZ(-Math.PI / 2)
m_road125.position.x = -44.75;
m_road125.position.z = -19.5;
m_road125.position.y = .001;

var m_road126 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 5.5),
  mat
);
m_road126.rotateX(-Math.PI / 2)
m_road126.position.x = -41;
m_road126.position.z = -16.5;
m_road126.position.y = .001;

var m_road127 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.6),
  mat
);
m_road127.rotateX(-Math.PI / 2)
m_road127.position.x = -39.5;
m_road127.position.z = 4.55;
m_road127.position.y = .001;

var m_road128 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.8),
  mat
);
m_road128.rotateX(-Math.PI / 2);
m_road128.rotateZ(-Math.PI / 2);
m_road128.position.x = -43.15;
m_road128.position.z = 2.5;
m_road128.position.y = .001;

var m_road129 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 3.9),
  mat
);
m_road129.rotateX(-Math.PI / 2)
m_road129.position.x = -47.3;
m_road129.position.z = 1.4;
m_road129.position.y = .001;

var m_road130 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2),
  mat
);
m_road130.rotateX(-Math.PI / 2);
m_road130.rotateZ(-Math.PI / 2);
m_road130.position.x = -48.2;
m_road130.position.z = .5;
m_road130.position.y = .0001;

var m_road131 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 4),
  mat
);
m_road131.rotateX(-Math.PI / 2);
m_road131.rotateZ(-Math.PI / 2);
m_road131.position.x = -47;
m_road131.position.z = -.8;
m_road131.position.y = .001;

var m_road132 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 2),
  mat
);
m_road132.rotateX(-Math.PI / 2);
m_road132.position.x = -49.25;
m_road132.position.z = -1.55;
m_road132.position.y = .001;

var m_road133 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 7.7),
  mat
);
m_road133.rotateX(-Math.PI / 2);
m_road133.rotateZ(-Math.PI / 2);
m_road133.position.x = -59.1;
m_road133.position.z = 0;
m_road133.position.y = .001;

var m_road134 = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(.5, 6.7),
  mat
);
m_road134.rotateX(-Math.PI / 2);
m_road134.rotateZ(-Math.PI / 2);
m_road134.position.x = -58.6;
m_road134.position.z = -3.5;
m_road134.position.y = .001;

var base = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(150, 130),
  new THREE.MeshBasicMaterial({
    map: roadtexture
  })
);
base.rotateX(-Math.PI / 2);
base.position.y = -0.02;
base.position.x = -12;

base.position.z = 33;





scene.add(main_road1, circle, main_road2, side_road1, side_road2, m_road1, m_road2, m_road3, circle2, m_road4, m_road5, m_road6, m_road7, m_road8, m_road9, circle3, m_road10, m_road11, m_road12, m_road13, m_road14, m_road15, m_road16, m_road17, m_road18, m_road19, m_road20, m_road21, m_road22, m_road23, m_road24, m_road25, m_road26, m_road27, m_road28, m_road29, m_road30, m_road31, m_road32, m_road33, m_road34, m_road35, m_road36, m_road37, m_road38, m_road39, m_road40, m_road41, m_road42, m_road43, m_road44, m_road45, m_road46, m_road47, m_road48, m_road49, m_road50, m_road51, m_road52, m_road53, m_road54, m_road55, m_road56, m_road57, m_road58, m_road59, m_road60, m_road61, m_road62, m_road63, m_road64, m_road65, m_road66, circle4, m_road67, m_road68, m_road69, m_road70, m_road71,
  m_road72, m_road73, m_road74, m_road75, m_road76, m_road77, m_road78, m_road79, m_road80, m_road81, m_road82, m_road83,
  m_road84, m_road85, m_road86, circle5, m_road87, m_road88, m_road89, m_road90, circle6, circle7, m_road91, m_road92, m_road93,
  m_road94, m_road95, m_road96, circle8, m_road97, m_road98, m_road99, m_road100, m_road101, circle9, m_road102,
  m_road103, m_road104, m_road105, m_road106, m_road107, m_road108, m_road109, m_road110, m_road111, m_road112, m_road113, m_road114, m_road115, m_road116, m_road117, m_road118, m_road119, m_road120, m_road121, m_road122, m_road123,
  m_road124, m_road125, m_road126, m_road127, m_road128, m_road129, m_road130, m_road131, m_road132, m_road133,
  m_road134, base);

// camera.position.set(0, 5, 0);


// !!!!!!!!!!!!!!!!!!!!!!  working on roads    !!!!!!!!!!!!!!!!!!!!!!!!!!!!     ////


goal = new THREE.Object3D;
follow = new THREE.Object3D;
goal.position.z = -distance;
goal.add(camera);
// scene.add(cube);

//original position set it to true after testing
cube.position.x=-.3;
cube.position.z=-3;

// cube.position.x=-18;
// cube.position.z=19;
// cube.rotation.y=Math.PI/2*1.3;




camera.lookAt(cube.position);
camera.lookAt(cube.position.z-3);
camera.lookAt(cube.position.y-.3);



canvas = document.querySelector(".webgl");


renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

keys = {
  a: false,
  s: false,
  d: false,
  w: false
};

let baja=0;let cam=0;
window.addEventListener('keydown', function (e) {
  var key = e.code.replace('Key', '').toLowerCase();
  if (keys[key] !== undefined)
    keys[key] = true;
    if(cam==0)
    {
      camera.position.set(0, .18, 0);
      cam=1;
    }

    if(baja==0)
{
  const listen=new THREE.AudioListener();
camera.add(listen);

const audioload=new THREE.AudioLoader();

const backmusic=new THREE.Audio(listen);

audioload.load("/models/ksh.mp3",function(buffer){
  backmusic.setBuffer(buffer);
  backmusic.setLoop(true);
  backmusic.setVolume(.085);
  backmusic.play();
});
}
    baja=1;

});
window.addEventListener('keyup', function (e) {

  var key = e.code.replace('Key', '').toLowerCase();
  if (keys[key] !== undefined)
    keys[key] = false;
});



const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {

  //Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera 
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update Renderer 
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


function animate() {

  requestAnimationFrame(animate);

  if (keys.w) {
    speed = 0.035;
    if (mixer != null) {
      mixer.update(.01);
    }
    if (mixer1 != null) {
      mixer1.update(.01);
    }
    velocity += ( speed - velocity ) * .3;
    cube.translateZ( velocity );
  }

  else if (keys.s) {
    speed = -0.035;
    if (mixer != null) {
      mixer.update(.01);
    }
    if (mixer1 != null) {
      mixer1.update(.01);
    }
    velocity += ( speed - velocity ) * .3;
    cube.translateZ( velocity );
  }



  if (keys.a)
    cube.rotateY(0.035);
  else if (keys.d)
    cube.rotateY(-0.035);


  a.lerp(cube.position, 0.4);
  b.copy(goal.position);



  dir.copy(a).sub(b).normalize();
  const dis = a.distanceTo(b) - distance;
  goal.position.addScaledVector(dir, dis);



  camera.lookAt(cube.position);
  controls.update();

  renderer.render(scene, camera);

}

animate();