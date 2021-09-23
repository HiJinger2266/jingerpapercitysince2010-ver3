//一個刻度deg=6度
const deg=6;
const hr=document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');

setInterval(() => {

    //產生角度，*30的意思是一個小時佔30度
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    //產生旋轉
    hr.style.transform = `rotateZ(${(hh)+(mm/12)+(ss/720)}deg)`;
    mn.style.transform = `rotateZ(${(mm)+(ss/60)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

})

//Reference: https://youtu.be/weZFfrjF-k4