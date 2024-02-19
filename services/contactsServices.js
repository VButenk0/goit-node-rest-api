import Contact from "../models/Contact.js";

export async function listContacts() {
  return Contact.find();
}

export async function getContactById(contactId) {
  return Contact.findById(contactId);
}

export async function removeContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
}

export async function addContact(data) {
  return Contact.create(data);
}

export async function updateContact(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}

export async function updateStatusContact(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data);
}
