import React from "react";

export default function BodyBanner({ globe, wave }) {
  return (
    <div className="body-banner">
      <div className="body-banner-text">
        <div className="body-banner-header">
          <img src={wave} alt="wave gif" />
          <h1>News From Around The World</h1>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit
          delectus sunt esse asperiores accusantium itaque non, magni veritatis
          eveniet adipisci molestiae sequi fugit illo quam repellat suscipit?
          Dolores, sed. Ea amet repellendus odio cum culpa tempore dicta tempora
          asperiores totam blanditiis fugit doloremque beatae sapiente accusamus
          commodi, aut possimus nisi veniam optio soluta atque! Reiciendis
          ducimus nihil harum atque! Rerum ea consequuntur molestias expedita
          doloremque itaque dignissimos, nisi illum, quo vitae temporibus
          deserunt. Iusto suscipit similique ab facilis magnam recusandae, fuga
          ullam at labore, voluptatibus velit incidunt ipsa fugit.
        </p>
      </div>
      <div className="body-banner-img">
        <img src={globe} alt="Globe pic" />
      </div>
    </div>
  );
}
