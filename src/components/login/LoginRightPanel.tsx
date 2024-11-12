import NavHero from '../NavHero';

const LoginRightPanel = () => {
  return (
    <div className="p-12 relative login-hero">
      <NavHero textColor="black" classes="flex justify-center" />

      <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="mb-3">Premier Stores</h2>
        <p>It's alll about fashion & lifestyle</p>
      </div>
    </div>
  );
};

export default LoginRightPanel;
