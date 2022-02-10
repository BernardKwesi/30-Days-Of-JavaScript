//console.log(countries)
//alert('Open the console and check if the countries has been loaded')
const countriesAPI = 'https://restcountries.com/v2/all'

const fetchData = async () => {
    try {
      const response = await fetch(countriesAPI)
      const countries = await response.json()
      for (i in countries){
        let languages ='' ;
        for(j in countries[i].languages){
            languages += countries[i].languages[j].name + ' ,';
        }

         let country = {
             name : countries[i].name ,
             capital:countries[i].capital,
             languages : languages,
             population : countries[i].population,
             area : countries[i].area
         } 
          console.log(country)
      }
      //console.log(JSON.stringify(countries))
     
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  //fetchData()


  // catsAPI
let catName =[];
  const catsAPI = 'https://api.thecatapi.com/v1/breeds';
  const fetchCatData = async ()=>{
    try{
    const response = await fetch(catsAPI);
    const data = await response.json();
  
    for(i in data){
      catName.push(data[i].name)
    }
    }catch(err){
      console.error(err);
    }
  }
  //fetchCatData();
  console.log(catName);