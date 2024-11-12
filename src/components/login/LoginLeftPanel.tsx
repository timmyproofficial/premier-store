import LoginForm from './LoginForm';

const LoginLeftPanel = () => {
  return (
    <div className="bg-block-color rounded-tl-[50px]">
      <h4 className="font-semibold pl-24 pt-32 mb-24">
        Log in to your Account
      </h4>

      <LoginForm />
    </div>
  );
};

export default LoginLeftPanel;
