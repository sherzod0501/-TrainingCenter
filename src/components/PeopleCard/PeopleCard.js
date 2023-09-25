import ielts from "../../assets/img/ielts.jpg";
import "./PeopleCard.css";

export const PeopleCard = () => {
  return (
    <>
      <div className="peopleCard">
        <div className="peopleCard_left">
          <img className="peopleCard_img" width="200" src={ielts} alt="Ielts" />
        </div>
        <div className="peopleCard_right">
          <h3 className="peopleCard_name">
            <b>Isroilov</b>
          </h3>
          <h3 className="peopleCard_username">
            <b>Tohir</b>
          </h3>
          <p className="peopleCard_text">
            Listening:{" "}
            <span className="peopleCard_span">
              <b>7.0</b>
            </span>
          </p>
          <p className="peopleCard_text">
            Reading:{" "}
            <span className="peopleCard_span">
              <b>8.0</b>
            </span>
          </p>
          <p className="peopleCard_text">
            Writing:{" "}
            <span className="peopleCard_span">
              <b>6.0</b>
            </span>
          </p>
          <p className="peopleCard_text">
            Speaking:{" "}
            <span className="peopleCard_span">
              <b>7.5</b>
            </span>
          </p>
          <p className="peopleCard_ball">
            <b>
              Bandscore: <span className="peopleCard_span_ball">7.0</span>
            </b>
          </p>
        </div>
      </div>
    </>
  );
};
