// const pizzaApiRoot: string = 'https://pizzastep.pp.ua:44306/api';
const pizzaApiRoot: string = 'https://localhost:44306/api';


export const urls = {
  apis: {
    pizza: {
      root: pizzaApiRoot,

      categories: pizzaApiRoot + '/category',
      products: pizzaApiRoot + '/product',
      statuses: pizzaApiRoot + '/status',
      ingredients: pizzaApiRoot + '/ingredient',
      orders: pizzaApiRoot + '/order',
      orderPosition: pizzaApiRoot + '/OrderPosition',
      orderStatus: pizzaApiRoot + '/OrderStatus',
    }
  }
}
