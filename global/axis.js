function Axis() {
	this.axes = new THREE.Object3D();
}

Axis.prototype.build = function() {
	var axes = new THREE.Object3D();
	
	var origin = new THREE.Vector3(0, 0, 0);
	var value = 50;
	var positiveX = this.draw(origin, new THREE.Vector3(value, 0, 0), GREEN, false);
	var negativeX = this.draw(origin, new THREE.Vector3(-value, 0, 0), GREEN, true);
	var positiveY = this.draw(origin, new THREE.Vector3(0, value, 0), RED, false);
	var negativeY = this.draw(origin, new THREE.Vector3(0, -value, 0), RED, true);
	var positiveZ = this.draw(origin, new THREE.Vector3(0, 0, value), BLUE, false);
	var negativeZ = this.draw(origin, new THREE.Vector3(0, 0, -value), BLUE, true);
	
	axes.add(positiveX);
	axes.add(negativeX);
	axes.add(positiveY);
	axes.add(negativeY);
	axes.add(positiveZ);
	axes.add(negativeZ);
	
	scene.add(axes);
}

Axis.prototype.draw = function(source, destination, color, dashed) {
	var geometry = new THREE.Geometry();
	var material;
	
	if(dashed) {
		material = new THREE.LineDashedMaterial({lineWidth : 1, color : color, dashSize : 4, gapSize : 5});
	} else {
		material = new THREE.LineBasicMaterial({lineWidth : 1, color : color});
	}
	
	geometry.vertices.push(source.clone());
	geometry.vertices.push(destination.clone());
	var axis = new THREE.Line(geometry, material);
	
	return axis;
}