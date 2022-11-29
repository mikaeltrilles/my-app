import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//* Creer un composant React header, main et footer et les afficher sur la page
function App() {
  return (
    <>
      <Header title="React Lesson"/>
      <Main />
      <Footer />
    </>
    );
}











