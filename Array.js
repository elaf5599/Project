// ForEach function
const colors = ['red','green','blue','green']
colors.forEach(function(currentValue, index, array){
    console.log(currentValue , index)
})


// Some function
const ages=[11,13,26,15,12]
const hasAdult=ages.some(function(element){
    return element >=18
})
console.log(hasAdult);

//Evere function
const ages2=[21,23,27,25,22]

const areAdults=ages2.every(function(element){
    return element <= 18
})
console.log(areAdults);

//Includes function
const isContainRed= colors.includes('red')
console.log(isContainRed);

//IndexOf function
const index = colors.indexOf('green')
console.log(index);

//LastindexOg functoin
const index1= colors.lastIndexOf('green')
console.log(index1);

//Findindex function
const ages3=[12,14,19,21]
const indexx= ages3.findIndex(function(element){
    return element >= 18
})
console.log(indexx)

//Find function
const number1=[11,7,9,15]
const el = number1.find(function(element){
    return element % 3 === 0
})
console.log(el);

//Filter function
const number2=[2,3,7,4,9]
const evenNumbers= number2.filter(function(currentValue){
    return currentValue % 2 === 0
})
console.log(evenNumbers);

//Concat function
const primaryColors=['red','yellow', 'blue']
const secondryColors=['green','orange','violet']

const colors3=primaryColors.concat(secondryColors)
console.log(colors3)

//Join function
const strColor=['red','green', 'blue']
const  arrColor = strColor.join('-')
console.log(arrColor);

//Sort function
const colorr=['red', 'black', 'green', 'white', 'blue']
const numberr1=[921,735,840]
colorr.sort()
console.log(colorr);
numberr1.sort()
console.log(numberr1)

//Revese function
colorr.reverse()
console.log(colorr);

//Map function
const numbeer=[3,7,9]
const sequreNumber = numbeer.map(function(currentValue){
return currentValue * currentValue
})
console.log(sequreNumber);

//Split function
const ccolors='red green blue black'
const  acolor=ccolors.split(' ')
console.log(acolor);

//Reduce function
const NNumberr =[2,4,1,3,5]
const total = NNumberr.reduce(function(accomulater, currentValue, index ,array){
    return accomulater+currentValue
})
console.log(total);