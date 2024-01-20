const greetingPrototype = {
    greeting: function() {
      return 'Welcome to ' + this.name;
    }
  };
  
  const addInfo = Object.create(greetingPrototype, {
    name: {
      value: 'Web Reference!'
    }
  });
  
  console.log(addInfo.greeting());