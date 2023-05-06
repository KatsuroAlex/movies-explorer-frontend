import UserField from '../UserField/UserField';

function Register(){

  return (
    <UserField
      type='signup'
      linkTo='signin'
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
    >
    </UserField>
  );
};
  
export default Register;