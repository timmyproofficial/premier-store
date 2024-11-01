import LoginLeftPanel from '../components/login/LoginLeftPanel';
import LoginRightPanel from '../components/login/LoginRightPanel';
import NavbarTop from '../components/NavbarTop';

const LoginPage = () => {
  return (
    <section>
      <NavbarTop />
      <div className="grid grid-cols-2 w-[95%] ml-auto login">
        <LoginLeftPanel />
        <LoginRightPanel />
      </div>
    </section>
  );
};

export default LoginPage;
