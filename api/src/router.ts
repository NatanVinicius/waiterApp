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
