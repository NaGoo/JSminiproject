const time=document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');

const showAmPm=true;

function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec= today.getSeconds();


    const amPm = hour >=12 ? 'PM' : 'AM';
    hour=hour % 12  || 12;


    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : '' }`;
    setTimeout(showTime,1000);
}
function addZero(n){
    return (parseInt(n,10)<10 ? '0':'')+n;
}
function setBgGreet(){
    let a=new Date(),
    hour=a.getHours();

    if(hour<12){
      document.body.style.backgroundImage="url('./pics/mar.png')";
      greeting.textContent='Good Morning';
      document.body.style.color='green';

    }else if(hour<18){
        document.body.style.backgroundImage="url('./pics/af.png')";
        greeting.textContent='Good Afternoon';
      document.body.style.color='yellow';

    } else {
        document.body.style.backgroundImage="url('./pics/eve.png')";
        greeting.textContent='Good Evening';
        document.body.style.color='white';
    }

}
function getName(){
    if(localStorage.getItem('name')===null){
         name.textContent='[Enter Name]';
        
    }else{
        name.textContent=localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type==='keypress'){
       if(e.which==13 || e.keyCode==13){
        localStorage.setItem('name',e.target.innerText);
        name.blur();
       }
    }else{
        localStorage.setItem('name',e.target.innerText);
    }
}

function getAim(){
    if(localStorage.getItem('aim')===null){
         aim.textContent='[Enter aim]';
        
    }else{
        aim.textContent=localStorage.getItem('aim');
    }
}
function setAim(e){
    if(e.typr==='keypress'){
       if(e.which==13 || e.keyCode==13){
        localStorage.setItem('aim',e.target.innerText);
        aim.blur();
       }
    }else{
        localStorage.setItem('aim',e.target.innerText);
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
aim.addEventListener('keypress',setAim);
aim.addEventListener('blur',setAim);



showTime();
setBgGreet();
getName();
getAim();