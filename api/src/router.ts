import { Router } from 'express';
import { listCategoryController } from './app/controllers/categories/listCategoriesController.js';
import { createCategoriesController } from './app/controllers/categories/createCatogoriesController.js';
import { deleteCategoriesController } from './app/controllers/categories/deleteCategoriesController.js';
import { createProductsController } from './app/controllers/products/createProductsController.js';
import { listProductsController } from './app/controllers/products/listProductsController.js';
import { listOrdersController } from './app/controllers/orders/listOrdersController.js';
import { createOrdersController } from './app/controllers/orders/createOrdersController.js';
import { deleteOrdersController } from './app/controllers/orders/deleteOrdersController.js';
import { changeOrderStatusController } from './app/controllers/orders/changeOrderStatusController.js';

export const router = Router();

//list categories
router.get('/categories', listCategoryController);

//create category
router.post('/categories', createCategoriesController);

//delete category
router.delete('/categories/:id', deleteCategoriesController);

//list products
router.get('/products', listProductsController);

//create product
router.post('/products', createProductsController);

//get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// list orders
router.get('/orders', (req, res) => {
  listOrdersController(res);
});

// create order
router.post('/orders', (req, res) => {
  createOrdersController(req, res);
});

// change order status
router.patch('/orders/:id', (req, res) => {
  changeOrderStatusController(req, res);
});

//delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  deleteOrdersController(req, res);
});
