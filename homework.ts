//* ************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney
enum DIRECTION {
  TOP = "TOP",
  BOTTOM = "BOTTOM"
}
const calcInvestitions = (amountOfMoney: number, percent: number, directionOfMarket?: DIRECTION): number => {
  if(directionOfMarket === DIRECTION.TOP){
    return amountOfMoney + (percent * amountOfMoney / 100)
  }
  if(directionOfMarket === DIRECTION.BOTTOM){
    return amountOfMoney - (percent * amountOfMoney / 100)
  }
  else{
    return amountOfMoney
  }
}
console.log(calcInvestitions(100,10,DIRECTION.TOP))
console.log(calcInvestitions(100,10,DIRECTION.BOTTOM))
console.log(calcInvestitions(100,20))
  

//* ************  TASK 2 *************
// We have two entities: Product and Order with products
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

type Product = {
  id:number,
  name:string,
  price:number
  weight:number
}

type Order = {
  id:number
  deliveryAddress:string
  createdAt:Date
  updatedAt:Date
  listOfProducts:Product[]
}
const cheesecake:Product = {id:1, name:'cheesecake', price:60, weight:185}
const tiramisu:Product = {id:2, name:'tiramisu', price:75, weight:200}
const order:Order = {id:3,deliveryAddress:'Dacia 44', createdAt:new Date(), updatedAt:new Date(),listOfProducts:[cheesecake]}

//* ************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.

class Vehicle{
  name:string
  manufacturer:string
  color:string

  constructor(name:string, manufacturer:string, color:string) {
this.name = name
this.manufacturer = manufacturer
this.color = color
  }
}

class Car extends Vehicle {
  private stateOfTrunk: boolean;
  constructor(name: string, manufacturer: string, color: string){
    super(name, manufacturer, color);
    this.stateOfTrunk = false
  }
  openTrunk(): boolean{
    this.stateOfTrunk = true
    return this.stateOfTrunk;
  }
  closeTrunk(): boolean{
    this.stateOfTrunk = false
    return this.stateOfTrunk; 
  }
}

class Bike extends Vehicle {
  constructor(name: string, manufacturer: string, color: string){
    super(name, manufacturer, color);
  }
  Fly(howLong:number): void{
    console.log(`The bike can fly ${howLong} seconds`)
  }
}
const chevroletCamaro:Car = new Car("Chevrolet Camaro", "General Motors", "yellow")
const ducati:Bike = new Bike("Ducati", "Ducati Motor Holding S.p.A", "black")

console.log(chevroletCamaro)
console.log(chevroletCamaro.openTrunk())
console.log(ducati)
ducati.Fly(15)




//* ************  TASK 4 *************
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
 type firstEndPoint = {
  id:number
  name:string
  price:number
  weight:string | number
 }

 enum PAYMENT_METHODS {
  BANK_TRANSFER = "Bank transfer",
  CREDIT = "Credit card",
  CASH = "Cash"
}
 type secondEndPoint = {
  id:number
  deliveryAddress:string
  paymentMethod:PAYMENT_METHODS
  isNewCustomer:boolean
 }
 
 interface IResponse <T>{
  lastPage: boolean,
  numberOfPages: number,
  data: T | T[]
 }
 
 // First endpoint 
const firstResponse:IResponse<firstEndPoint[]> = {
  lastPage: true, 
  numberOfPages: 20, 
  data: [
    { 
      id: 1, 
      name: 'Product1', 
      price: 20, 
      weight: '20g'
    }, 
    { 
      id: 2, 
      name: 'Product2', 
      price: 30, 
      weight: 3}]};
// Second endpoint 
const secondResponse:IResponse<secondEndPoint> = {
  lastPage: false, 
  numberOfPages: 10, 
  data: { 
    id: 1, 
    deliveryAddress: 'Chisinau', 
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, 
    isNewCustomer: true 
  }
}
