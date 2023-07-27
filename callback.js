let obj ={
    function1 : function(){
        return console.log("First function")
    },
    function2: () => {
        return console.log("Second function")
    },
    function3(){
        return console.log("third function")
    }
}  
obj.function1()
obj.function2()
obj.function3()

function sum(first, second){
    return first + second
}
function sub(first, second){
    return first - second;
}
function opreation(first, second, opCallback){
    return `[${opCallback(first,second)}]`
}console.log(opreation(5,2,sum))

console.log(opreation(6,4,(first, second)=>{
    return first + second;
}))