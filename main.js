let today = moment();
let weekViewElement =document.getElementById("weekView")
console.log(weekViewElement)

for (let i = 0; i < 5 ; i++ ){
 let dayDivElement= document.createElement('div')
 if(i +1===today.day()){
     dayDivElement.textContent = `TODAY:${today.date()}.${today.month()+1}`
 }
 else{
     let day =today.clone().add(i -today.day(), 'day')
     dayDivElement.textContent = `${day.date()}.${day.month() +1}`
 }
 dayDivElement.classList.add('day')
 weekViewElement.appendChild(dayDivElement)

}