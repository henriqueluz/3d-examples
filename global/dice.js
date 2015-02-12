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
	this.dice = new THREE.Mesh(geometry, material);
	var directionalLight = new THREE.DirectionalLight(0xffffff);
	var ambientLight = new THREE.AmbientLight(0xffffff);

	this.dice.overdraw = true;
	this.dice.rotation.x = 5;
	this.dice.rotation.z = -10;

	directionalLight.position.set(1, 1, 1).normalize();

	scene.add(this.dice);
	scene.add(ambientLight);
	scene.add(directionalLight);
}

Dice.prototype.animate = function() {
	var dice = this.dice;
	var lastTime = 0;
	function run() {
		var speed = 0.2;
		var time = (new Date()).getTime();
        var timeElapsed = time - lastTime;
		var angleChange = speed * 2 * timeElapsed * Math.PI / 1000;
	    
		dice.rotation.y += angleChange;
	    dice.rotation.x += angleChange;
	   
	    lastTime = time;
		renderer.render(scene, camera);
		requestAnimationFrame(run);
	}
	run();
}
