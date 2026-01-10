function searchphone() {
    let input = document.getElementById('search').value.toLowerCase();
    let phones = document.getElementsByClassName("phone-card");
    let found = 0;
    
    for (let i = 0 ; i<phones.length; i++) {
        let name = phones[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (name.includes(input)) {
            phones[i].style.display = "block";
            found++;
        } else {
            phones[i].style.display = "none";
        }
    }
    if (found === 0 ) {
        document.getElementById('noresults').style.display = "block";
        found++;
        
    } else {
        document.getElementById("noresults").style.display = "none";
    }
}

// oder button
    document.getElementById('oder-form').style.display = "grid";
    const form = document.getElementById('oder-form');
    form.classList.add('showform');
    
    //change prices per phone 
    let selectedphone = "";
    let selectedprice = 0;
    
//dropdown price change 
accnumber = document.getElementById('accnumber');
accnumber.addEventListener('input', ()=> {
            document.getElementById('validating').style.display = "flex";
            setTimeout(() => {
                document.getElementById('validating').style.display='none';
            }, 1000);
        })

//hide 
function closeform() {
    document.getElementById("oder-form").style.display = "none";
    
}
function validateform(){
    
    const accnumber = document.getElementById('accnumber').value.trim();
    const  cmf = document.getElementById('conf');
    
    
    if ( accnumber == "" || accnumber.length !== 10 ) {
       // window.addEventListener(  "DOMContentLoaded",   ()   => {})
        document.getElementById('wrongnu').style.display="flex";

        //listen to when someone is typing and then act like its validating 
        
        setTimeout(()=> {
         document.getElementById('wrongnu').style.display='none';
        },3020);
        
        return false;
        
    } else {
       document.getElementById('wrongnu').style.display='none';
        return true;
        
    }
    
}
// update prices
//document.getElementById('formprice').textContent = selectedprice.value;
//document.getElementById('formphone').textcontent = selectedphone.value;

//scripts for profile

//count down scripts 
                                                                                                                               
document.addEventListener('DOMContentLoaded', function()  { 

 let endtime = localStorage.getItem('countdownend')   
 if (!endtime) {

  endtime = new Date().getTime() +5  * 60 * 1000 ;
  localStorage.setItem('countdownend', endtime);
  
} else {
    endtime = Number(endtime);
}

const countdown = document.getElementById('countdown');

const timer = setInterval(()  => {
    const now = new Date().getTime();
    const distance = endtime - now ;
    if (distance <= 0) {
        clearInterval(timer);
        countdown.innerText = "time is up";
        
        return;
    }
    let minutes = Math.floor(distance / 600000)
    const seconds = Math.floor((distance % 60000) / 1000);
    countdown.innerText =  String(minutes).padStart(2, '0') + ":" + 
    String(seconds).padStart(2, '0') ;

     console.log(minutes, seconds);
     if ( minutes == 5 ) {

     }
}, 1000) ;
  
  });

//complete cost
function cost() 
{
    const confmsg = document.getElementById('confirm-msg');
    confmsg.style.display= 'flex';
   // closeform()
   // setTimeout(()  => {
     //   confmsg.style.display='none';
//    },1000)
}