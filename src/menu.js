import { div, section, li, ul, p, h3, span, img } from "./hypertext.js";

export default function createMenu() {
  const menuContents = div(
    { class: "container" },
    section(
      { class: "menu-content" },
      ul(
        { class: "menu-list" },
        li(
          { class: "menu-item" },
          img({ class: "menu-item-img" }),
          div(
            { class: "menu-item-text" },
            h3(
              { class: "menu-item-heading" },
              span({ class: "menu-item-name" }, "خوراک کباب کوبیده"),
              span({ class: "menu-item-price" }, "240T")
            )
          ),
          p(
            { class: "menu-item-desc" },
            "کباب کوبیده یک غذای ایرانی محبوب است که از گوشت چرخ‌کرده، پیاز و ادویه‌های خاص تهیه می‌شود. این کباب به شکل استیک بلند و باریک درست و در نارنجی یا گاز پخته می‌شود."
          )
        ),
        li(
          { class: "menu-item" },
          img({ class: "menu-item-img" }),
          div(
            { class: "menu-item-text" },
            h3(
              { class: "menu-item-heading" },
              span({ class: "menu-item-name" }, "خوراک جوجه کباب"),
              span({ class: "menu-item-price" }, "240T")
            )
          ),
          p(
            { class: "menu-item-desc" },
            "جوجه کباب، گوشت مرغ با ادویه‌ها، بر روی سیخ پخته شده، طعمی خوشمزه و معطر از غذاهای محبوب ایرانی"
          )
        ),
        li(
          { class: "menu-item" },
          img({ class: "menu-item-img" }),
          div(
            { class: "menu-item-text" },
            h3(
              { class: "menu-item-heading" },
              span({ class: "menu-item-name" }, "خوراک کباب برگ"),
              span({ class: "menu-item-price" }, "370T")
            )
          ),
          p(
            { class: "menu-item-desc" },
            "کباب برگ، یک غذای ایرانی سنتی است که از تکه‌های نازک گوشت (معمولاً گوشت گوسفند یا گوساله)، به همراه ریزه‌های پنیر و ادویه‌های خاص، بین برگ‌های تره تهیه می‌شود. سپس بر روی آتش یا گاز پخته می‌شود"
          )
        )
      )
    )
  );

  return menuContents;
}
