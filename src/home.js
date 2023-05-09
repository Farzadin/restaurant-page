import restaurant from "./restaurant.jpg";

export function loadHomeContent() {
  const content = document.getElementById("content");
  content.innerHTML = `
  <section class='home'>

    <div class='welcome'>
      <h2>food <em class='love'>made with love</em></h2>
      <p>
        Indulge your taste buds with our mouth-watering dishes prepared by our
        talented chefs. Our restaurant offers an intimate and comfortable
        atmosphere where you can enjoy a memorable dining experience with your
        friends and family.
      </p>
      <a href="#" class='btn'>order now</a>
    </div>

    <div class='image'>
      <img src='${restaurant}' />
    </div>

  </section>
  `;
}
