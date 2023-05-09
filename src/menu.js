import joj from "./food2.jpg";
import kob from "./food1.jpg";

export function loadMenuContent() {
  const content = document.getElementById("content");

  content.innerHTML = `
	<div class='menu'>
		<h2 class='menu__title'>Menu</h2>
		<ul class='menu__items'>
			<li class='menu__item item'>
				<img src="${joj}" width="30%" class='joj food'>
				<h3>جوجه کباب</h3>
				<p><span class="price">تومان</span>
				50,000</p>
			</li>
			<li class='menu__item item'>
				<img src="${kob}" width='30%' class='kob food'>
				<h3>چلو کباب کوبیده</h3>
				<p><span class="price">تومان</span>
				60,000 </p>
			</li>
		</ul>
	</div>
  `;
}
