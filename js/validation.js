function setMaxDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    today = year + '-' + month + '-' + day;
    document.getElementById("datepicker").setAttribute("max", today);
}

function validate() {
    var inpObj = document.getElementById("firstName");
    if (!inpObj.checkValidity()) {
        document.getElementById("firstNameErr").innerHTML = "Вводить можно только буквы (длина 2-20 символов)";
    } else {
        document.getElementById("firstNameErr").innerHTML = "";
    }
    inpObj = document.getElementById("lastName");
    if (!inpObj.checkValidity()) {
        document.getElementById("lastNameErr").innerHTML = "Вводить можно только буквы (длина 2-20 символов)";
    } else {
        document.getElementById("lastNameErr").innerHTML = "";
    }
    inpObj = document.getElementById("email");
    if (!inpObj.checkValidity()) {
        document.getElementById("emailErr").innerHTML = "Email введен в неверном формате";
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }
    inpObj = document.getElementById("userName");
    if (!inpObj.checkValidity()) {
        document.getElementById("userNameErr").innerHTML = "Вводить можно только латинские буквы (длина 5-12 символов)";
    } else {
        document.getElementById("userNameErr").innerHTML = "";
    }
    inpObj = document.getElementById("password");
    if (!inpObj.checkValidity()) {
        document.getElementById("passwordErr").innerHTML = "Пароль должен иметь хотя бы 1 цифру, 1 строчную, 1 прописную латинскую букву (длина 8-16 символов)";
    } else {
        document.getElementById("passwordErr").innerHTML = "";
    }
}

// (function() {
//     'use strict'
//     window.addEventListener('load', function() {
//         var forms = document.getElementsByClassName('needs-validation')
//         Array.prototype.filter.call(forms, function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
//     }, false)
// })()

// function valid() {
//     // var numbers = /^[0-9][0-9\s]*$/;
//     var letters = /^[A-Za-z-А-Яа-я][A-Za-z-А-Яа-я\s]*$/;
//     var password = document.getElementById('password').value;
//     if (!document.getElementById('firstName').value.match(letters)) {
//         alert("Имя может содержать только буквы");
//         return false;
//     }
//     if (!document.getElementById('lastName').value.match(letters)) {
//         alert("Фамилия может содержать только буквы");
//         return false;
//     }

//     if (!(password.match(/[a-z]/g) && password.match(/[A-Z]/g) &&
//             password.match(/[0-9]/g))) {
//         alert("Пароль должен содержать цифры и буквы нижнего и верхнего регистров");
//         return false;
//     }
//     if (password.length < 8 || password.length > 16) {
//         alert("Пароль должен содержать от 8 до 16 символов");
//         return false;
//     }
//     var userName = document.getElementById('userName').value;
//     if (userName.length < 5 || userName.length > 12) {
//         alert("Логин должен содержать от 5 до 12 символов");
//         return false;
//     }
//     return true;
// }

// $(function() {
//     $("form[name='inputForm']").validate({
//         rules: {
//             userName: {
//                 minlength: 5,
//                 maxlength: 12
//             },
//             password: {
//                 minlength: 8,
//                 maxlength: 16
//             }
//         },
//         messages: {
//             userName: {
//                 minlength: "Минимальная длина имени пользователя 5 символов",
//                 maxlength: "Максимальная имени пользователя пароля 12 символов"
//             },
//             password: {
//                 minlength: "Минимальная длина пароля 8 символов",
//                 maxlength: "Максимальная длина пароля 16 символов"
//             }
//         },
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });
// });