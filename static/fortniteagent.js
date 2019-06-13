$(function(){
    var btPesquisar = $('#pesquisar');     //submitBtn
    var campoNickname = $('#nickname');    //epicNickName 
    var resultadoNome = $('#resultadoNome');      //results
    var resultadoSolo = $('#resultadoSolo');
    var resultadoDuo = $('#resultadoDuo');
    var resultadoSquad = $('#resultadoSquad'); 
    var resultadoLifetime = $('#resultadoLifetime');

    //valores padrões
    var opcaoPlat = 'pc';
    //var id = dados.stats.accountId;

    //dados que serão enviados pro node 
    btPesquisar.click(function(){
        var dados = {};                    //data
        dados.campoNickname = campoNickname.val().toLowerCase(); 
        dados.opcaoPlat = opcaoPlat.toLowerCase(); 
        //lowercase = caixa baixa para não dar erros
        //chamada ajax para mandar os dados para o backend
        $.ajax({
            type: "POST",
            url: "/",
            dataType: 'json',
            data : dados,
            success : function(dados){      //se tiver sucesso executar a função
                dados = JSON.parse(dados);
                mostrarDados(dados);        //displayData
            } 
        });
        resetarResultados(); //quando o usuário clicar em pesquisar ele reseta
    });

    function resetarResultados(){
        resultadoNome.html('');
        campoNickname.val('');
        resultadoSolo.html('');
        resultadoDuo.html('');
        resultadoSquad.html('');
        resultadoLifetime.html('');
    }

    function mostrarDados(dados){
        var epicUserHandle = dados.epicUserHandle
        var listaSolo =                     
                    '<p>' + 'Vitórias: '                + dados.stats.p2.top1.value + '</p>' +
                    '<p>' + 'Porcentagem de Vitórias: ' + dados.stats.p2.winRatio.value + '</p>' +
                    '<p>' + 'Rank: '                    + dados.stats.p2.top1.rank      + '</p>' +
                    '<p>' + 'K/D: '                     + dados.stats.p2.kd.value     + '</p>' +
                    '<p>' + 'Total de Kills: '          + dados.stats.p2.kills.value    + '</p>' +
                    '<p>' + 'Kills por jogo: '          + dados.stats.p2.kpg.value      + '</p>';
                   

        var listaDuos = 
                    '<p>' + 'Vitórias: '                + dados.stats.p10.top1.value + "</p>" +
                    '<p>' + 'Porcentagem de Vitórias: ' + dados.stats.p10.winRatio.value + "</p>" +
                    '<p>' + 'Rank: '                    + dados.stats.p10.top1.rank      + "</p>" +
                    '<p>' + 'K/D: '                     + dados.stats.p10.kd.value     + "</p>" +
                    '<p>' + 'Total de Kills: '          + dados.stats.p10.kills.value    + "</p>" +
                    '<p>' + 'Kills por jogo: '          + dados.stats.p10.kpg.value      + '</p>';

        var listaSquad = 
                  '<p>' + 'Vitórias: '                + dados.stats.p9.top1.value     + "</p>" +
                  '<p>' + 'Porcentagem de Vitórias: ' + dados.stats.p9.winRatio.value + "</p>" +
                  '<p>' + 'Rank: '                    + dados.stats.p9.top1.rank      + "</p>" +
                  '<p>' + 'K/D: '                     + dados.stats.p9.kd.value     + "</p>" +
                  '<p>' + 'Total de Kills: '          + dados.stats.p9.kills.value    + "</p>" +
                  '<p>' + 'Kills por jogo: '          + dados.stats.p9.kpg.value      + "</p>";  

        /*var listaLifetime =
                '<p>' + dados.stats.lifeTimeStats.key  + "</p>" +  
                '<p>' + dados.stats.lifeTimeStats.value  + "</p>"; */

        var ModeloNome =    
                        '<h1 class data-aos="fade-left' + 
                        'data-aos-offset="200" data-aos-delay="100" data-aos-duration="500">'+
                        '<strong>' + epicUserHandle + '</strong></h1>' +      
                    '</div>';   

        var ModeloSolo =                         
                        '<span>' + listaSolo + '</span>';               
        var ModeloDuo =                                           
                        '<span>' + listaDuos + '</span>';
        var ModeloSquad =
                        '<span>' + listaSquad + '</span>' + 
                '</div>' + 
                '</div>';

        /*var ModeloLifetime = '<span>' + listaLifetime + '</span>' + 
        '</div>' + 
        '</div>';
*/


        resultadoNome.html(ModeloNome);
        resultadoSolo.html(ModeloSolo);
        resultadoDuo.html(ModeloDuo);
        resultadoSquad.html(ModeloSquad);   
        //resultadoLifetime.html(ModeloLifetime);       
    }

});