function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	function run() {
		renderer.render(scene, camera);
		requestAnimationFrame(run);
	}

	var dice = new Dice();
	dice.draw();
	
	camera.position.z = 40;

	run();
}
