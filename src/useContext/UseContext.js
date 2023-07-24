//% Esempio di useContext
/* import React, { useContext } from 'react';

//* Creazione del contesto
const MyContext = React.createContext();
//const MyContext = React.createContext('Valore di default');

function UseContext() {
    //* Fornire il contesto
    return ( <>
        <MyComponent />
        <MyContext.Provider value="Ciao mondo">
            <MyComponent />
        </MyContext.Provider>
    </>);
}
function MyComponent() {
    //* Utilizzo del contesto
    const contextValue = useContext(MyContext);
    return <div>{contextValue}</div>;
} */

//% NodeList
import React, { useState } from 'react';
import NoteList from './NoteList';

export const NotesContext = React.createContext(); //* Esportare il contesto


const UseContext = () => {
    const [notes, setNotes] = useState(["nota1", "nota2"]);
    return (<>
        <h1>UseContext</h1>
        <NotesContext.Provider value={{ notes, setNotes }}>
            <NoteList />
        </NotesContext.Provider>
    </>
    )
}

export default UseContext;