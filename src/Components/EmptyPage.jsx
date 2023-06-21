import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const EmptyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] =
    useState(`Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
  охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
  русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся.
  Он появился в Раквере, где советский капитан наградил его медалью.
  Медаль была украшена четырьмя непонятными словами, фигурой и
  восклицательным знаком.`);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="tack-conteiner">
        <h3>Login page – performance issues</h3>
        {isEditing ? (
          <textarea
            value={text}
            onChange={handleTextChange}
            className="editable-textarea"
          />
        ) : (
          <p>{text}</p>
        )}
        {isEditing ? (
          <button className="btn" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button className="btn" onClick={handleEditClick}>
            Редактировать
          </button>
        )}
        <NavLink to="/" className={"close-cross"}>
          <span>&times;</span>
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyPage;
