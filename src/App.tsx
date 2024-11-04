import NavbarTop from './components/NavbarTop';
import { Outlet } from 'react-router';
import FooterBlock from './components/FooterBlock';

function App() {
  return (
    <>
      <header>
        <nav>
          <NavbarTop />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterBlock />
      </footer>
    </>
  );
}

export default App;
