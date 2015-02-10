function Square(vertex) {
	this.geometry = new THREE.Geometry();
	this.a = vertex[0];
	this.b = vertex[1];
	this.c = vertex[2];
	this.d = vertex[3];
	
	this.faceOne = new THREE.Face3(0, 1, 2);
	this.faceTwo = new THREE.Face3(2, 3, 0);
}

Square.prototype.draw = function(color) {
	this.geometry.vertices.push(this.a);
	this.geometry.vertices.push(this.b);
	this.geometry.vertices.push(this.c);
	this.geometry.vertices.push(this.d);
	this.geometry.faces.push(this.faceOne);
	this.geometry.faces.push(this.faceTwo);
	var square = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({color : color}));

	scene.add(square);
}