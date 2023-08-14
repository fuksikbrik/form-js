
const buttonAdd = document.querySelector("#add");
const form = document.querySelector('#form')

const arrLoginAndPasword = [];




let verification = () => {
    let loginInput =   document.querySelector('#login').value;
    let paswordInput = document.querySelector('#pasword').value;
    let error = document.querySelector('.error');
    let obj = {};
    if(loginInput == '' || paswordInput == ''){
        error.classList.remove('disabled')
        setTimeout(() => error.classList.add('disabled'), 5000)
    }else{
    
       arrLoginAndPasword.push(obj)
       console.log(arrLoginAndPasword)
    };
    
        
};

buttonAdd.addEventListener('click', verification);

// 1. Инпуты должны принимать значение которое было переданно и выводить в консоль
// 2. значения полученные из пункта 1 должны передаваться в виде обьекта в масив 
// 3***. Если это будет возможно реализовать форму как будто рагистрации и вхождения в личный кабинет( что там будет не знаю но надо что бы для чего-то он был)
// 4. попробовать побаловаться с апишками





   













































// let arr = [
//     //1
//     {
//         question:'',
//         lvl:'',
//         answer:[
//             '',
//             '',
//             '',
//             ''
//         ]
//     },
//     //2
//     {
//         question:'',
//         lvl:'',
//         answer:[
//             '',
//             '',
//             '',
//             ''
//         ]
//     },
//     //3
//     {
//         question:'',
//         lvl:'',
//         answer:[
//             '',
//             '',
//             '',
//             ''
//         ]
//     },
//     //4
//     {
//         question:'',
//         lvl:'',
//         answer:[
//             '',
//             '',
//             '',
//             ''
//         ]
//     },
//     //5
//     {
//         question:'',
//         lvl:'',
//         answer:[
//             '',
//             '',
//             '',
//             ''
//         ]
//     }
// ];


    

   


