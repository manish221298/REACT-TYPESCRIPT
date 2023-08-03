import './App.css';
import Todo from './components/Todo';
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
