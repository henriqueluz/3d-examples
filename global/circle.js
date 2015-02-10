function Circle(radius, segments) {
	this.radius = radius;
	this.segments = segments;
}

Circle.prototype.draw = function(color) {
	var geometry = new THREE.CircleGeometry(this.radius, this.segments);
	var material = new THREE.MeshBasicMaterial({color: color});
	this.circle = new THREE.Mesh(geometry, material);
	this.circle.position.x = 12;
	this.circle.position.y = -3;
	scene.add(this.circle);
}

