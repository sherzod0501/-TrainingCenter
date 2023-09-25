import "./Card.css";
export const Card = () => {
  return (
    <>
      <div className="Card">
        <img
          className="card_img"
          src=""
          width="200"
          height="200"
          alt="Card-img"
        />
        <div className="card_bottom">
          <h4 className="Card_head-4">IELTS Focus</h4>
          <p className="Card_bottom_text">
            O'quvchilarni imtihonlarga tayyorlash bo'yicha 3-15 yillik tajribaga
            ega ustozlar
          </p>
          <p className="Card_bottom_text">Kurs davomligi: 2 oy</p>
          <p className="Card_bottom_text">
            minimal bosqich: Intermedate va undan yuqori
          </p>
        </div>
      </div>
    </>
  );
};
