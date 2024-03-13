$("#mySumbitId").on("submit", function(e) {
    e.preventDefault();
    $("#emailError").html("")
    $("#passwordError").html("")
    // const [email, password] = e.target;
    // console.log(email.value, password.value);

    const form = new FormData(e.target)
    const email = form.get("email");
    const password = form.get("password");
    let hasError = false;// state of error

    if(!email){
        $("#emailError").html("Please enter a email.");
        hasError=true;
    }else if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        $("#emailError").html("Please enter a valid email address")
        hasError=true;
    }
    if(!password){
        $("#passwordError").html("Please enter a password");
        hasError=true;
    }



    if(hasError===false){
        console.log("Ready to login");
        const url = "...";
        const data = {"email": email,"password": password};

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function(arg) {
                console.log(arg);
                if(arg.success===true){
                    alert("Success!");
                }else if(arg.success===false){
                    alert(arg.msg);
                }
            },
            error:function(xhr, status, error){                
                alert(error);
            },

            dataType: "json"
          });


    }






    
})


// const url = "...";
// const data = {"email": "injilovesphp@gmail.com","password": "123456"};



// $.ajax({
//     type: "POST",
//     url: url,
//     data: data,
//     success: function(arg) {
//         console.log(arg);
//     },
//     dataType: "json"
//   });

