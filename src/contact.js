import location from "./location.png";

export function loadContactContent() {
  const content = document.getElementById("content");

  content.innerHTML = `
  <div class="container">
    <div class='contact'>
      <h2 class='contact__title'>contact</h2>
      <p><span>Service options</span>: Dine-in · Takeaway</p>
      <p><span>Address</span>: Tehran Province, Tehran, ranjbar, N Felestin St, PC74+R2R</p>
      <img src="${location}" />
    </div>
  </div>
  `;
}
