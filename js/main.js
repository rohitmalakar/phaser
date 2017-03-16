var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
	// load the game assets before the game starts
	preload: function(){
		this.load.image('background', 'assets/images/background.jpg');
	},
	// executed after everything is loaded
	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
	},
	update: function() {
		
	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');