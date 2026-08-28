const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const copyPhoneButton = document.querySelector(".copy-phone");
const contactFeedback = document.querySelector(".contact-feedback");

copyPhoneButton?.addEventListener("click", async () => {
  const phone = copyPhoneButton.dataset.phone;

  try {
    await navigator.clipboard.writeText(phone);
    copyPhoneButton.textContent = "已复制";
    contactFeedback.textContent = "电话号码已复制到剪贴板";
  } catch {
    contactFeedback.textContent = `请手动复制：${phone}`;
  }

  window.setTimeout(() => {
    copyPhoneButton.textContent = "复制号码";
    contactFeedback.textContent = "";
  }, 2400);
});
