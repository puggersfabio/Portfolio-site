var lijstje = [];

function onStartUp()
{
   var n = localStorage.getItem("todoitem");
    

   if(n != null)
   {
        lijstje = JSON.parse(n);  
   }

   ShowLijstje();
}

function ShowLijstje()
{
    var txt = "";

    for(var n = 0; n < lijstje.length; n = n + 1)
    {
        txt = txt + lijstje[n] + "<br>";
    }

    var todolist = document.getElementById('todolist');

    todolist.innerHTML = txt;
}

document.addEventListener('DOMContentLoaded', onStartUp);

function SlaTekstOp()
{     
    var txt = document.getElementById('todotxt').value;

    lijstje.push(txt);

    var omgezettetxt = JSON.stringify(lijstje);

    localStorage.setItem("todoitem", omgezettetxt);

    ShowLijstje();
}

