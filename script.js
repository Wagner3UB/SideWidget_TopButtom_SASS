function initWidgetSideMenu(){
  const widgetMenu = document.querySelector(".js_widget");
  const sideMenu = document.querySelector('.js_sideMenu');
  const iconChange = document.querySelector(".js_widget i");
  console.log(iconChange)

  function activeWidget (){
    sideMenu.classList.toggle('ativo');
    iconChange.classList.toggle('ativo');
};
  widgetMenu.addEventListener('click', activeWidget);
};

function initWidgetBackMenu(){
  const widgetBackTop = document.querySelector('.js_widgetBackTop');

  function backTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  widgetBackTop.addEventListener('click', backTop);
};



initWidgetBackMenu();
initWidgetSideMenu();
