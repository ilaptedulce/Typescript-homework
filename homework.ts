//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

//*************  TASK 2 *************
// We have two entities: Product and Order with products 
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.


//*************  TASK 4 *************
// You have two endpoints
// One of them returns the array of products
// Another one returns only one order
// Each endpoint wrappers the respose in an additional object like that: 
// {
//   lastPage: false,
//   numberOfPages: 20,
//   data: {},
// }

// You should create a generic interface that will get as a props type of response
// First endpoint returns 
  // {lastPage: true, numberOfPages: 20, data: [{ id: 1, name: 'Product1', price: 20, weight: '20g'}, { id: 2, name: 'Product2', price: 30, weight: 3}]};
// Second endpoint returns
  //  {lastPage: false, numberOfPages: 10, data: { id: 1, deliveryAddress: 'Chisinau', paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, isNewCustomer: true }}


