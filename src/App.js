import "./App.css";
import INC from "./Components/UseState/Increment";
import Input from "./Components/UseState/UseState";
import ReducerTut from "./Components/UseReducer/ReducerTut";
import UseEffectTut from "./Components/UseEffect/UseEffectTut";
import RefTut from "./Components/UseRef/RefTut";
import LayoutEffectTut from "./Components/LayoutEffect/LayoutEffectTut";
import ImperativeHandle from "./Components/UseImperativeHandle/ImperativeHandle";
import ContextTutorial from "./Components/UseContext/ContextTutorial";
import MemoTutorial from "./Components/UseMemo/MemoTut";
import CallBackTutorial from "./Components/UseCallback/CallBackTut";

function App() {
  return (
    <div>
      <INC />
      <hr></hr>
      <Input />
      <hr></hr>
      <ReducerTut />
      <hr></hr>
      <UseEffectTut />
      <hr></hr>
      <RefTut />
      <hr></hr>
      <LayoutEffectTut />
      <hr></hr>
      <ImperativeHandle />
      <hr />
      <ContextTutorial />
      <hr></hr>
      <MemoTutorial />
      <hr />
      <CallBackTutorial />
    </div>
  );
}

export default App;
