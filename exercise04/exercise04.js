function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	var cubeGeometry = new THREE.BoxGeometry(8, 8, 8);
	var sphereGeometry = new THREE.SphereGeometry(5, 8, 8);
	var material = new THREE.MeshPhongMaterial({
		color : GREEN,
	});
	var sphereMaterial = new THREE.MeshPhongMaterial({
		color : RED
	});
	var cube = new THREE.Mesh(cubeGeometry, material);
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	var light = new THREE.SpotLight(0xffff00);

	cube.position.x = -10;
	cube.rotation.x = 5;
	cube.rotation.z = -10;

	sphere.position.x = 10;
	sphere.rotation.z = -10;
	
	light.position.set(-20, 60, 60);

	scene.add(cube);
	scene.add(sphere);
	scene.add(light);

	camera.position.z = 40;
	renderer.render(scene, camera);
}
