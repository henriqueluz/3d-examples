var width = height = 600;
var container = document.getElementById("container");

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.shadowMapEnabled = true;
var fov = 45;
var aspect = container.clientWidth / container.clientHeight;
var cameraNear = 0.1;
var cameraFar = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, cameraNear, cameraFar);
var RED = 0xff0000;
var GREEN = 0x00ff00;
var WHITE = 0xffffff;
var BLUE = 0x0000ff;
var YELLOW = 0x00ffff;
var SILVER = 0xcccccc;
var BLACK = 0x000000;
var LIGHT_YELLOW = 0xeeeedd;

var intersected;
var selected;
var offset = new THREE.Vector3();

var coordX = document.getElementById("coordX");
var coordY = document.getElementById("coordY");


var bedGeometry = new THREE.BoxGeometry(100, 100, 100);
var bedMaterial = new THREE.MeshBasicMaterial({wireframe: true});
var bedMesh = new THREE.Mesh(bedGeometry, bedMaterial);
var BED = new THREE.BoxHelper(bedMesh);
BED.material.color = BLACK;

var plane = new THREE.Mesh(
		new THREE.PlaneBufferGeometry( 100, 100, 8, 8 ),
		new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.25, transparent: true, side: THREE.DoubleSide})
	);
var angle = 90*Math.PI/180;
plane.position.set(0, -50, 0);
plane.rotation.set(angle, 0, 0);
