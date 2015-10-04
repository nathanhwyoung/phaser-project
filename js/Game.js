var SpaceHipster = SpaceHipster || {};

//title screen
SpaceHipster.Game = function() {};

SpaceHipster.Game.prototype = {
    create: function() {
        //set world dimensions
        this.game.world.setBounds(0, 0, 1920, 1920);

        //background
        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

        //create player
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');
        this.player.scale.setTo(2);
        this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
        this.player.animations.play('fly');

        //player initial score of zero
        this.playerScore = 0;

        //enable player physics
        this.game.physics.arcade.enable(this.player);
        this.playerSpeed = 120;
        this.player.body.collideWorldBounds = true;

        //the camera will follow the player in the world
        this.game.camera.follow(this.player);

        this.generateAsteriods();

        //sounds
        this.explosionSound = this.game.add.audio('explosion');
        this.collectSound = this.game.add.audio('collect');


    },
    update: function() {
        if (this.game.input.activePointer.justPressed()) {

            //move on the direction of the input
            this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
        }
    },
    generateAsteriods: function() {
        this.asteroids = this.game.add.group();

        //enable physics in them
        this.asteroids.enableBody = true;
        this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

        //phaser's random number generator
        var numAsteroids = this.game.rnd.integerInRange(150, 200)
        var asteriod;

        for (var i = 0; i < numAsteroids; i++) {
            //add sprite
            asteriod = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
            asteriod.scale.setTo(this.game.rnd.integerInRange(10, 40) / 10);

            //physics properties
            asteriod.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
            asteriod.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
            asteriod.body.immovable = true;
            asteriod.body.collideWorldBounds = true;
        }
    },
};
