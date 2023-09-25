import "./UnationSection.css";

export const UnationSection = () => {
  return (
    <div className="container unations">
      <h2 className="unation_head">“Cambridge” o’quv markazi afzalliklari</h2>
      <p className="unation_text">
        Har bir o'quvchimiz quyidagi afzalliklarga ega bo'ladi
      </p>
      <div className="unation">
        <ul className="unation_list">
          <li className="unation_item">
            O'quvchilarni imtihonlarga tayyorlash bo'yicha 3-15 yillik tajribaga
            ega ustozlar (IELTS 8,5 gacha)
          </li>
          <li className="unation_item">
            O'zbekistonda yagona kuchli o'qitish tizimi va Buyuk Britaniya o'quv
            dasturi
          </li>
          <li className="unation_item">
            IELTS MOCK CLUB – har yakshanba kuni bepul IELTS treninglari va
            IELTS MOCK imtihoni
          </li>
        </ul>
        <ul className="unation_list">
          <li className="unation_item">
            Academic Support - ikkinchi o'qituvchi xizmati. Darsdan tashqari
            bepul qo'shimcha mashg'ulotlar olish imkoniyati
          </li>
          <li className="unation_item">
            Tadbirlar - hafta davomida va yakshanba kungi bepul trening,
            master-class, speaking club'lar
          </li>
          <li className="unation_item">
            Volontyorlik - Cambridge o’quv markazining “HOPE” xayriya fondi
            tadbirlarida volontyorlik qilish imkoniyati
          </li>
        </ul>
        <ul className="unation_list">
          <li className="unation_item">
            Ota-ona va o’quvchi o'z uy vazifalari, baho va natijalarini kuzatib
            borishi uchun maxsus platformada shaxsiy kabinet
          </li>
          <li className="unation_item">
            Darsdan tashqari qo'shimcha dars tayyorlash uchun co-working joylar
          </li>
          <li className="unation_item">
            Shogird tushish - Ingliz tilini yaxshi o’zlashtirgan o’quvchilarda
            Cambridge hodimlariga shogird tushib, 3 oy davomida ish o’rganish
            imkoniyati
          </li>
        </ul>
      </div>
      <button className="unation_btn">Kursga yozilish</button>
    </div>
  );
};
