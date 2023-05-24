function showDate(){
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += 'Дата и время для русской локали: ' + today.toLocaleString ('ru-RU')+ '<br>';
    out.innerHTML += 'Дата и время для локали Румынии: ' + today.toLocaleString ('ro-RO')+ '<br>';
    out.innerHTML += 'Дата и время для локали Индии: ' + today.toLocaleString('sa-IN') + '<br>';
    out.innerHTML += 'Дата и время для локали Уэльса:  ' + today.toLocaleString('cy-GB')+ '<br>';
    out.innerHTML += 'Дата и время для локали Гонконга: ' + today.toLocaleString('zh-HK')+ '<br>';
}

function showDate (){

}

function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let output = document.getElementById('result');
    output.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function cleanDaysCount() {
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value = '';
    let output = document.getElementById('result');
    output.innerHTML = '';
}