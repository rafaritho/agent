$(function(){
    var btPesquisar = $('#pesquisar');     //submitBtn
    var opPlataforma = $('#plataforma'); //platfromDropDownBtn
    var campoNickname = $('#nickname');    //epicNickName 
    var resultadoNome = $('#resultadoNome');      //results
    var resultadoSolo = $('#resultadoSolo');
    var resultadoDuo = $('#resultadoDuo');
    var resultadoSquad = $('#resultadoSquad');
    var btEnviar = $('#enviar');
    var mensagemBox = $('#mensagemBox');
    var id = $('id');
    

    //valores padrões
    var opcaoPlat = 'pc';
    //var id = dados.stats.accountId;

    //dados que serão enviados pro node 
    btPesquisar.click(function(){
        var dados = {};                    //data
        dados.campoNickname = campoNickname.val().toLowerCase(); 
        dados.opcaoPlat = opcaoPlat.toLowerCase();  //dropDownValue   
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

    btEnviar.click(function(){
        imprimirMensagem();
    });
    function imprimirMensagem(){        
        var mensagem =    
                '<div class = "alert">'              
                '<span class="closebtn" onclick="this.parentElement.style.display=' + 'none' + ';' + '">'
                'X' + '</span>' +
                'This is an alert box.' + '</div>';           
        var modeloMensagem =    
                '<span>' + mensagem + '</span>';

    mensagemBox.html(modeloMensagem);
    }

    opPlataforma.click(function(){
        opcaoPlat = $(this).text();
    });

    function resetarResultados(){
        resultadoNome.html('');
        campoNickname.val('');
        resultadoSolo.html('');
        resultadoDuo.html('');
        resultadoSquad.html('');
        id.html('');
    }

    function mostrarDados(dados){
        var epicUserHandle = dados.epicUserHandle
        var listaSolo =                     
                    '<p>' + 'Vitórias: '                + dados.stats.p2.top1.value + "</p>" +
                    '<p>' + 'Porcentagem de Vitórias: ' + dados.stats.p2.winRatio.value + "</p>" +
                    '<p>' + 'Rank: '                    + dados.stats.p2.top1.rank      + "</p>" +
                    '<p>' + 'K/D: '                     + dados.stats.p2.kd.value     + "</p>" +
                    '<p>' + 'Total de Kills: '          + dados.stats.p2.kills.value    + "</p>" +
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

        var id = 
                        '<ul class = "list-group">' +
                  //'<li class = "list-group-item text-white bg-dark">' + 'Matches: '           + dados.stats.recentMatches.dateCollected  + "</li>" +
                  //'<li class = "list-group-item text-white bg-dark">' + 'Matches: '           + dados.stats.lifeTimeStats.value  + "</li>" +
                  '</ul>';  

                var modelo =    
                        '<h1 class><strong>' + epicUserHandle + '</strong></h1>' +      
                    '</div>';   

                var modelo2 =                         
                        //'<h3>' + 'Solos' + '</h3>' +                         
                        '<span>' + listaSolo + '</span>';
               
                var modelo3 = 
                        //'<h3>' + 'Duos' + '</h3>' +                         
                        '<span>' + listaDuos + '</span>';
                var modelo4 =
                        //'<div class="card text-center text-white bg-dark">' + 
                        //'<h5>' + 'Squad' + '</h5>' + 
                        '<span>' + listaSquad + '</span>' + 
                '</div>' + 
                '</div>';

                var modelo5 =
                        '<div class="card text-center text-white bg-dark">' + 
                        '<h5 class="card-header">' + 'matches' + '</h5>' + 
                        
                        '<p class="card-text">' + id + '</p>' + 
                '</div>' + 
                '</div>';               
                
                

        resultadoNome.html(modelo);
        resultadoSolo.html(modelo2);
        resultadoDuo.html(modelo3);
        resultadoSquad.html(modelo4);
        
    }

});