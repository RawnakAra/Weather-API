const from = document.querySelector('.top-banner from'),
    input = document.querySelector('.top-banner input'),
    msg = document.querySelector('.top-banner .msg'),
    list = document.querySelector('.ajax-section .cities'),
    listItems = list.querySelectorAll('.ajax-section .city'),
    listItemsArray = Array.from(listItems),
    apiKey =  '2cae4caef40635500e6dd127a8ac9a9e';

async function getInfo(inputVal){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`  
    const urlData = await(await fetch(url)).json();
    contiesData =  urlData.forEach(val =>{
        return {
            main : val.main,
            name : val.name,
            sys : val.sys,
            weather : val.weather
        }
    })  
}
console.log(getInfo('london'));

function creatNewElement (){
    const 
}
// function getInfo(e) {
//     e.preventDefault();
//     let inputVal = input.value;
//     // console.log(inputVal)
//     //   if(listItemsArray > 0 ){
//     //       const filteredArray = listItemsArray.filter(el =>{
//     //           let content = '';

//     //       })
//     //   }

// }

//from.addEventListener('submit',getInfo)