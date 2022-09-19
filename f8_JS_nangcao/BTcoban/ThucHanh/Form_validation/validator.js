//Đối tượng validator
function Validator(options) {
    function validate(inputElement, rule) {
        //value: inputElement.value
        ///test function: rule.test
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errMessage = rule.test(inputElement.value);
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
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
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