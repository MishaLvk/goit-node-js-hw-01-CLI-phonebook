const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function readContacts() {
  const listContacts = await fs.readFile(contactsPath);
  const listContactsParse = JSON.parse(listContacts);
  return listContactsParse;
}

async function listContacts() {
  try {
    const listContacts = await readContacts();
    return listContacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const listContacts = await readContacts();
    const contact = listContacts.filter((contact) => contact.id === contactId);
    if (contact.length == 0) {
      return `елемент з індексом ${contactId} не знайдено`;
    }
    return contact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const listContacts = await readContacts();
    const newListContacts = listContacts.filter(
      (contact) => contact.id != contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newListContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const id = nanoid();
    const contact = {
      id,
      name,
      email,
      phone,
    };

    const listContacts = await readContacts();
    listContacts.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(listContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
