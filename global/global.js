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
var intersected;

var bedGeometry = new THREE.BoxGeometry(100, 100, 100);
var bedMaterial = new THREE.MeshBasicMaterial({wireframe: true});
var bedMesh = new THREE.Mesh(bedGeometry, bedMaterial);
var BED = new THREE.BoxHelper(bedMesh);
BED.material.color = BLACK;
