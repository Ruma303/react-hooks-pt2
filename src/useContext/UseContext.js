//% Esempio di useContext
//import React, { useContext } from 'react';

//* Creazione del contesto
//const MyContext = React.createContext('Valore di default');

//const MyContext = React.createContext();
/* function UseContext() {
    //* Fornire il contesto
    return (<>
        <MyComponent />
        <MyContext.Provider value="Ciao mondo">
            <MyComponent />
        </MyContext.Provider>
    </>);
}

function MyComponent() {
    //* Utilizzo del contesto
    const contextValue = useContext(MyContext);
    return <div>
        <h1>Componente MyComponent</h1>
        {contextValue}
    </div>;
} */

//% NodeList
import React, { useState } from 'react';
import NoteList from './NoteList';
export const NotesContext = React.createContext(); //* Esportare il contesto
const UseContext = () => {
    const [notes, setNotes] = useState(["nota1", "nota2"]);
    return (<>
        <NotesContext.Provider value={{ notes, setNotes }}>
            <NoteList />
        </NotesContext.Provider>
    </>
    )
}
export default UseContext;