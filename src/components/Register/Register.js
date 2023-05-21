import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import UserField from '../UserField/UserField';

function Register({ onRegister }){
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser.email) {
      navigate("/"); 
    }
  }, [currentUser, navigate]);

  return (
    <UserField
      type='signup'
      linkTo='/signin'
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