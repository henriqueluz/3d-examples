function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	
	var cubeGeometry = new THREE.BoxGeometry(8, 8, 8, 4, 4, 4);
	var sphereGeometry = new THREE.SphereGeometry(5, 8, 8);
	var material = new THREE.MeshBasicMaterial({wireframe: true, color: BLUE, });
	var sphereMaterial = new THREE.MeshBasicMaterial({wireframe: true, color: WHITE, });
	var cube = new THREE.Mesh(cubeGeometry, material);
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	
	cube.position.x = -10;
	cube.rotation.x = 5;
	cube.rotation.z = -10;
	sphere.position.x = 10;
	sphere.rotation.z = -10;
	scene.add(cube);
	scene.add(sphere);
	
	camera.position.z = 40;
	renderer.render(scene, camera);
}

