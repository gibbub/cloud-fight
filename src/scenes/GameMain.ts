
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameMain extends Phaser.Scene {

	constructor() {
		super("GameMain");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 628.5866111789081, 128, 128);
		rectangle_1.scaleX = 10.03867636263103;
		rectangle_1.scaleY = 0.7141671001647801;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 8167007;

		// cloud_1
		const cloud_1 = this.physics.add.sprite(310, 410, "cloud");
		cloud_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 500, 1640), Phaser.Geom.Rectangle.Contains);
		cloud_1.scaleX = 0.15;
		cloud_1.scaleY = 0.15;
		cloud_1.body.friction.y = 1;
		cloud_1.body.bounce.x = 0.8;
		cloud_1.body.bounce.y = 0.8;
		cloud_1.body.allowGravity = false;
		cloud_1.body.collideWorldBounds = true;
		cloud_1.body.setSize(3033, 1640, false);

		// cloud_2
		const cloud_2 = this.physics.add.sprite(903, 280, "cloud");
		cloud_2.scaleX = 0.15;
		cloud_2.scaleY = 0.15;
		cloud_2.tintTopLeft = 16716049;
		cloud_2.body.acceleration.x = 5;
		cloud_2.body.acceleration.y = 5;
		cloud_2.body.friction.y = 1;
		cloud_2.body.bounce.x = 0.8;
		cloud_2.body.bounce.y = 0.8;
		cloud_2.body.allowGravity = false;
		cloud_2.body.collideWorldBounds = true;
		cloud_2.body.setSize(3033, 1640, false);

		// cloud_3
		const cloud_3 = this.physics.add.sprite(782, 519, "DVD_logo");
		cloud_3.scaleX = 0.06252731687748246;
		cloud_3.scaleY = 0.06252731687748246;
		cloud_3.body.bounce.x = 1;
		cloud_3.body.bounce.y = 1;
		cloud_3.body.collideWorldBounds = true;
		cloud_3.body.setSize(2560, 1128, false);

		this.cloud_1 = cloud_1;
		this.cloud_2 = cloud_2;
		this.cloud_3 = cloud_3;

		this.events.emit("scene-awake");
	}

	private cloud_1!: Phaser.Physics.Arcade.Sprite;
	private cloud_2!: Phaser.Physics.Arcade.Sprite;
	private cloud_3!: Phaser.Physics.Arcade.Sprite;

	/* START-USER-CODE */
	// Write your code here

	private objGroup: Phaser.Physics.Arcade.Group;
	private instructionText: Phaser.GameObjects.Text;

	init(args: { mode: string })
	{
		console.log("initializing", args);
		this.args = args;
	}

	create() {
		console.log(this.args);

		this.input.keyboard.on('keydown-ESC', () => {
			this.scene.stop();
			this.scene.start("Level");
		});

		this.instructionText = this.add.text(0, 0, "WHIII", {
			color: '#000'
		});

		if (this.args.mode !== 'sandbox') {

			this.editorCreate();

			this.instructionText.setText("work in progress. press esc to go back");

			const clouds = [this.cloud_1, this.cloud_2, this.cloud_3];

			clouds.forEach((cloud) => {
				cloud.setInteractive();
				cloud.on('pointerover', () => {
					cloud
					.setVelocityY(Phaser.Math.Between(-1000, 5000))
					.setVelocityX(Phaser.Math.Between(-1000, 5000));
				});
			})

			this.physics.add.collider(this.cloud_1, [this.cloud_2, this.cloud_3]);
		}
		else {
			console.log("Playing sandbox!");

			this.instructionText.setText("click. press esc to go back");

			this.objGroup = this.physics.add.group();

			this.input.on("pointerdown", (pointer) => {
				this.createDVD(pointer.x, pointer.y);
			});

			this.physics.add.collider(this.objGroup, this.objGroup, (obj1, obj2) => {
				let objToGrow = obj1;
				let objToDelete = obj2;
				if (obj1.scale < obj2.scale) {
					objToGrow = obj2;
					objToDelete = obj1;
				}
				objToGrow.setScale(objToGrow.scale*1.1);
				this.objGroup.remove(objToDelete);
				objToDelete.destroy();

				if (objToGrow.scale > 0.45) {
					let objX = objToGrow.x;
					let objY = objToGrow.y;
					this.objGroup.remove(objToGrow);
					objToGrow.destroy();

					for (let i = 0; i < 100; i++) {
						this.createDVD(objX, objY);
					}
				}
			});
		}
	}

	update()
	{
	}

	private createDVD(x: number, y: number)
	{
		if (this.objGroup.getLength() > 500) return;

		const obj = this.objGroup.create(x, y, "DVD_logo");
		const tint = Phaser.Display.Color.RandomRGB().color;

		obj
		.setTint(tint)
		.setScale(0.03)
		.setBounce(0.9)
		.setCollideWorldBounds(true)
		.setVelocityY(Phaser.Math.Between(-100, 100))
		.setVelocityX(Phaser.Math.Between(-100, 100))
		.setFriction(0);

		obj.body.setAllowGravity(false);

		obj.setInteractive();
		obj.on("pointerover", () => {
			obj
			.setVelocityY(Phaser.Math.Between(-1000, 1000))
			.setVelocityX(Phaser.Math.Between(-1000, 1000))
		});

		return obj;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
