var destinationDate= new Date('Jan 1, 2022 00:00:00').getTime();

function newYear(){
    var now=new Date().getTime();

    var gap= destinationDate-now;

    var days= Math.floor(gap/(24*60*60*1000));
    var hours=Math.floor((gap%(24*60*60*1000)/(1000*60*60)));
    var minutes=Math.floor(gap%(1000*60*60)/(1000*60));
    var seconds=Math.floor(gap%(1000*60)/1000);

    document.getElementById('days').innerText=days;
    document.getElementById('hours').innerText=hours;
    document.getElementById('minutes').innerText=minutes;
    document.getElementById('seconds').innerText=seconds;

}

setInterval(function(){
    newYear();
},1000);
















