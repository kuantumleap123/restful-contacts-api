const contactRouter = require("express").Router();
const ContactController = require('../controllers/contactController');

const express = require("express");
contactRouter.use(express.urlencoded({extended:true}))

contactRouter.get('/',(req,res) => {
    //res.send('contact list');
    ContactController.getContactList(req,res);
});

contactRouter.get('/:contactId',(req,res) => {
    //res.send('contact detail');
    ContactController.getContactDetail(req,res);
});

contactRouter.post('/',(req,res) => {
    //res.send('add contact');
    ContactController.addNewContact(req,res);
});

contactRouter.put('/:contactId',(req,res) => {
    //res.send('update contact');
    ContactController.editContact(req,res);
});

contactRouter.delete('/:contactId',(req,res) => {
    //res.send('delete contact');
    ContactController.deleteContact(req,res);
});

module.exports = contactRouter;