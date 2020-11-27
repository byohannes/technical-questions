//ES6
class phone6 {
  constructor(make, model, _warranty, colour) {
    this.make = make;
    this.model = model;
    this._warranty = _warranty || 24;
    this.colour = colour || "white";
    this.log = [];
  }
  extendWarranty(x) {
    this.warranty += x;
  }

  //static method
  static defaultPhone() {
    return new phone6("Apple", "iphone 6");
  }

  //setter
  set warranty(x) {
    this.log.push(`warranty set to ${x}`);
    this._warranty = x;
  }

  //getter
  get warranty() {
    console.log(`get warranty called`);
    return this._warranty;
  }
}
const myPhone6 = new phone6("Apple", "Iphone7", 11, "black");
console.log(myPhone6);

console.log(typeof phone6); //function

//static methods not attached to class instances
console.log(myPhone6.defaultPhone);
console.log(phone6.defaultPhone);
console.log(phone6.defaultPhone());

console.log(Object.create);
const obj = { name: "John" };
console.log(obj.create);

//setters and getters
myPhone6.warranty = 30; //calls the setter
myPhone6.warranty = 40; //calls the setter
myPhone6.warranty = 30; //calls the setter
console.log(myPhone6.warranty); //calls the getter
console.log(myPhone6.log);

//inheritance - extends - super
class smartPhone6 extends phone6 {
  constructor(make, model, OS) {
    super(make, model);
    this.OS = OS;
  }
  extendWarranty(x) {
    super.extendWarranty(x);
  }
}

const mySmartPhone6 = new smartPhone6("Apple", "Iphone 7", "IOS 11");
console.log(mySmartPhone6);
mySmartPhone6.extendWarranty(10);
console.log(mySmartPhone6);

console.log(mySmartPhone6 instanceof smartPhone6); //true
console.log(mySmartPhone6 instanceof phone6); //true
