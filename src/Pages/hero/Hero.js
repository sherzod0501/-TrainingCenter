import person from "../../assets/img/person.jpg";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="Hero container">
      <div className="hero_left">
        <h3 className="hero_head">
          <b>IELTS 7.0 va undan yuqori ballni</b> birinchi imtihonning o'zidayoq
          qo'lga kiriting
        </h3>
        <p className="hero_text">
          7 yil davomida 40,000 dan ziyod inson Cambridge o’quv markazida tahsil
          olgan
        </p>
        <button className="hero_btn">Birinhi darsga yozilish</button>
      </div>
      <div className="hero_right">
        <img className="hero_img" src={person} alt="Person" width="800" />
        <div className="hero_right_bottom">
          <span className="hero_span"></span>
          <p className="hero_right_text">
            2 daqiqa ichida o’quv markazimiz haqida bilib oling
          </p>
        </div>
      </div>
    </div>
  );
};
