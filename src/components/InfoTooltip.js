import checkmarkIcon from '../images/checkmark.svg';
import crossIcon from '../images/cross.svg';

import React from "react";

function InfoTooltip ({isOpen, onClose, isSuccess}) {
  return (
    <div className={
        isOpen
          ? `popup popup_opened`
          : `popup po`
      }>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          src={isSuccess ? checkmarkIcon : crossIcon}
          alt={
            isSuccess ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
          }
          className="popup__infoTooltip-icon"
        />
        <h3 className="popup__infoTooltip-title">
          {isSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;