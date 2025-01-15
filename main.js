// 1. Forma asosida dinamik jadval yaratish
// Tavsif: Foydalanuvchi forma maydonlariga o‘z ma’lumotlarini (ism, familiya, email) kiritadi va Qo‘shish tugmasini bosganda, ushbu ma’lumotlar jadvalga qo‘shiladi.
// Qo‘shimcha talablar:
// Jadvaldagi har bir satr oxirida O‘chirish tugmasi bo‘lsin.
// O‘chirish tugmasi bosilganda, tegishli satr o‘chiriladi.

const form = document.querySelector('#form')
const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const email = document.querySelector('#email').value

form && form.addEventListener('submit', function(e){
    e.preventDefault();

    const newtr = document.createElement("tr");
    newtr.innerHTML =
   `<td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td><button class="deleteBtn">O'chirish</button></td>`;
     document.querySelector("#tablee tbody").appendChild(newtr)

     newtr.querySelector(".deleteBtn").addEventListener("click", function() {
    newtr.remove();
     })
    document.querySelector("#firstName").value= "";
    document.querySelector("#lastName").value= "";
    document.querySelector("#email").value= "";
})


// 2. Rang tanlash paneli va jonli ko‘rinish
// Tavsif: Formada rang tanlash uchun color turi maydoni va Matn maydoni bo‘lsin.
// Talablar:
// Foydalanuvchi rangni tanlaganida, matn maydonidagi matn fonining rangi avtomatik o‘zgaradi.
// Foydalanuvchi matnni o‘zgartirsa, bu matn darhol rangli blokda aks etadi.

const color = document.getElementById("color");
const textInput = document.getElementById("textInput");
const colorBlock = document.getElementById("colorBlock");

color && color.addEventListener("input", function () {
  const selectColor = color.value; 
  colorBlock.style.backgroundColor = selectColor; 
});

textInput.addEventListener("input", function () {
  colorBlock.textContent = textInput.value; 
});


// 3. To‘ldirilmagan maydonlarni belgilash
// Tavsif: Formada 5 ta majburiy maydon bo‘lsin.
// Talablar:
// Yuborish tugmasini bosganda, to‘ldirilmagan maydonlar qizil hoshiyaga ega bo‘lsin.
// To‘g‘ri to‘ldirilgan maydonlar yashil hoshiyaga ega bo‘lsin.
const frommm = document.querySelector('#formm')

frommm && frommm.addEventListener('submit', function(e){
    e.preventDefault();

    const inputs = document.querySelectorAll('.required')
    inputs.forEach(function(input){
        if (input.value.trim()== '') {
            input.classList.add("error");
            input.classList.remove("correct");
        }else{
              input.classList.add("correct");
              input.classList.remove("error");
        }
    });
});



// 4. Qidiruv natijalarini dinamik ko‘rsatish
// Tavsif: Foydalanuvchi formadagi Qidiruv maydoniga ma’lumot kiritganda, jadvaldagi qatorlar qidiruv so‘ziga mos ravishda filtrlanadi.
// Talablar:
// Mos kelmaydigan qatorlar yashiriladi.
// Qidiruv real vaqt rejimida ishlashi kerak.

