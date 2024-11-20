import React from "react";

export const ContactList= () => {
    const [contacts, setContacts] = useState([
      { name: "", phone: "", email: "" },
    ]);
  
    return (
      <div>
        <h1>Lista de Contactos</h1>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.name}>
              <strong>{contact.name}</strong>
              <br />
              Teléfono: {contact.phone}
              <br />
              Email: {contact.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  