var express = require('express');
var router = express.Router();
const Contact = require('../models/contacts')

/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    const data = req.body;
    const response = await Contact.create(data)
    res.status(201).send(response)
  } catch (error) {
    console.log(error)
    res.status(400).send('No se pudo agregar el contacto a la lista')
  }
});

router.get('/', async function(req, res, next) {
  try {
    const data = req.body;
    const response = await Contact.find()
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(400).send('No se pudo obtener la lista de contactos')
  }
});

router.delete('/', async function(req, res, next) {
  try {
    const { _id } = req.body;
    const response = await Contact.deleteOne({_id})
    res.status(200).send("Contacto eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(400).send('Contacto eliminado correctamente')
  }
});


router.put('/:id', async function(req, res, next) {
  try {
    
    const { id } = req.params;
    const data = req.body;
    const response = await Contact.updateOne({_id: id}, data)
    console.log(response)
    res.status(200).send("Contacto actualizado correctamente")
  } catch (error) {
    console.log(error)
    res.status(400).send('No se pudo agregar el contacto a la lista')
  }
});



module.exports = router;
