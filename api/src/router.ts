import { Router } from 'express';
import { listCategoryController } from './app/controllers/categories/listCategoriesController.js';
import { createCategoriesController } from './app/controllers/categories/createCatogoriesController.js';
import { deleteCategoriesController } from './app/controllers/categories/deleteCategoriesController.js';
import { createProductController } from './app/controllers/products/createProductController.js';

export const router = Router();

//list categories
router.get('/categories', listCategoryController);

//create category
router.post('/categories', createCategoriesController);

//delete category
router.delete('/categories/:id', deleteCategoriesController);

//list products
// router.get('/products', createProductController);

//create product
router.post('/products', createProductController);

//get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

//delete product

// list orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

//delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
