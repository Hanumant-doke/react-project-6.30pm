
import './App.css';
//import BasicFunctionComponent from "./components/basicFunctionComponent";
//import BasicClassComponent from './components/basicClassComponent';
// import BasicFunctionComponentPropsexample from './components/basicFunctionComponentPropsExample';
import BasicClassComponentPropsExample from './components/basicClassComponentPropsExample';
function App() {
  return (
    <div className="App">
     
      {/* <BasicFunctionComponent></BasicFunctionComponent>
      <BasicClassComponent></BasicClassComponent> */}
      {/* <BasicFunctionComponentPropsexample myName="hanu" jobrole="react developer"></BasicFunctionComponentPropsexample>
      <BasicFunctionComponentPropsexample myName="dnyanu" jobrole="react developer"></BasicFunctionComponentPropsexample>
      <BasicFunctionComponentPropsexample myName="satish" jobrole="react developer"></BasicFunctionComponentPropsexample> */}
      <BasicClassComponentPropsExample myName= "hanu" jobrole="react developer"></BasicClassComponentPropsExample>

    </div>
  );
}

export default App;
