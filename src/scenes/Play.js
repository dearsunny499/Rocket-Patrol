class Play extends Phaser.Scene {
	constructor() {
		super("playScene");
	}
	create() {
		this.scene.start("playScene");
	}
}