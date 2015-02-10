function Triangle(vertex, face) {
	this.geometry = new THREE.Geometry();
	this.a = vertex[0];
	this.b = vertex[1];
	this.c = vertex[2];
	this.face = face;
}

Triangle.prototype.draw = function(color) {
	this.geometry.vertices.push(this.a);
	this.geometry.vertices.push(this.b);
	this.geometry.vertices.push(this.c);
	this.geometry.faces.push(this.face);
	var triangle = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({color : color}));
	
	scene.add(triangle);
	camera.position.z = 20;
	renderer.render(scene, camera);
}
