import logo from './logo.svg';
import './App.css';
import Header from './aplicacao/header/Header';
import Footer from './aplicacao/footer/Footer';
import Sidebar from './aplicacao/sidebar/Sidebar';
import Main from './aplicacao/main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
