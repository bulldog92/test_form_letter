(function(){
         $("#form-letter").validate({
       rules:{
                first_name:{
                required: true,
                minlength: 3,
                maxlength: 25,
            },

            last_name:{
                required: true,
                minlength: 3,
                maxlength: 25,
            },
            
            email:{
              email: true,
              required: true,
            },
            
            password:{
              equalTo: '#confirm_password',
              minlength: 3,
                maxlength: 25,
                required: true,
            },
            
            confirm_password:{
                equalTo: '#confirm_password',
              minlength: 3,
                maxlength: 25,
                required: true,
            },
            
            phone:{
                digits: true,
            },
            zip_code:{
                digits: true,
            },
            gend:{
                required: true,
            },
            dob:{
                date: true,
            }
       }
    });        
}) ();
    