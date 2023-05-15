import UserField from '../UserField/UserField';

function Register({ onRegister }){

  return (
    <UserField
      type='signup'
      linkTo='signin'
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
      onSubmit={onRegister}
    >
    </UserField>
  );
};
  
export default Register;