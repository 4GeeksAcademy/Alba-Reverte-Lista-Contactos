
const getState = ({ getStore, getActions, setStore }) => {
   return {
       store: {
           contacts: [],
       },
       actions: {
           loadContacts: async () => {
               try {
                   const response = await fetch("https://playground.4geeks.com/contact/agendas/AlbaReverte");
                   if (!response.ok) {
                       throw new Error("error al cargar contactos");
                   }
                   const result = await response.json();
                   setStore({
                       contacts: result.contacts || [],
                   });
               } catch (error) {
                   console.error("error al cargar los contactos :", error);
                   setStore({
                       contacts: [],
                   });
               }
           },
           createContacts: async (contactResult) => {
               try {
                   const response = await fetch("https://playground.4geeks.com/contact/agendas/AlbaReverte", {
                       method: 'POST',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({
                           name: contactResult.name,
                           phone: contactResult.phone,
                           email: contactResult.email,
                           address: contactResult.address, 
                       })
                   });
                   if (!response.ok) {
                       throw new Error("error al crear contactos");
                   }
                   await getActions().loadContacts();
                   return true;
               } catch (error) {
                   console.error("error al crear los contactos :", error);
                   return false;
               }
           }
           updateContact: async (id) => {
                try {
                    
                } catch (error) {
                    
                }
           }
       }
   };
};
export default getState;







