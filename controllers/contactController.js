//controllers in this file
//@desc GET all contacts.
//@route GET /api/contacts
//@access Public.... will let be changed to private during JWT
const getAllContacts = (req, res) => {
  res.json({ message: "Grab all contacts" });
};

//controllers in this file
//@desc Create a contact.
//@route POST /api/contacts
//@access Public.... will let be changed to private during JWT
const createContact = (req, res)=>{
    console.log('The response is :', req.body)
    //error handling
    const {email, name} = req.body;
    if(!email || !name){
        res.status(400);
        console.error('All fields are mandatory!')
    }
    
     res.json({ message: "Create Contact" });
} 

//controllers in this file
//@desc GET a contact.
//@route GET /api/contacts/:id
//@access Public.... will let be changed to private during JWT
const getAContact = (req, res)=>{
     res.json({ message: `Get this Contact ${req.params.id}` });
}

//controllers in this file
//@desc Update a contact.
//@route PUT /api/contacts/:id
//@access Public.... will let be changed to private during JWT
const updateContact = (req, res)=>{
    res.json({ message: `This Contact ${req.params.id} has been updated` });
}

//controllers in this file
//@desc Delete a contact.
//@route DELETE /api/contacts/:id
//@access Public.... will let be changed to private during JWT
const deleteContact = (req, res)=>{
     res.json({ message: `Contact ${req.params.id} has been deleted!` });
}

//exports of controller methods with logic to the routes 
module.exports = {
    getAllContacts,
    createContact,
    getAContact,
    updateContact,
    deleteContact

}