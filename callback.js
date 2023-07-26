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