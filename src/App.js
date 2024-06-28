import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Counter1 from './Components/Counter1';
import Onclickhidden from './Components/Onclickhidden';
import Props from './Components/Props';
import Dataform from './Components/Dataform';
import Navigation from './Components/Navigation';
import Contact from './Components/Contact';
import Datafetch from './Components/Datafetch';
import Productform from './Components/Productform';
function App() {
  const data ="Hello"
  return (
    <>
    <Navigation/>
    <Productform/>
    <Datafetch/>
    <Contact/>
    <Home/>
    <Props data={data}/>
    <Dataform/>
    <Counter1/>
    <Onclickhidden/>
    <Footer/>
    </>
  );
}

export default App;
