const {Router} = require('express');
const router = Router();
const {getContactos,newContactos}=require('../controllers/indexcontrolers')


router.get('/contactos',getContactos);

router.post('/new',newContactos);

module.exports = router;