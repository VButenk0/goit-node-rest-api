import Contact from "../models/Contact.js";

export async function listContacts() {
  Contact.find();
}

export async function getContactById(contactId) {
  return Contact.findById(contactId);
}

export async function removeContact(contactId) {
  Contact.findByIdAndDelete(contactId);
}

export async function addContact(data) {
  Contact.create(data);
}

export async function updateContact(contactId, data) {
  Contact.findByIdAndUpdate(contactId, data);
}

export async function updateStatusContact(contactId, data) {
  Contact.findByIdAndUpdate(contactId, data);
}
