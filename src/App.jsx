
import Header from './components/Header';
import Hero from './components/Hero';
import NeedsCatalog from './components/NeedsCatalog';
import Dashboard from './components/Dashboard';
import BlockchainVerify from './components/BlockchainVerify';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container" style={{ paddingTop: "70px" }}>
      <Header />
      <main>
        <Hero />
        <NeedsCatalog />
        <Dashboard />
        <BlockchainVerify />
      </main>
      <Footer />
    </div>
  );
}

export default App;
