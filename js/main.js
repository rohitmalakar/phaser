var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
	// load the game assets before the game starts
	preload: function(){
		this.load.image('background', 'assets/images/background.jpg');
		this.load.image('manOne', 'assets/images/1.png');
		this.load.image('manTwo', 'assets/images/2.png');
		this.load.image('manThree', 'assets/images/3.png');
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
		var manData = [
			{key: 'manOne', text: "Man one"},
			{key: 'manTwo', text: "Man Two"},
			{key: 'manThree', text: "Man Three"}
		];

		manData.forEach(function() {
				
		});

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
		this.leftArrow.input.pixelPerfectOver = true;
	    //  Enable the hand cursor
	    this.leftArrow.input.useHandCursor = true;
		this.leftArrow.events.onInputDown.add(this.switchMan, this);
		

		// add right arrowRight
		this.arrowRight = this.game.add.sprite(600, game.world.centerY, 'arrow');
		this.arrowRight.scale.setTo(-0.08, 0.08);
		this.arrowRight.anchor.setTo(0.5);
		this.arrowRight.customParams = {direction: 1};

	},
	update: function() {

	},
	switchMan: function(sprite, event) {
		console.log("move man");
	},
	animateMan: function(sprite, event) {
		console.log('animate man');
	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');