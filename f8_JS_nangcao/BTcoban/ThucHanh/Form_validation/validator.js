//Đối tượng validator
function Validator(options) {
    var selectorRules = {};


    function validate(inputElement, rule) {
        //value: inputElement.value
        ///test function: rule.test
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errMessage;
        //Lấy ra các rules của selector
        var rules  = selectorRules[rule.selector];
        //Lặp qua từng rule & kiểm tra
        //Nếu có lỗi thì dừng ngay
        for (var i = 0; i<rules.length; i++) {
            errMessage = rules[i](inputElement.value);
            if(errMessage) break; //vd nhập lại mk có 2 lỗi thì break từ lỗi đầu tiên

        } 

        if(errMessage) {
            errorElement.innerText = errMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    var formElement = document.querySelector(options.form);
    if(formElement)
    {
        options.rules.forEach(rule => {
            //Lưu lại các rule cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }


            //lấy đc id: rule.selector
            var inputElement = formElement.querySelector(rule.selector);
            //parentElement: Lấy ra element cha từ element con
            if(inputElement) {
                //XỬ lý blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }
                //Xử lý trường hợp khi người dùng đang nhập 
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }        
        });
    }
}
//Định nghĩa rules
//Khi có lỗi => message lỗi
//Khi hợp lệ => undefined
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        //Kiểm tra người dụng đã nhập chưa
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }  
}
Validator.isMail = function(selector) {
    return {
        selector: selector,
        //Kiểm tra có phải mail  hay kh
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email'
        }

    }
}
Validator.minLength = function(selector,min) {
    return {
        selector: selector,
        //Kiểm tra có nhập đung chưa
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
        }

    }
}

Validator.isConfirmed = function(selector,getConfirmValue,message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }

    }

}