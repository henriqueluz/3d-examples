var width = height = 500;
var container = document.getElementById("container");
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var fov = 45;
var aspect = window.innerWidth / window.innerHeight;
var cameraNear = 0.1;
var cameraFar = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, cameraNear, cameraFar);
var RED = 0xff0000;
var GREEN = 0x00ff00;
var WHITE = 0xffffff;
var BLUE = 0x0000ff;
