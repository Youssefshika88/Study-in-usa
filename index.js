// index.js
const modal = document.getElementById("applicationModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("applicationForm");

openBtn.onclick = () => { modal.style.display = "flex"; }
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("✅ تم إرسال طلبك بنجاح!");
  form.reset();
  modal.style.display = "none";
});
