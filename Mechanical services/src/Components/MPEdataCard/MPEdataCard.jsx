import "./MPEdataCard.css";

const MPEdataCard = ({ title, image }) => {
  return (
    <>
      <div className="MPE-card">
        <p className="card-text">{title}</p>
        <div className="card-img">
          <img src={image} alt="cardimg" />
        </div>
      </div>
    </>
  );
};

export default MPEdataCard;
