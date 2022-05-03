import '../styles/App.css';
import ChooseGame from "./ChooseGame";

function App() {
  return (
    <div className="App">
      <div className='bg' style={{ backgroundImage: "url(/images/background.svg)" }}></div>
      <div className='chooseGame'>
        <ChooseGame/>
      </div>
    </div>
  );
}

export default App;
