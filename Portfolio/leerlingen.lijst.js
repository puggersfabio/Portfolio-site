document.addEventListener('DOMContentLoaded', function(){
    fetch('http://tricology.nl/leerlingen.json')
    .then(response => response.json())
    .then(data => {
        let fetchInfo = ''
        for(i = 0; i < data.length; i++){
        fetchInfo +=  `${data[i].naam} </br> ${data[i].achternaam}, </br> ${data[i].startjaar}`
     }
        document.querySelector('.Delijst').innerHTML = fetchInfo;
        }
    )
    }); 