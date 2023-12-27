// Production object
function Production(product, quantity, callback) {
    this.product = product;
    this.quantity = quantity;
  
    // Simulate production process
    this.produce = function() {
      console.log(`Producing ${this.quantity} units of ${this.product}...`);
      // Simulate production time (setTimeout)
      setTimeout(() => {
        console.log(`${this.quantity} units of ${this.product} produced.`);
        callback();
      }, 2000); // Simulated production time: 2 seconds
    };
  }
  
  // Order object
  function Order(product, quantity, callback) {
    this.product = product;
    this.quantity = quantity;
  
    // Simulate order fulfillment
    this.fulfillOrder = function() {
      console.log(`Fulfilling order for ${this.quantity} units of ${this.product}...`);
      // Simulate order fulfillment time (setTimeout)
      setTimeout(() => {
        console.log(`Order for ${this.quantity} units of ${this.product} fulfilled.`);
        callback();
      }, 1000); // Simulated fulfillment time: 1 second
    };
  }
  
  // Callback function for order completion
  function orderCompleted() {
    console.log("Order completed successfully.");
  }
  
  // Callback function for production completion
  function productionCompleted() {
    console.log("Production completed successfully.");
  }
  
  // Example usage
  const productToProduce = "Widget";
  const productionQuantity = 100;
  
  const production = new Production(productToProduce, productionQuantity, productionCompleted);
  const order = new Order(productToProduce, productionQuantity, orderCompleted);
  
  // Start production and fulfill order
  production.produce();
  order.fulfillOrder();
  