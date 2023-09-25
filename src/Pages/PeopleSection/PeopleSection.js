import { PeopleCard } from "../../components/PeopleCard";
import "./PeopleSection.css";
export const PeopleSection = () => {
  return (
    <div className="container people">
      <h2 className="people_head">Bizning o'quvchilar</h2>
      <p className="people_text">
        Bizning o’quvchilar dunyodagi TOP universitetlarga GRANT’lar yutishgan.
        Buyuk Britaniya, AQSH va boshqa oldi mamlakatlardagi xalqaro o’qishlarga
        kirib IELTS’dan 8,5 ballgacha olishgan. Juda ham ko’plab o’quvchilarimiz
        O’zbekistondagi Westminster, MDIST va boshqa universitetlar talabalari.
      </p>
      <div className="peopleCards">
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
      </div>
    </div>
  );
};
