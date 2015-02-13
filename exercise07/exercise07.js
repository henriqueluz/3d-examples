function render() {
	renderer.setSize(width + 200, height + 100);
	document.body.appendChild(renderer.domElement);
	
	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
		controls.update();
	}
	
	var controls = new THREE.OrbitControls(camera);
	var planeGeometry = new THREE.PlaneBufferGeometry(80, 80);
	var planeMaterial = new THREE.MeshLambertMaterial({color: GREEN});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	
	var sphereGeometry = new THREE.SphereGeometry(4, 8, 8);
	var sphereMaterial = new THREE.MeshPhongMaterial({
		color : RED
	});
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	var light = new THREE.SpotLight(WHITE);

	sphere.castShadow = true;
	sphere.position.set(0, 10, -15);
	
	plane.receiveShadow = true;
	plane.position.set(0, 0, -30);
	
	light.shadowDarkness = 0.5;
	light.target = sphere;
	light.position.set(0, -10, 90);
	light.castShadow =  true;
	//light.shadowCameraVisible = true;
	light.shadowCameraFar = 150;
	light.shadowCameraFov = 30;

	scene.add(light);
	scene.add(sphere);
	scene.add(plane);

	camera.position.z = 100;
	renderer.render(scene, camera);
	animate();
}
