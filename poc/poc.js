var sphere;
function init() {
	var containerWidth = container.clientWidth;
	var containerHeight = container.clientHeight;
	renderer.setSize(containerWidth, containerHeight);
	container.appendChild(renderer.domElement);
	renderer.setClearColor(LIGHT_YELLOW);
	
	var controls = new THREE.TrackballControls(camera, container);
	setupControls(controls);
	
	var cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
	var cubeColor = 0xffdd00;
	var cubeMaterial = new THREE.MeshLambertMaterial({color: YELLOW});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.name = "cube";
	
	var sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	var sphereColor = 0x00aaff;
	var sphereMaterial = new THREE.MeshLambertMaterial({color : sphereColor});
	sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.name = "sphere";
	
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
	scene.add(planeX);
	scene.add(planeY);
	scene.add(planeZ);
	
	var axis =  new Axis();
	axis.build();

	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();
	
	renderer.domElement.addEventListener('mousemove', onMouseMove, false);
	renderer.domElement.addEventListener('mousedown', onMouseDown, false);
	renderer.domElement.addEventListener('mouseup', onMouseUp, false);
	//renderer.domElement.addEventListener('click', onClick, false);
	window.addEventListener( 'resize', onWindowResize, false);
	
	camera.position.set(100, 100, 150);
	animate();
	
	var objects = [cube, sphere];
	function onMouseMove(e) {
		e.preventDefault();
		
		mouse.x = 2 * (e.clientX / containerWidth) - 1;
		mouse.y = 1 - 2 * (e.clientY / containerHeight);
		
		if(selected) {
			var intersects = raycaster.intersectObject(selectedPlane);
			var object = intersects[0];
			selected.position.copy(object.point);
			return;
		}
		
		var intersects = raycaster.intersectObjects(objects);
		if (intersects.length > 0) {
			if (intersected != intersects[ 0 ].object ) {

				if (intersected) {
					intersected.material.color.setHex(intersected.currentHex);
				}
				intersected = intersects[0].object;
				intersected.currentHex = intersected.material.color.getHex();
			}
			container.style.cursor = 'pointer';

		} else {

			if(intersected) {
				intersected.material.color.setHex(intersected.currentHex);
			}
			intersected = null;
			container.style.cursor = 'auto';
		}
	}
	
	function onMouseDown(e) {
		e.preventDefault();
		var vector = new THREE.Vector3(mouse.x, mouse.y, 0.0).unproject(camera);
		var raycaster = new THREE.Raycaster( camera.position, vector.sub(camera.position).normalize() );
		var intersects = raycaster.intersectObjects(objects);

		if (intersects.length > 0) {
			controls.enabled = false;
			selected = intersects[0].object;
			
			if(selectedPlane.name === "x") {
				planeY.visible = false;
				planeZ.visible = false;
				selectedPlane.position.y = selected.position.y;
			} else if(selectedPlane.name === "y") {
				planeX.visible = false;
				planeZ.visible = false;
				selectedPlane.position.x = selected.position.x;
			} else if(selectedPlane.name == "z") {
				planeX.visible = false;
				planeY.visible = false;
				selectedPlane.position.z = selected.position.z;
			}

			selectedPlane.visible = true;
			var intersects = raycaster.intersectObject(selectedPlane);
			offset.copy(intersects[0].point).sub(selectedPlane.position);

			container.style.cursor = 'move';
		}
	}

	function onMouseUp(e) {
		e.preventDefault();
		controls.enabled = true;

		if (intersected) {
			selected = null;
		}
		selectedPlane.visible = false;
		container.style.cursor = 'auto';
	}
	
	function onClick(e) {
		var intersects = raycaster.intersectObjects(objects);

		if(!selected) {
			if(intersects.length > 0) {
				controls.enabled = false;
				selected = intersects[0].object;
			}
		} else {
			selected = null;
		}
	}
	
	function onWindowResize( e ) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize( containerWidth, containerHeight );
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
	
	$("#objects").change(function() {
		var selectedId = this.value;
		for (var i in objects) {
			var object = objects[i];
			if(object.name == selectedId) {
				rotateObject = object;
			}
		}
	});
	
	
}

function rotate(axis, angle) {
	if(!angle) angle = ANGLE;
	if(rotateObject) {
		switch (axis) {
		case "x":
			rotateObject.rotation.x += angle;
			break;
		case "y":
			rotateObject.rotation.y += angle;
			break;
		case "z":
			rotateObject.rotation.z += angle;
			break;
		default:
			rotateObject.rotation.x += angle;
			break;
		}
	}
}

function undoRotate(axis) {
	 rotate(axis, -ANGLE);
}

function setPlane(plane) {
	switch (plane) {
	case "x" :
		selectedPlane = planeX;
		break;
	case "y" :
		selectedPlane = planeY;
		break;
	case "z" :
		selectedPlane = planeZ;
		break;
	default:
		selectedPlane = planeX;
	}
}