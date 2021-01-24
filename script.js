function countDown(){
    const months = document.getElementById('months'),
        days = document.getElementById('days'),
        hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds');

    const daysNum = (m,y) => {return new Date(y, m, 0).getDate()};
    const date = new Date();
    months.innerHTML = format(12-(date.getMonth()+1));
    days.innerHTML = format((daysNum(date.getMonth(), date.getFullYear()))-date.getDate());
    if(date.getMinutes() == 0){
        hours.innerHTML = format(24-date.getHours());
    }else{
        hours.innerHTML = format(24-date.getHours()-1);
    }
    (date.getSeconds() == 0) ? minutes.innerHTML = format(60-date.getMinutes()):minutes.innerHTML = format(60-date.getMinutes()-1);
    (date.getSeconds() == 0) ? seconds.innerHTML = format(date.getSeconds()):seconds.innerHTML = format(60-date.getSeconds());
    function format(time){
        return time < 10 ? `0${time}`:time;
    }
}
setInterval(countDown, 1000);