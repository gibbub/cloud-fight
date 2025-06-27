
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

	create() {

		this.editorCreate();

		const clouds = [this.cloud_1, this.cloud_2, this.cloud_3];

		clouds.forEach((cloud) => {
			// cloud.setColliderWorldBounds(true).setBounce(0.2);
			console.log(cloud);
			cloud.setInteractive();
			cloud.on('pointerover', () => {
				cloud
				.setVelocityY(Phaser.Math.Between(-1000, 5000))
				.setVelocityX(Phaser.Math.Between(-1000, 5000));
			});
		})

		this.physics.add.collider(this.cloud_1, [this.cloud_2, this.cloud_3]);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
