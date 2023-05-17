import UserField from "../UserField/UserField";

function Login({ onLogin }) {

  return (
      <UserField
        type='signin'
        linkTo='/signup'
        title='Рады видеть!'
        btnName='Войти'
        subtitle='Ещё не зарегистрированы?'
        linkName='Регистрация'
        onSubmit={onLogin}
      />
  );
};
 
export default Login;
