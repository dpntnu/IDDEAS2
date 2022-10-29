const NO = "Norsk";
const EN = "English";
const LANG = "lang";
document.addEventListener("DOMContentLoaded", function(){
     
     const lang = localStorage.getItem(LANG);
     switchLanguage(lang);
     document.getElementById('myLanguage').childNodes.forEach((e, i, a) => {
          console.log(e.value,lang);
          if (e.value == lang) {
              e.selected = "selected";
          }
      });
   });
function switchLanguage(value) {
    
     localStorage.setItem(LANG, value)

     if (value === EN) {
          var a = document.getElementById('Navbar-ContentEnglish');
          var b = document.getElementById('Navbar-ContentNorsk');

          var x = document.getElementById('RootBody-ContentEnglish');
          var y = document.getElementById('RootBody-ContentNorsk');


          x.style.display = a.style.display = 'block';
          y.style.display = b.style.display = 'none';
     } else {
          var a = document.getElementById('Navbar-ContentEnglish');
          var b = document.getElementById('Navbar-ContentNorsk');

          var x = document.getElementById('RootBody-ContentEnglish');
          var y = document.getElementById('RootBody-ContentNorsk');

          x.style.display = a.style.display = 'none';
          y.style.display = b.style.display = 'block';

     }
}