import './InfoMessage.css';
import React, { useState, useEffect } from 'react';

function InfoMessage({isShown, message, code, type}) {
  const [textMessage, setTextMessage] = useState('');

  function getMessage(type) {
    if (type === 'profile') {
      return 'При обновлении профиля произошла ошибка'
    }
  };

  useEffect(() => {
    switch (code) {
      case 200:
        setTextMessage('Данные обновлены');
        break;
      case 400:
        setTextMessage(getMessage(type));
        break;
      default:
        setTextMessage(message);
    }
  }, [code, message, type]);

  useEffect(() => {
    setTextMessage(message);
  }, [message]);


  return (
    <div className='message'>
      {isShown && (
        <p className={`message__text ${code === 200 && 'message__text_type_active'}`}>
          {textMessage}
        </p>
      )}
    </div>
  );
};
  
export default InfoMessage;