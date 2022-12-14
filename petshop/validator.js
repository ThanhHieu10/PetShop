function Validator(options)
   { 
      var formElement = document.querySelector(options.form);
      console.log(options.rules);
      if (formElement) {
         options.rules.forEach(function (rule){

            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
               inputElement.onblur= function (){
                  console.log(rule);
               }
            }
         })
      }
  
    }
    // Định nghĩa rule
   Validator.isEmail = function(selector) {
      return {
         selector: selector,
         test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'

         }
      };

   }
   function myfunction() {
      alert("Đăng ký thành công");
      
   }