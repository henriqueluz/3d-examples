function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	
	var v1 = new THREE.Vector3(-5, 0, 0);
	var v2 = new THREE.Vector3(5, 0, 0);
	var v3 = new THREE.Vector3(0, 5, 0);
	var vertex = [v1, v2, v3];
	var face = new THREE.Face3(0, 1, 2);
	var triangle = new Triangle(vertex, face);

	triangle.draw(WHITE);
}
