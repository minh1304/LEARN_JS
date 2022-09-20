function Validator(formSelector) {
    var formRules = {}
    /*
    * Quy ước tạo  rule:
    * - Nếu có lỗi thì return `error message`
    * -Nếu không có lỗi thì return undefine
    *
    */
   var validatorRules = {
        required
   }
    var formElement = document.querySelector(formSelector);
    if(formElement) {
        var inputs = formElement.querySelectorAll('[name],[rules]');
        for (var input of inputs) {
            formRules[input.name] = input.getAttribute('rules');

        }
        console.log(formRules);
    }  


}