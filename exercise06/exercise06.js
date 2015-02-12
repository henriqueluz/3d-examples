function render() {
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	var dice = new Dice();
	dice.draw();
	dice.animate();
	camera.position.z = 40;
}
