function notifyMe() {
    // Проверяем наличие Notification API в браузере
    if (!("Notification" in window)) {
      console.log("Нет поддержки Notification API");
  
    // Если Notification API и разрешение на отправку
    // есть, то отправим уведомление
    } else if (Notification.permission === "granted") {
       new Notification("Показ уведомлений разрешен");
  
    // Если Notification API есть, но нет разрешения и нет
    // запрета, то можно запросить разрешение
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission()
        .then(function (permission) {
           if (permission === "granted") {
             var notification = new Notification("Показ уведомлений разрешен");
           }
        });
     }
    // Последний случай - пользователь запретил уведомления
    // Тогда показать уведомления нельзя
  }

  notifyMe();

  
  const btn = document.querySelector('.btn');
  const screnWidth = window.screen.width;
  const screenHeight = window.screen.height;


  btn.addEventListener('click', () => {
    alert('Размер экрана ' + screnWidth + ' x ' + screenHeight)
  })