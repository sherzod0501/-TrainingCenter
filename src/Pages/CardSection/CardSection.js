import { Card } from "../../components/Card/Card";
import "./CardSection.css";
export const CardSection = () => {
  return (
    <div className="container">
      <h1 className="CardSection_head">O'zingiz uchun mos kursni tanlang</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="Card_btn">Kursga yozilish</button>
    </div>
  );
};
