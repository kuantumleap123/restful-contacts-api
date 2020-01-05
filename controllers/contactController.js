const Contact = require('../models').Contact;

class ContactController {
    static getContactList(req,res)
    {
        Contact.findAll({
            raw: true
        })
        .then((contacts) => {
            //res.send(contacts);
            res.render('pages/contactList',{contacts:contacts})
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static getContactDetail(req,res)
    {
        Contact.findOne({
            where: {
                id: req.params.contactId
            }
        })
        .then((contact) => {
            if(contact)
            {
                //res.send(contact);
                res.render('pages/contactDetail',{contact:contact})
            }
            else
            {
                res.sendStatus(404);
            }
            
            //res.render('')
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static addNewContact(req,res)
    {
        Contact.create(req.body)
        .then(() => {
            res.redirect('/contacts');
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static deleteContact(req,res)
    {
        Contact.destroy({
            where: {
                id: req.params.contactId
            }
        })
        .then(() => {
            res.redirect('/contacts');
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static editContact(req,res)
    {
        Contact.update(req.body,{
            where: {
                id: req.params.contactId
            }
        })
        .then(() => {
            res.redirect('/contacts');
        })
        .catch((err) => {
            res.send(err);
        });
    }
}

module.exports = ContactController;