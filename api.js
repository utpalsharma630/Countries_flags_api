function dataLoad(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => dataDisplay(data))
    
}
const dataDisplay = (countrys) => {
    const Country1 = document.getElementById('Country')
    countrys.forEach(field => {
        const div = document.createElement('div')
        
        div.innerHTML=`
        <h2>${field.name.common}</h2>
        <img src="${field.flags.png}" alt="">
        
        <button onclick='singleCountry("${field.name.common}")'>Details</button>
        `
        Country1.appendChild(div)
    });
}
const div = document.createElement('div')
function singleCountry(id){
    const Country2 = document.getElementById('Country2')
    fetch(`https://restcountries.com/v3.1/name/${id}`)
    .then(res => res.json())
    .then(data=> {
        
        div.innerHTML=`
        <h2>${data[0].name.common}</h2>
        <img src="${data[0].flags.png}" alt="">
        <a href="${data[0].maps.openStreetMaps}">Location</a>
        `
        
        Country2.appendChild(div)
        
    });
    window.scrollTo(0, 0);
    
}

dataLoad()
