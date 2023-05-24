function showDate(){
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += 'Дата и время для русской локали: ' + today.toLocaleString ('ru-RU')+ '<br>';
    out.innerHTML += 'Дата и время для локали Румынии: ' + today.toLocaleString ('ro-RO')+ '<br>';
    out.innerHTML += 'Дата и время для локали Индии: ' + today.toLocaleString('sa-IN') + '<br>';
    out.innerHTML += 'Дата и время для локали Уэльса:  ' + today.toLocaleString('cy-GB')+ '<br>';
    out.innerHTML += 'Дата и время для локали Гонконга: ' + today.toLocaleString('zh-HK')+ '<br>';
}