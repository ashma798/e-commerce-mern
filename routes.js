
const router = require("express").Router();
const authMiddleware = require('./backend/middlewares/authMiddleware');
const { userLogin,listUser,addUser } = require("./backend/controllers/userController");
const {addProduct,getProducts } = require("./backend/controllers/productController");
const uploads = require("./backend/middlewares/multer");

router.post('/userLogin',userLogin);
router.post('/register',addUser);
router.post('/addProduct', uploads.single("image"),addProduct);
router.get('/products',getProducts);
router.get('/user',authMiddleware,listUser);



module.exports = router;

