function res() {
  a=1*document.forma1.text1.value;
  b=1*document.forma1.text2.value;
  c=1*document.forma1.text3.value;
  time=1*document.forma1.time.value;
  sum=a+b+c;
  var text1=' Сумма набранных баллов: '
  var text2='\n Поздравляем! У Вас феноменальные зрительная и слуховая память и логическое мышление.';
  if (sum<=30) text2='\n К сожалению, ваш результат - минимальный. Вам стоит потренироваться';
  else if(sum<=60&&sum>30) text2='\n Неплохо! Но вы можете заставить отделы вашего мозга работать ещё лучше. ';
  else if(sum<=100&&sum>60) text2='\n У вас хорошо развиты зрительная и слуховая память и логическое мышление. ';
  var text3='\n Проверьте, станут ли ваши результаты лучше после регулярного выполнения нашей гимнастики.';
  if (time==3||time==4) text3='\n Мы очень рады, что Вам понравилась разработанная нами гимнастика. Надеемся, что вы продолжите заниматься и дальше. ';
  var message=text1+sum+text2+text3;
  alert (message);
}
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }
