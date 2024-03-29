import { div, p, h2, section } from "./hypertext.js";

export default function createContacts() {
  const contactsContent = div(
    { class: "container" },
    section(
      {},
      h2({ class: "contact-title" }, "تماس"),
      div(
        { class: "contact-container" },
        p({ class: "manager-name" }, "ممد بوقی"),
        p({ class: "manager-title" }, "مدیریت"),
        p({ class: "manager-phone-number" }, "555-222-333")
      )
    )
  );

  return contactsContent;
}
