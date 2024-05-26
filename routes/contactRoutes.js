const express = require("express");
//the router
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getAContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController");
//imports above this line.

//get
router.route("/").get(getAllContacts);
//post
router.route("/").post(createContact);
//update
router.route("/:id").put(updateContact);
//get individual contact
router.route("/:id").get(getAContact);

//delete
router.route("/:id").delete(deleteContact);

module.exports = router;
