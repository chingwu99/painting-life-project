import React from "react";

const TeacherCard = ({ name, image, p, experience, teacherClass }) => {
  return (
    <div className={teacherClass}>
      <img src={image} alt="" className="teacher-card-img" />
      <div className="teacher-word">
        <div>
          <p>{name}</p>
          <p>{experience}</p>
        </div>
        <div>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
