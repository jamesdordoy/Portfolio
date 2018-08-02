

function SteeringBehavior(name){

  this.font = null;
  this.vehicles = [];
  this.name = name;

  this.preload = function(){
    this.font = loadFont('/fonts/AvenirNextLTPro-Demi.otf')
  };

  this.setup = function(){
    var canvas = createCanvas(width, 300);
    background('#36454f');
    canvas.parent('name');

    var points = steeringBehavior.font.textToPoints(this.name, 100, 200, 160, {
      sampleFactor: 0.25
    });

    for (var i = 0; i < points.length; i++) {
      var pt = points[i];
      var vehicle = new Vehicle(pt.x, pt.y);
      this.vehicles.push(vehicle);
    }
  };

  this.draw = function () {

    background('#36454f');
    for (var i = 0; i < this.vehicles.length; i++) {
      var v = this.vehicles[i];
      v.behaviors();
      v.update();
      v.show();
    }
  }
}

function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  stroke(255);
  strokeWeight(this.r);
  point(this.pos.x - 70, this.pos.y);
}


Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

let str;
let width;

if (typeof window.orientation !== 'undefined') {
  str = 'JD';
  width = 300;
} else {
  str = 'Coming Soon';
  width = 1060;
}

// P5 JS Libary
var steeringBehavior = new SteeringBehavior(str, width);

function preload() {
  steeringBehavior.preload();
}

function setup() {
  steeringBehavior.setup();
}

function draw() {
  steeringBehavior.draw();
}
