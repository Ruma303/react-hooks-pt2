import './App.css';
import UseContext from './useContext/UseContext';
import UseRef from './useRef/UseRef';
import UseReducer from './useReducer/UseReducer';
import UseMemo from './useMemo/UseMemo';
import ParentComponent from './useMemo/ParentComponent';
import UseCallback from './useCallback/UseCallback';
import { useDocumentTitle } from './Custom Hooks/CustomHooks';
import FetchComponent from './Custom Hooks/FetchComponent';


function App() {
    useDocumentTitle('App.js'); //* Titolo impostato da Hook personalizzato

    return (
        <div className="App">
            <UseContext />
            {/* <UseRef /> */}
            {/* <UseReducer /> */}
            {/* <UseMemo /> */}
            {/* <ParentComponent /> */}
            {/* <UseCallback/> */}
            {/* <FetchComponent /> */}
        </div>
    );
}

export default App;
