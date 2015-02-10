function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	
	//Triangle vertex
	var t1 = new THREE.Vector3(-5, 0, 0);
	var t2 = new THREE.Vector3(5, 0, 0);
	var t3 = new THREE.Vector3(0, 5, 0);
	
	//Square vertex
	var s1 = new THREE.Vector3(5, 5, 0);
	var s2 = new THREE.Vector3(-5, 5, 0);
	var s3 = new THREE.Vector3(-5, 0, 0);
	var s4 = new THREE.Vector3(5, 0, 0);
	
	var triangleVertex = [t1, t2, t3];
	var squareVertex = [s1, s2, s3, s4];
	
	var triangle = new Triangle(triangleVertex);
	var square = new Square(squareVertex);
	var circle = new Circle(4, 36);
	
	square.draw(BLUE);
	triangle.draw(WHITE);
	circle.draw(GREEN);
	
	triangle.translateX(-12.5);
	triangle.translateY(-5.0);
	
	camera.position.z = 40;
	renderer.render(scene, camera);
}

