import Vehicle from './Vehicle.js'

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

  export default SteeringBehavior;