import React, { useState } from "react";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  function recordData() {
    // Check if both name and number are non-empty before adding the contact
    if (name.trim() !== "" && number.trim() !== "") {
      // Create a new contact object
      const newContact = {
        id: Date.now(), // Use the current timestamp as the ID
        name: name,
        number: number,
      };
      // Update the contacts list with the new contact
      setContacts((prevContacts) => [...prevContacts, newContact]);
      // Clear the input fields
      setName("");
      setNumber("");
    }
  }

  return (
    <>
      <div className="container">
        <h1>Phone Book</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter the Name</label>

        <input
          type="text" // Changed the input type to text for the phone number
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Enter Phone Number</label>

        <button type="button" onClick={recordData}>
          Add Contact
        </button>
      </div>

      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskManager;
