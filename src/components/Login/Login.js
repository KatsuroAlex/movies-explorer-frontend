import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import UserField from "../UserField/UserField";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser.email) {
      navigate("/"); 
    }
  }, [currentUser, navigate]);

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
