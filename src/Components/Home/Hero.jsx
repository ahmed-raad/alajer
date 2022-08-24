import React from "react";
import GoBtn from "./GoBtn";
import "../../Components/css/Home.css";

function Hero() {
  return (
      <span id="paragraph">
        <div>
          <span id="sec1-h">
            <p>
              محتار و عندك شغلة؟
              <br />
              !لا تفكر و لا تحتار
              <br />
              ويانه تحصل أفضل المحترفين بالعراق
            </p>
          </span>
          <GoBtn btnId="sec1-btn" btnLink="/offers" btnLabel="ابحث هنا !" />
        </div>
      </span>
  );
}

export default Hero;
