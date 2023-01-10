const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//////////////////////////////////////////////////////////

const fortunesBtn = document.getElementById("fortunesButton")

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortunesBtn.addEventListener('click', getFortunes)
/////////////////////////////////////////////////////////////
const quotesBtn = document.getElementById("quotesButton")

const getQuotes = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

quotesBtn.addEventListener('click', getQuotes)
///////////////////////////////////////////////////////////////
const emotionsBtn = document.getElementById("emotionsButton")

const getEmotions = () => {
    axios.get("http://localhost:4000/api/emotion/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

emotionsBtn.addEventListener('click', getEmotions)

//////////////////////////////////////////////////////////
document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const movie = document.createElement('li')

  const list = document.querySelector("ul");
  list.appendChild(movie);



  inputField.value = ''
}
