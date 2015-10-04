
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
var SpaceHipster = SpaceHipster || {};

SpaceHipster.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
SpaceHipster.Boot.prototype = {
  preload: function() {
   //assets we'll use in the loading screen
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
   //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
 this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 this.scale.minWidth = 240;
 this.scale.minHeight = 170;
 this.scale.maxWidth = 2880;
 this.scale.maxHeight = 1920;

 //have the game centered horizontally
 this.scale.pageAlignHorizontally = true;

 //screen size will be set automatically
 this.scale.setScreenSize(true);

 //physics system for movement
 this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }
};
