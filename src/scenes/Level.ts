
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
		const text = this.add.text(618, 566, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor v4\nVite + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// fufuSuperDino_1
		this.add.image(619, 321, "FufuSuperDino");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
