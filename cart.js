

const addProducts = () => {
    const name = document.getElementById("name");
    const quantity = document.getElementById("quantity");
    const nameValue = name.value ;
    const quantityValue = quantity.value ;
    showUi(nameValue , quantityValue) ;
    showLocalStorage(nameValue , quantityValue) ;
    
    name.value = "";
    quantity.value = "";
}

const showUi = (name,quantity)=>{
    const ul = document.getElementById("ulList");
    const li = document.createElement("li");
    li.innerText = `${name} ${quantity} `
    ul.appendChild(li);
}

const getValue = () => {
    let obj = {};
    const storeValue = localStorage.getItem("joy");
    if(storeValue){
         obj = JSON.parse(storeValue);
        
    }
return obj ;
}

const showLocalStorage = (name , quantity) =>{
    const value = getValue();
    value[name] = quantity ;
   const string =  JSON.stringify(value)
    localStorage.setItem("joy", string )
}

const showFromLocal = ()=>{
    const getValues = getValue();
    for(const value in getValues){
        const  x = getValues[value]
        showUi(value , x);
    }
}