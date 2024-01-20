const car = {
    make: 'Mercedes-Benz',  // property
    model: 'GLS',  // property
    fullDescription: function() {  // method
      return this.make + ' ' + this.model;
    }
  };
  
  console.log(car.fullDescription())