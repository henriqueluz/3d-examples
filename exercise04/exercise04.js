function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	var cubeGeometry = new THREE.BoxGeometry(8, 8, 8, 4, 4, 4);
	var sphereGeometry = new THREE.SphereGeometry(5, 8, 8);
	var material = new THREE.MeshPhongMaterial({
		color : GREEN,
	});
	var sphereMaterial = new THREE.MeshPhongMaterial({
		color : RED
	});
	var cube = new THREE.Mesh(cubeGeometry, material);
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	var ambientLight = new THREE.AmbientLight(0x0c0c0c);
	var spotLight = new THREE.SpotLight(0xffff00);

	cube.position.x = -10;
	cube.rotation.x = 5;
	cube.rotation.z = -10;

	sphere.position.x = 10;
	sphere.rotation.z = -10;
	
	spotLight.position.set(-20, 60, 60);

	scene.add(cube);
	scene.add(sphere);
	scene.add(ambientLight);
	scene.add(spotLight);

	camera.position.z = 40;
	renderer.render(scene, camera);
}
