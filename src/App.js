import './App.css';
import UseContext from './useContext/UseContext';
import UseRef from './useRef/UseRef';
import UseReducer from './useReducer/UseReducer';
import { useDocumentTitle } from './Custom Hooks/CustomHooks';
import FetchComponent from './Custom Hooks/FetchComponent';


function App() {
    //useDocumentTitle('App.js'); //* Titolo impostato da Hook personalizzato

    return (
        <div className="App">
            {/* <UseRef /> */}
            {/* <UseContext /> */}
            {/* <UseReducer /> */}
            {/* <FetchComponent /> */}
        </div>
    );
}

export default App;
