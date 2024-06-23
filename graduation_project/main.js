document.addEventListener('DOMContentLoaded', function() {
  const navHeaderPanel = document.getElementById('navHeaderPanel');
  const asideNavs = document.querySelectorAll('.asideNav');
  let currentActiveMenu = null;

  asideNavs.forEach(nav => {
    nav.addEventListener('click', function() {
      const flipMenu = nav.querySelector('.flipMenu');

      if (currentActiveMenu === flipMenu) {
        flipMenu.classList.remove('active');
        navHeaderPanel.style.opacity = '0';
        currentActiveMenu = null;
        asideNavs.forEach(nav => nav.classList.remove('active-button'));
      } else {
        document.querySelectorAll('.flipMenu').forEach(menu => menu.classList.remove('active'));
        flipMenu.classList.add('active');
        navHeaderPanel.style.opacity = '0.5';
        currentActiveMenu = flipMenu;
        asideNavs.forEach(nav => nav.classList.remove('active-button'));
        nav.classList.add('active-button');
      }
    });
  });

  let anglesDown = document.querySelector('#logAndSearchHeader i.fa-solid.fa-angles-down');
  anglesDown.addEventListener('click', function() {
    let logAndSearchHeader = document.getElementById('logAndSearchHeader');
    logAndSearchHeader.classList.toggle('show-all');
  });

  let butMenu = document.querySelector('#navHeader .fa-bars');
  butMenu.addEventListener('click', function() {
    let navHeader = document.getElementById('navHeader');
    navHeader.classList.toggle('show-all');
  });
});



  
    







