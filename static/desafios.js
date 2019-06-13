$(function(){
    var btDesafio = $('#desafio');     //submitBtn  
    var resultadoDesafios = $('#resultadoDesafios')
   
    //items que serão enviados pro node 
    btDesafio.click(function(){
        /*return fetch(`https://api.fortnitetracker.com/v1/challenges`, {
            method: 'GET',
            headers: {
                'TRN-Api-Key': apikey
            },*/
        var items = {};                    
        $.ajax({
            type: "POST",
            url: "https://api.fortnitetracker.com/v1/store",
            headers: {
                'TRN-Api-Key': 'a768e120-a23b-4880-a2a3-fdbdda42c52a'
            },
            dataType: 'json',
            data : items,
            success : function(items){      //se tiver sucesso executar a função
                items = JSON.parse(items);
                mostraritems(items);        //displayData
            } 
        });
        resetarResultados(); //quando o usuário clicar em pesquisar ele reseta
    });

    function resetarResultados(){        
        resultadoDesafios.html('');
    }

    function mostraritems(items){
       
        var listaDesafios =                     
                    '<p class data-aos="fade-left"' + 
                    'data-aos-offset="200" data-aos-delay="100" data-aos-duration="500">'+
                    + 'Desafios:'  + items + '</p>';               
       
           
                var ModeloDesafios =                                           
                        '<span>' + listaDesafios + '</span>';      
                        
        var modeloErro =  '<p class data-aos="fade-left" ' + 
        'data-aos-offset="200" data-aos-delay="100" data-aos-duration="500">'+
        + 'API em manutenção</p>'

        resultadoDesafios.html(ModeloDesafios);           
    }

});