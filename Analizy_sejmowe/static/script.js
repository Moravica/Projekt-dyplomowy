function loadContent(page, options) {
    alert('Funkcja loadContent() została wywołana!');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            document.getElementById('opcje').innerHTML = '';
            JSON.parse(options).forEach(function (option) {
                var opt = document.createElement('option');
                opt.value = option;
                opt.innerHTML = option;
                document.getElementById('opcje').appendChild(opt);
            });
        })
        .catch(error => console.error('Błąd ładowania zawartości:', error));
}
