function Dice() {
	this.faces = [ new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-1.png')
	}), new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-2.png')
	}), new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-3.png')
	}), new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-4.png')
	}), new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-5.png')
	}), new THREE.MeshLambertMaterial({
		map : THREE.ImageUtils.loadTexture('img/face-6.png')
	}) ];
}

Dice.prototype.draw = function() {
	var geometry = new THREE.BoxGeometry(10, 10, 10);
	var material = new THREE.MeshFaceMaterial(this.faces);
	var dice = new THREE.Mesh(geometry, material);
	var directionalLight = new THREE.DirectionalLight(0xffffff);
	var ambientLight = new THREE.AmbientLight(0xffffff);

	dice.overdraw = true;
	dice.rotation.x = 5;
	dice.rotation.z = -10;

	directionalLight.position.set(1, 1, 1).normalize();

	scene.add(dice);
	scene.add(ambientLight);
	scene.add(directionalLight);
}