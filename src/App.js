import './App.css';
import Feed from './components/Feed';
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

        {/* feed */}
        <Feed />
      </div>

      {/* right bar */}
    </div>
  );
}

export default App;
