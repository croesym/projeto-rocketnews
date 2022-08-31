let email = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let errorMessage = document.querySelector(".errorMessage");
var dados = JSON.parse(localStorage.getItem("dadosemail"));


submitButton.addEventListener("click", (e) => {
    if(email.value == ""){
        errorMessage.textContent = "Por favor, preencha o campo de email!";
    } else if (
        validatorEmail(email.value) === true){
            errorMessage.textContent = "";
            if(dados == null){
                localStorage.setItem("dadosemail", "[]");
                dados = [];
            }
            var auxRegistro = {
                email: email.value
            }
            dados.push(auxRegistro);
            localStorage.setItem("dadosemail", JSON.stringify(dados));
            console.log("Cadastrado com sucesso!");
            alerta()
            email.value="";
        }
        e.preventDefault();
    }
    )

    email.addEventListener("keyup", () => {
        if (validatorEmail(email.value) !== true) {
          errorMessage.textContent = "Insira um email no formato: name@abc.com";
        } else {
          errorMessage.textContent = '';
        }
        });

        function validatorEmail(email) {
            let emailPattern =
              /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
            return emailPattern.test(email);
        } 
        
        function alerta(){
            swal.fire({
                position: 'center',
                icon: 'success',
                background: '#121214',
                title: 'E-mail cadastrado com sucesso!',
                showConfirmButton: false,
                timer: 1500,
                color: '#FFFFFF',
              })
        }