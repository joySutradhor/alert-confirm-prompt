


const alertBox = () => {
    const x = alert("hello Browser");
    console.log(x);
    
}
const confirmBox = () => {
    const x = confirm("Love me");
    console.log(x);
    x==false? confirm("thik kore bolo") : alert("ole ole babu ta") ;
    x==false? confirm("thik kore bolo") : alert("ole ole babu ta") ;
    x==false? confirm("thik kore bolo") : alert("ole ole babu ta") ;
    x==false? confirm("thik kore bolo") : alert("ole ole babu ta") ;
    
}
const promptBox = () => {
    let x = prompt("nm ki tor");
    console.log(x)
    x === null || x === "" ? prompt("nm bol sala") : alert("good boy ");
    
}