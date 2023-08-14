
const buttonAdd = document.querySelector("#add");
const form = document.querySelector('#form')

const arrLoginAndPasword = [
        {
            login:'t-rex1',
            password:'password1'
        },
        {
            login:'t-rex2',
            password:'password1'
        },
        {
            login:'t-rex3',
            password:'password1'
        },
        {
            login:'t-rex4',
            password:'password1'
        },
        {
            login:'t-rex5',
            password:'password1'
        },
        {
            login:'t-rex6',
            password:'password1'
        },
        {
            login:'t-rex7',
            password:'password1'
        },
        {
            login:'t-rex8',
            password:'password1'
        },
        {
            login:'t-rex9',
            password:'password1'
        },
        {
            login:'t-rex0',
            password:'password1'
        }
        
];




let verification = () => {
    let loginInput =   document.querySelector('#login').value;
    let passwordInput = document.querySelector('#pasword').value;
    let error = document.querySelector('.error-login');
    let errorEmptyForm = document.querySelector('.form-empty')
    let obj = {};
    if(loginInput == '' || passwordInput == ''){
        error.classList.remove('disabled')
        setTimeout(() => error.classList.add('disabled'), 5000)
    }if(loginInput == String && passwordInput == ''){
        errorEmptyForm.classList.remove('disabled')
        setTimeout(() => errorEmptyForm.classList.add('disabled'), 5000)
    }if(loginInput == '' && passwordInput == String){
        errorEmptyForm.classList.remove('disabled')
        setTimeout(() => errorEmptyForm.classList.add('disabled'), 5000)
    }if(loginInput !== '' && passwordInput !== ''){
       obj = {login: loginInput, password: passwordInput}
       console.log(arrLoginAndPasword)
       return arrLoginAndPasword.push(obj)
    };

   
    
        
};

buttonAdd.addEventListener('click', verification);

// 1. Инпуты должны принимать значение которое было переданно и выводить в консоль //complited
// 2. значения полученные из пункта 1 должны передаваться в виде обьекта в масив  //complited
// 3***. Если это будет возможно реализовать форму как будто рагистрации и вхождения в личный кабинет( что там будет не знаю но надо что бы для чего-то он был)
// 4. попробовать побаловаться с апишками
// 5. Сделать страничку на которой можно будет сделать форму регистарции и что бы там 
// можно было пушить в масив полный набор данных и что бы с него можно было считывать данные для входа  в систему
// 6. сделать плашку что не верный пароль и проверки которые будут логикой данной плашки  




   













































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


    

   


