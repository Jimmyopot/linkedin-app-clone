import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      
      {/* header */}
      <Header />

      <div className="App__body">
        {/* sidebar */}
        <SideBar />
      </div>

      {/* feed */}
      {/* right bar */}
    </div>
  );
}

export default App;
