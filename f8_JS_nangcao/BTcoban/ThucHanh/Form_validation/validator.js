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
                inputElement.onblur = function() {
                    validate(inputElement, rule);
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
            return value.trim() ? undefined : 'vui lòng nhập trường này'

        }

    }
    
}
Validator.isMail = function(selector) {
    return {
        selector: selector,
        //Kiểm tra có phải mail  hay kh
        test: function() {
            
        }

    }
    
}