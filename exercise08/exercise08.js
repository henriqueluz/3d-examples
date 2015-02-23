function init() {
	renderer.setSize(width + 200, height + 100);
	document.body.appendChild(renderer.domElement);
	
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		render();
		renderer.render(scene, camera);
	}
	
	var controls = new THREE.OrbitControls(camera);
	var cubeGeometry = new THREE.BoxGeometry(8, 8, 8, 4, 4, 4);
	var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffd600});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	
	var sphereGeometry = new THREE.SphereGeometry(4, 8, 8);
	var sphereMaterial = new THREE.MeshBasicMaterial({color : 0xccf3f0});
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();
	
	window.addEventListener('mousemove', onMouseMove, false);
	
	function onMouseMove(e) {
		mouse.x = 2 * (e.clientX / window.innerWidth) - 1;
		mouse.y = 1 - 2 * (e.clientY / window.innerHeight);
		raycaster.setFromCamera(mouse, camera);
	}
	
	function render() {
		var intersects = raycaster.intersectObjects(scene.children);
		
		if(intersects.length > 0) {
			intersect = intersects[0].object;
			intersect.material.color.setRGB(RED);
		}
		
		renderer.render(scene, camera);
	}
	
	sphere.position.set(-20, 0, 0);
	cube.position.set(20, 0, 0);
	
	scene.add(sphere);
	scene.add(cube);

	camera.position.z = 100;
	animate();
}
