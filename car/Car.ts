import Metal from 'metal/Metal';
import Wheel from 'wheel/Wheel';

export default class Car {
    metal: Metal;
    wheels: Wheel[];

    Car() {
      this.metal = new Metal;
      this.wheels = [,,,].map(_ => new Wheel(this.metal));
    }
}
