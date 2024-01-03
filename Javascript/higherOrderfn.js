// normal code 

// const radius = [2,3,1,5]

// const AreaOfCircle = function (radius){
//     const Output = []
//     for(let i = 0; i<= radius.length; i++){
//         Output.push(Math.PI * radius[i] * radius[i])
//     }
//     return Output;
// }
// console.log(AreaOfCircle(radius));

// const ParameterOfCircle = function (radius){
//     const Output = []
//     for(let i = 0; i<= radius.length; i++){
//         Output.push(2 * Math.PI * radius[i])
//     }
//     return Output;
// }
// console.log(ParameterOfCircle(radius));

// const DimeterOfCircle = function (radius){
//     const Output = []
//     for(let i = 0; i<= radius.length; i++){
//         Output.push(2 * radius[i])
//     }
//     return Output;
// }
// console.log(DimeterOfCircle(radius));


// higher order function 

const radius = [2,3,1,5]

const Area = function (radius){
    return Math.PI * radius * radius
}
const Parameter = function (radius){
    return 2 * Math.PI * radius
}
const Diameter = function (radius){
    return 2 * radius
}

const Result = function (radius,logic){
    const Output = []
    for(let i = 0; i<= radius.length; i++){
        Output.push(logic(radius[i]));
    }
    return Output;
}
console.log(Result(radius, Area));
console.log(Result(radius, Parameter));
console.log(Result(radius, Diameter));