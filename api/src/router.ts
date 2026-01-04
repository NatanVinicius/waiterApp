import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
import { listCategoryController } from './app/controllers/categories/listCategoriesController.js';
import { createCategoriesController } from './app/controllers/categories/createCatogoriesController.js';
import { deleteCategoriesController } from './app/controllers/categories/deleteCategoriesController.js';
import { createProductsController } from './app/controllers/products/createProductsController.js';
import { listProductsController } from './app/controllers/products/listProductsController.js';
import multer from 'multer';
import { getProductByCategoryController } from './app/controllers/products/getProductsByCategoryController.js';
import { listOrdersController } from './app/controllers/orders/listOrdersController.js';
import { createOrdersController } from './app/controllers/orders/createOrdersController.js';
import { deleteOrdersController } from './app/controllers/orders/deleteOrdersController.js';
import { changeOrderStatusController } from './app/controllers/orders/changeOrderStatusController.js';
import { deleteOrdersManyController } from './app/controllers/orders/deleteOrdersManyController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});
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
router.post('/products', uploads.single('image'), createProductsController);

//get product by category
router.get('/categories/:categoryId/products', getProductByCategoryController);

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

router.delete('/orders', (req, res) => {
  deleteOrdersManyController(req, res);
});
