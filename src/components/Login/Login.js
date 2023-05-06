import UserField from "../UserField/UserField";

function Login() {

  return (
      <UserField
        type='signin'
        linkTo='signup'
        title='Рады видеть!'
        btnName='Войти'
        subtitle='Ещё не зарегистрированы?'
        linkName='Регистрация'
      />
  );
};
 
export default Login;
