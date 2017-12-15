const express = require('express')
const router = express.Router()

let contactList = [
    {id: 0, name: 'dduilnwza007', email: 'dduilnwza007@google.com', phone: '005-420-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'invoker', email: 'injoker007@winterfell.com', phone: '087-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'anurak Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora Mec', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tysdfzn Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Erfxnnis', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne osefaw', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'guccigang', email: 'guccigang@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ];


router.get('/contacts', (req, res) =>{
	if(req.query.name){
		for(i=0;i<contactList.length;i++)
		{
			if(contactList[i].name == req.query.name)
			{
				res.json(contactList[i])
			}
		}
	}
	else{
		res.json(contactList)
	}
})

router.get('/contacts/:id', (req, res) => {
    let id = req.params.id
    res.json(contactList[id])
})

router.post('/contacts', (req, res) => {
    let newContact = req.body
    newContact.id = contactList.length
    contactList.push(newContact)
    res.status(201).json(newContact)
})