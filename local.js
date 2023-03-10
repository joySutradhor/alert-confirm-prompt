
const set = () =>{
    localStorage.setItem("joy", 100);
}
const get = () =>{
  const x =  localStorage.getItem("joy");
  console.log(JSON.parse(x));
}
const update = () =>{
    const obj = {name : "joy", age:25, roll:35};
    const objString = JSON.stringify(obj);
  const x =  localStorage.setItem("joy", objString);
  
}

const remove = () => {
    const x = localStorage.removeItem("joy")
    console.log(x);
}

const index = () => {
    const x = localStorage.key(0);
    console.log(x);
}

const clears = () => {
    console.log("clicked")
    localStorage.clear();
}