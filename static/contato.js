console.log('It works')

$(document).ready(function() {
    $('.submit').click(function(event) {
        event.preventDefault() //não mandar até que seja validado 
        console.log('Clicked button')

        var nome =     $('.nome').val()
        var email =    $('.email').val()
        var mensagem = $('.mensagem').val()
        var statusElm =   $('.status').val() 

        if(email.lenght>5 && email.includes('@') && email.includes('.')){         
          console.log('Email válido')
        }else{
          event.preventDefault()
          console.log('Email inválido') 
        }

        
    })
})