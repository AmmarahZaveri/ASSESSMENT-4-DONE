const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortunesButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortunes)

class EasyHTTP {
 
  
    async put(url, data) {
  
   
     const response = await fetch(url, {
       method: 'PUT',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
     });
      

     const resData = await response.json();
  
  
     return resData;
   }
 }

