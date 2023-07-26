import './App.css';
import UseContext from './useContext/UseContext';
import UseRef from './useRef/UseRef';
import UseReducer from './useReducer/UseReducer';
import UseMemo from './useMemo/UseMemo';
import ParentComponent from './useMemo/ParentComponent';
import UseCallback from './useCallback/UseCallback';
function App() {
    return (
        <div className="App">
            {/* <UseContext /> */}
            {/* <UseRef /> */}
            {/* <UseReducer /> */}
            {/* <UseMemo /> */}
            <ParentComponent />
            {/* <UseCallback/> */}
        </div>
    );
}

export default App;
