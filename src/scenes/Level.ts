
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text
		const text = this.add.text(640, 51, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Levels";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// sandBoxButton
		const sandBoxButton = this.add.text(640, 278, "", {});
		sandBoxButton.scaleX = 1.0629392256273105;
		sandBoxButton.scaleY = 0.9097944705920783;
		sandBoxButton.setOrigin(0.5, 0.5);
		sandBoxButton.text = "sandbox";
		sandBoxButton.setStyle({ "align": "center", "backgroundColor": "#ffffffff", "color": "#000000ff", "fixedWidth": 300, "fontFamily": "Arial", "fontSize": "3em" });
		sandBoxButton.setPadding({"left":20,"top":20,"right":20,"bottom":20});

		// cloudFightButton
		const cloudFightButton = this.add.text(640, 412, "", {});
		cloudFightButton.scaleX = 1.0629392256273105;
		cloudFightButton.scaleY = 0.9097944705920783;
		cloudFightButton.setOrigin(0.5, 0.5);
		cloudFightButton.text = "cloud fight";
		cloudFightButton.setStyle({ "align": "center", "backgroundColor": "#ffffffff", "color": "#000000ff", "fixedWidth": 300, "fontFamily": "Arial", "fontSize": "3em" });
		cloudFightButton.setPadding({"left":20,"top":20,"right":20,"bottom":20});

		this.sandBoxButton = sandBoxButton;
		this.cloudFightButton = cloudFightButton;

		this.events.emit("scene-awake");
	}

	private sandBoxButton!: Phaser.GameObjects.Text;
	private cloudFightButton!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const buttonConfigs = [
			{
				button: this.cloudFightButton,
				mode: "main"
			},
			{
				button: this.sandBoxButton,
				mode: "sandbox"
			}
		];

		buttonConfigs.forEach((config) => {
			const button = config.button;
			button.setInteractive();
			button.on('pointerover', () => {
				console.log("over");
			})
			button.on('pointerdown', () => {
				console.log("Starting game!", config.mode);
				this.scene.start("GameMain", { mode: config.mode });
			});
		});

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
