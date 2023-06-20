import React from "react";

import './Card.css';
import Birthday from "../../Birthday/components/Birthday";

const Card = (props) => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Happy Birthday!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
          <div className="balloonFive" />
        </div>
        <p className="openme">
          <strong>Open Me!</strong>
        </p>
      </div>
      <div className="cardInside">
        <h3 className="back">Happy Birthday Kelly!</h3>
        <p>
          Gemerlap sinar bintang menyapa, <br/>
          Selamat ulang tahun untukmu <strong>Kelly</strong>-sama. <br/>
          Detik berlalu, tatkala waktu bersenandung, <br/>
          perbait puisi, kucoba tulis secara seksama. <br/><br/>

          Ulang tahunmu tiba, harapanku tercipta, <br/>
          sungguh bahagia, berirama, bergema. <br/>
          <strong>Kelly</strong>-sama, teruslah meraih mimpi, <br/>
          Selamat ulang tahun, kuasa terindah, sungguh tiada terperi.<br/> <br/>

          Semoga pelangi mewarnai setiap langkahmu, <br/>
          dan bintang-bintang menyinari impianmu. <br/>
          Di hari ulang tahun ini, doa kami menyertai, <br/>
          Semoga bahagia senantiasa menyapa hati. <br/>
        </p>
        <p className="name">- anonym (ehek)</p>
        
        <Birthday/>

      </div>
    </div>
  );
};

export default Card;
