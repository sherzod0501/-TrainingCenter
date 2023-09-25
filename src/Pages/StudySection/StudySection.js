import "./StudySection.css";
import five from "../../assets/img/fiveBook.jpg";

export const StudySection = () => {
  return (
    <div className="container  StudySection">
      <h2 className="StudySection_head">
        O’quv markazimiz bo'ylab ekskursiyaga marhamat!
      </h2>
      <p className="studySection_text">
        O’z Ingliz tili darajangizni bepul tekshirish va o’quv markazlarimizdan
        biriga bepul ekskursiyaga tashrif buyurish uchun o’z ma’lumotlaringizni
        qoldiring
      </p>
      <div className="studySection_main">
        <div className="studySection_left">
          <form className="studySection_form" action="">
            <input
              className="studySection_input"
              type="text"
              placeholder="name"
            />
            <input
              className="studySection_input"
              type="text"
              placeholder="username"
            />
            <input
              className="studySection_input"
              type="number"
              placeholder="number"
            />
            <textarea
              className="studySection_input"
              cols="18"
              rows="2"
              placeholder="taklif va fikirlar"
            ></textarea>
            <button className="studySection_btn">send</button>
            <p className="studySection_left_text">
              {" "}
              Ma’lumotlaringiz 3-shaxslarga berilmaydi{" "}
            </p>
          </form>
        </div>
        <div className="studySection_right">
          <img
            className="fivePeople_img"
            src={five}
            width="700"
            alt=" five people and book"
          />
        </div>
      </div>
    </div>
  );
};
