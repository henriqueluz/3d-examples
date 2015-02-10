function Triangle(vertex) {
	this.geometry = new THREE.Geometry();
	this.a = vertex[0];
	this.b = vertex[1];
	this.c = vertex[2];
	this.face = new THREE.Face3(0, 1, 2);
}

Triangle.prototype.draw = function(color) {
	this.geometry.vertices.push(this.a);
	this.geometry.vertices.push(this.b);
	this.geometry.vertices.push(this.c);
	this.geometry.faces.push(this.face);
	this.triangle = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({color : color}));
	scene.add(this.triangle);
}

Triangle.prototype.translateX = function(value) {
	this.triangle.position.x = value;
}

Triangle.prototype.translateY = function(value) {
	this.triangle.position.y = value;
}