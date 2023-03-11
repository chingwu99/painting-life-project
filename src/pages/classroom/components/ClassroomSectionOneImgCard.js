const ClassroomSectionOneImgCard = ({ image, name, teacher }) => {
  return (
    <div className="classroom-section-one-imgcard">
      <img src={image} alt="" />
      <div className="classroom-section-one-imgcard-p-div">
        <p>{name}</p>
        <p>{teacher}</p>
      </div>
    </div>
  );
};

export default ClassroomSectionOneImgCard;
