// التحكم في المودال
const modal = document.getElementById("applicationModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("applicationForm");

openBtn.onclick = () => { modal.style.display = "flex"; }
closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// معالجة الفورم
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("✅ شكراً لك! تم استلام طلبك وسيتم التواصل معك قريباً.");
  form.reset();
  modal.style.display = "none";
});
