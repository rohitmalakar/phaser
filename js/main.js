var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
	// load the game assets before the game starts
	preload: function(){
		this.load.image('background', 'assets/images/background.jpg');
		this.load.image('characterOne', 'assets/images/1.png');
		this.load.image('characterTwo', 'assets/images/2.png');
		this.load.image('characterThree', 'assets/images/3.png');
		this.load.image('arrow', 'assets/images/arrow.png');
	},
	// executed after everything is loaded
	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// create a sprite for the background
		this.background = this.game.add.sprite(0, 0, 'background');

		// this.manOne = this.game.add.sprite(game.world.centerX, game.world.centerY, 'manOne');
		// this.manOne.anchor.setTo(0.5);
		// this.manOne.inputEnabled = true;
		// this.manOne.events.onInputDown.add(this.animateMan, this);

		// group for man
		var characterData = [
			{key: 'characterOne', text: "Man one"},
			{key: 'characterTwo', text: "Man Two"},
			{key: 'characterThree', text: "Man Three"}
		];

		this.characters = this.game.add.group();

		var self = this;

		characterData.forEach(function(element) {
			character = self.characters.create(-1000, self.game.world.centerY, element.key);

			character.customParams = { text : element.text};
			character.anchor.setTo(0.5);

			character.inputEnabled = true;
			character.input.pixelPerfectClick = true;
			character.events.onInputDown.add(self.animateCharacter, self);
		});

		this.currentCharacter = this.characters.next();



		// this.men = this.game.add.group();

		// var self = this;

		// manData.forEach(function (element) {
		// 	this.men.create(200, this.game.world.centerY, element.key);
		// });




		// Add left arrow
		this.leftArrow = this.game.add.sprite(40, game.world.centerY, 'arrow');
		this.leftArrow.scale.setTo(0.08);
		this.leftArrow.anchor.setTo(0.5);
		this.leftArrow.customParams = {direction: -1};

		// left Arrow allow user input
		this.leftArrow.inputEnabled = true;
		// this.leftArrow.input.pixelPerfectOver = true;
	    //  Enable the hand cursor
	    this.leftArrow.input.useHandCursor = true;
		this.leftArrow.events.onInputDown.add(this.switchCharacter, this);
		

		// add right arrowRight
		this.arrowRight = this.game.add.sprite(600, game.world.centerY, 'arrow');
		this.arrowRight.scale.setTo(-0.08, 0.08);
		this.arrowRight.anchor.setTo(0.5);
		this.arrowRight.customParams = {direction: 1};

		// right Arrow allow user input
		this.arrowRight.inputEnabled = true;
		this.arrowRight.input.useHandCursor = true;
		this.arrowRight.events.onInputDown.add(this.switchCharacter, this);

	},
	update: function() {

	},
	switchCharacter: function(sprite, event) {

		var newCharacter, endX;
		// get the direction of the arrow
		if(sprite.customParams.direction > 0){
			newCharacter = this.characters.next();
			endX = 640 + this.currentCharacter.width/2;
		}
		else{
			newCharacter = this.characters.previous();
			endX = -this.currentCharacter.width/2;
			// endX = 100;
		}

		this.currentCharacter.x = endX;
		newCharacter.x = this.game.world.centerX;
		this.currentCharacter = newCharacter;

		// get next character

		// get final final destination of current character

		// move current character to final destination

		// set the next character as the new current character

	},
	animateCharacter: function(sprite, event) {
		console.log('animate character');
	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');