 const enddate= "22 march 2022 10:00 pm"
 document.getElementById('end-date').innerText = enddate;


 function clock(){
    const end = new  Date(endDate)
    const now = new  Date()
    const diff = (end - now)/1000;
    console.log(diff);
    console.log(math.floor(diff/3600/24));
    //convert intondays
    

 }
 clock()