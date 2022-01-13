import './App.css';
import { Image } from './Components';
import { Collection, Header, Footer } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
