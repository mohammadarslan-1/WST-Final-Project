// Suggestions

const suggestions = [
    "Red Printed T-Shirt",
    "Apple Watch 3.0",
    "Apple Watch series 6",
    "T Shirt for men",
    "T Shirt for boys",
    "T Shirt for grils",
    "Shoes boys jogers",
    "Shoes boys 2021 low price",
    "Shoes boys stylish",
    "Shoes boys 2020"
];

const Search = document.querySelector(".search-input");
const inputBox = Search.querySelector("input");
const suggBox = Search.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let ItemArray = [];
    if(userData){      
        ItemArray = suggestions.filter((data)=>{            
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        ItemArray = ItemArray.map((data)=>{
            return data = `<li>` + data + `</li>`;
        });
        Search.classList.add("active"); //show autocomplete box
        showSuggestions(ItemArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        Search.classList.remove("active"); //hide autocomplete box
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
