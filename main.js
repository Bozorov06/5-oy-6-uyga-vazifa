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
    <td><button class="deleteBtn">O'chirish</button></td>
    `;
     document.querySelector("#tablee tbody").appendChild(newtr)

     newtr.querySelector(".deleteBtn").addEventListener("click", function() {
    newtr.remove();
     })
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value= "";
    document.querySelector("#email").value= "";
})


// 2. Rang tanlash paneli va jonli ko‘rinish
// Tavsif: Formada rang tanlash uchun color turi maydoni va Matn maydoni bo‘lsin.
// Talablar:
// Foydalanuvchi rangni tanlaganida, matn maydonidagi matn fonining rangi avtomatik o‘zgaradi.
// Foydalanuvchi matnni o‘zgartirsa, bu matn darhol rangli blokda aks etadi.

const colorr = document.getElementById("colorr");
const textInput = document.getElementById("textInput");
const colorBlock = document.getElementById("colorBlock");

colorr && colorr.addEventListener("input", function () {
  const selectColor = colorr.value; 
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
const forma = document.querySelector("#forma")
const content = document.querySelector("#content")
const element = document.querySelector("#element")
const buton = document.querySelector("#buton");
const block = document.querySelector("#block");


buton && buton.addEventListener("click",function(event){
  event.preventDefault();

  let contentText = content.value;
  let selectedElement = element.value;

  let created = document.createElement(selectedElement)
  created.innerHTML = contentText
  block.appendChild(created)
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
