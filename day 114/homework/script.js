const thermometer = {
    _celsius: 0, 
  
    get temperature() {
      return (this._celsius * 9/5) + 32;
    },
  
    set temperature(celsius) {
      if (typeof celsius === "number") {
        this._celsius = celsius;
      } else {
        throw new Error("Temperature must be a number.");
      }
    }
  };
  
 
  thermometer.temperature = 25; 
  console.log(thermometer.temperature); 
  