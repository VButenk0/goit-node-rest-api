import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactsByFilter = (filter, query = {}) =>
  Contact.find(filter, null, query);

export const getContactsCountByFilter = (filter) =>
  Contact.countDocuments(filter);

export const getContactById = (contactId) => Contact.findById(contactId);

export const getContactByFilter = (filter) => Contact.findOne(filter);

export const removeContact = (contactId) =>
  Contact.findByIdAndDelete(contactId);

export const removeContactByFilter = (filter) =>
  Contact.findOneAndDelete(filter);

export const addContact = (data) => Contact.create(data);

export const updateContact = (contactId, data) =>
  Contact.findByIdAndUpdate(contactId, data);

export const updateContactByFilter = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

export const updateStatusContact = (contactId, data) =>
  Contact.findByIdAndUpdate(contactId, data);

export const updateStatusContactByFilter = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);
