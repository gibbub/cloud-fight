import Phaser from "phaser";
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";
import GameMain from "./scenes/GameMain";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 1280,
		height: 720,
		backgroundColor: "#48C4F8",
		parent: "game-container",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {y: 300},
				debug: false
			}
		},
		scene: [Boot, Preload, Level, GameMain]
	});

	game.scene.start("Boot");
});