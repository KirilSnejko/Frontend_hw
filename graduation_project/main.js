document.addEventListener('DOMContentLoaded', function() {
  let flipMenus = document.querySelectorAll('.flipMenu');

  document.addEventListener('click', function(event) {
    flipMenus.forEach(function(menu) {
      if (!menu.contains(event.target) && !menu.parentElement.contains(event.target)) {
        menu.classList.remove('active');
      }
    });
  });

  flipMenus.forEach(function(menu) {
    menu.parentElement.addEventListener('click', function(event) {
      event.stopPropagation(); // предотвращаем всплытие события
      
      // Скрываем все открытые меню перед открытием текущего
      flipMenus.forEach(function(m) {
        if (m !== menu) {
          m.classList.remove('active');
        }
      });

      // Переключаем активность текущего меню
      menu.classList.toggle('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
  let anglesDown = document.querySelector('#logAndSearchHeader i.fa-solid.fa-angles-down');
  anglesDown.addEventListener('click', function() {
    let logAndSearchHeader = document.getElementById('logAndSearchHeader');
    logAndSearchHeader.classList.toggle('show-all');
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  let butMenu = document.querySelector('#navHeader .fa-bars');
  butMenu.addEventListener('click', function() {
    let navHeader = document.getElementById('navHeader');
    navHeader.classList.toggle('show-all');
  });
});








