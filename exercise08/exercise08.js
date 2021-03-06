function init() {
	var containerWidth = container.clientWidth;
	var containerHeight = container.clientHeight;
	renderer.setSize(containerWidth, containerHeight);
	container.appendChild(renderer.domElement);
	renderer.setClearColor(LIGHT_YELLOW);
	
	var controls = new THREE.TrackballControls(camera);
	setupControls(controls);
	
	var cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
	var cubeColor = 0xffdd00;
	var cubeMaterial = new THREE.MeshLambertMaterial({color: YELLOW});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	
	var sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	var sphereColor = 0x00aaff;
	var sphereMaterial = new THREE.MeshLambertMaterial({color : sphereColor});
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	
	var light = new THREE.DirectionalLight(WHITE);
	light.position.set(10, 10, 10);
	
	var d = 20;
	sphere.position.set(-d, 0, 0);
	cube.position.set(d, 0, 0);
	
	scene.add( new THREE.AmbientLight( 0x555555 ) );
	scene.add(sphere);
	scene.add(cube);
	scene.add(light);
	scene.add(BED);
	scene.add(floor);
	
	var axis =  new Axis();
	axis.build();

	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();
	
	renderer.domElement.addEventListener('mousemove', onMouseMove, false);
	renderer.domElement.addEventListener('resize', onWindowResize, false);
	
	camera.position.set(100, 100, 150);
	animate();
	
	var objects = [cube, sphere];
	
	function onMouseMove(e) {
		e.preventDefault();
		
		mouse.x = 2 * (e.clientX / containerWidth) - 1;
		mouse.y = 1 - 2 * (e.clientY / containerHeight);
		
		coordX.innerHTML = mouse.x;
		coordY.innerHTML = mouse.y;
		
		if(selected) {
			var intersects = raycaster.intersectObject( plane );
			var object = intersects[ 0 ];
			selected.position.copy(object.point.sub(offset));
			return;
		}
	}
	
	function onWindowResize( e ) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize(containerWidth, containerHeight);
		camera.aspect = containerWidth / containerHeight;
		camera.updateProjectionMatrix();
	}
	
	function render() {
		controls.update();
		raycaster.setFromCamera(mouse, camera);
		
		var intersects = raycaster.intersectObjects(objects, true);
		
		sphere.material.color = new THREE.Color(sphereColor);
		cube.material.color = new THREE.Color(cubeColor);
		
		if(intersects.length > 0) {
			var intersect = intersects[0].object;
			intersect.material.color = new THREE.Color(RED);
		}
		renderer.render(scene, camera);
	}
	
	function animate() {
		requestAnimationFrame(animate);
		render();
		renderer.render(scene, camera);
	}
	
	function setupControls(controls) {
		controls.rotateSpeed = 2.0;
		controls.zoomSpeed = 1.0;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.3;
	}

}