const btn = document.getElementById("search")
btn && btn.addEventListener("input", function () {
  let searchValue = this.value.toLowerCase(); 
  let rows = document.querySelectorAll("#table tbody tr"); 

  rows.forEach(function (row) {
    let tds = row.getElementsByTagName("td"); 
    let found = false;

    for (let i = 0; i < tds.length; i++) {
      if (tds[i].textContent.toLowerCase().includes(searchValue)) {
        found = true;
        break; 
      }
    }

    if (found) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});


// 5. Dynamic Element Yaratish
// Tavsif: Foydalanuvchi formadagi Element turi (masalan, <div>, <p>) va Element mazmuni maydonlariga ma’lumot kiritsa, Yaratish tugmasi bosilganda shu element sahifada paydo bo‘lsin.
// Qo‘shimcha talablar:
// Yaratilgan elementga avtomatik stil qo‘llansin (masalan, fon rangi, chekka, kenglik va h.k.).




//  6. Slider yaratish va boshqarish
// Tavsif: Foydalanuvchi formadagi Rasm URL maydoniga rasm linkini kiritib, Qo‘shish tugmasini bossin.
// Talablar:
// Kiritilgan rasmni dinamik slayderga qo‘shish.
// Oldingi va Keyingi tugmalari orqali slayderni boshqarish. 





/* 7. Interaktiv ishlar ro‘yxati (To-Do List)
Tavsif: Formada foydalanuvchi bajariladigan ishlarni kiritadi va Qo‘shish tugmasini bossa, ro‘yxatga yangi ish qo‘shiladi.
Qo‘shimcha talablar:
Har bir ishni o‘chirish uchun O‘chirish tugmasi.
Ish bajarilganligini belgilash uchun Checkbox. */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
updateUI();

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (!taskText) return;
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  updateUI();
}

function updateUI() {
  const taskContainer = document.getElementById("tasks");
  const doneContainer = document.getElementById("done-tasks");
  const taskCount = document.getElementById("task-count");
  const doneCount = document.getElementById("done-count");

  taskContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  const toDoTasks = tasks.filter((task) => !task.completed);
  const doneTasks = tasks.filter((task) => task.completed);

  taskCount.textContent = toDoTasks.length;
  doneCount.textContent = doneTasks.length;

  toDoTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskContainer.appendChild(taskElement);
  });

  doneTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskElement.classList.add("completed");
    doneContainer.appendChild(taskElement);
  });
}

function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskText = document.createElement("span");
  taskText.textContent = task.text;

  const completeButton = document.createElement("button");
  completeButton.textContent = "done";
  completeButton.onclick = () => {
    task.completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateUI();
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.onclick = () => {
    tasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateUI();
  };

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(completeButton);
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}




/* 8. Shaxsiylashtirilgan salomlashuv yaratish
Tavsif: Formada foydalanuvchi o‘z ismi va jinsini tanlashi kerak.
Talablar:
Salomlashish tugmasini bossa, foydalanuvchiga Assalomu alaykum, [Ism]! yoki Salom, [Ism]! matni ko‘rsatiladi.
Salomlashuv shakli foydalanuvchining tanlangan jinsi asosida o‘zgaradi. */

const formm = document.querySelector("#foorm")

formm && formm.addEventListener('submit',function(e){
e.preventDefault();
const name = document.querySelector("#name").value;
const gender = document.querySelector("#gender").value;

let greeting = ''

if (name.trim() == '') {
    alert('Iltimos, Ismingizni kiriting!')
    return;
}
if (gender == 'Erkak') {
    greeting = `Assalomu alekum,Mr.${name}!`
}else if (gender == 'Ayol') {
    greeting = `Salom,Ms.${name}!`;
}

document.getElementById('message').textContent = greeting

})

/* 9. Jonli hisoblagich
Tavsif: Formada ikkita son kiritish maydoni (Son 1, Son 2) va Operatsiya (masalan, qo‘shish, ayirish) tanlash uchun select bo‘lsin.
Talablar:
Foydalanuvchi maydonlarni to‘ldirganda va operatsiyani tanlaganda, natija avtomatik ko‘rsin.
Natija hisoblagichning oxirida alohida matnda ko‘rsin. */





/* 10. Savdo savatchasi (Shopping Cart)
Tavsif: Foydalanuvchi formadagi Mahsulot nomi, Narxi va Soni maydonlarini to‘ldirib, Qo‘shish tugmasini bossa, savatchaga mahsulot qo‘shiladi.
Qo‘shimcha talablar:
Savatchadagi mahsulotlar jadvalda ko‘rsin.
Har bir mahsulot uchun O‘chirish va Tahrirlash tugmalari bo‘lsin.
Savatchaning umumiy narxi jadval ostida ko‘rsin. */
