//CLIENTE
function readClient(){
    //FUNCTION GET
    $.ajax({
        url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',
        success : function(clientes) {
            let cs=clientes.items;
            $("#listClients").empty();      
                
                for(i=0;i<cs.length;i++){                            
                    $("#listClients").append("<tr id='"+i+"'><th scope='row' colspan='2' class='text-center'id='idC'>"+cs[i].id+"</th>"+"<td colspan='3' class='text-center' id='nombre'>"+cs[i].name+"</td><td colspan='3' class='text-center' id='correo'>"+cs[i].email+"</td><td colspan='2' class='text-center' id='edad'>"+cs[i].age+"</td><td colspan='2' class='text-center'> <button id='btnEditar' onclick='llenarModal("+i+")' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modalCliente'>Editar</button><a>  </a><button class='btn btn-danger' onclick='deleteClient("+cs[i].id+")'>Borrar</button></td></tr>");
    
                }            
            
        },
        error : function(xhr, status) {
        alert('Ha sucedido un problema');
        }
        });    
    }
    
    function llenarModal(i){
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'GET',
            dataType : 'json',
            success : function(clientes) {
                let cs=clientes.items;
                $("#idEditar").val(cs[i].id);
                $("#nombreEditar").val(cs[i].name);
                $("#correoEditar").val(cs[i].email);
                $("#edadEditar").val(cs[i].age);         
            },
            error : function(xhr, status) {
            alert('Ha sucedido un problema');
            }
            });    
    }
    
    
    
    
    function saveClient(){
        let id=$("#idCliente").val();
        let nombre=$("#nombreCliente").val();
        let correo=$("#correoCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:id,
            name:nombre,
            email:correo,
            age:edad
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'POST',
            data:dataToSend,
            contentType:'application/json',
    
            success : function(json) {
                $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#correoCliente").val("");
                $("#edadCliente").val("");           
            },
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            },
            complete: function(){
                readClient();
            }
        });
    
    }
    
    function updateClient(){
        let idC=$("#idEditar").val();
        let nombre=$("#nombreEditar").val();
        let correo=$("#correoEditar").val();
        let edad=$("#edadEditar").val();
    
        let data={
            id:idC,
            name:nombre,
            email:correo,
            age:edad
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'PUT',
            data:dataToSend,
            contentType:'application/json',
    
            success : function(json) {
                $('#modalCliente').modal('hide');           
            },
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            },
            complete: function(){
                readClient();
            }
        });
    
    }
    
    function deleteClient(idCliente){
    
        let data={
            id:idCliente
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'DELETE',
            data:dataToSend,
            contentType:'application/json',
    
            complete: function(){
                readClient();
            },
    
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            }       
        });
    
    }
    
    //MENSAJE
    function readMessage(){
        //FUNCTION GET
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'GET',
            dataType : 'json',
            success : function(mensajes) {
                let cs=mensajes.items;
                $("#listMessages").empty();       
    
                    
                    for(i=0;i<cs.length;i++){                            
                        $("#listMessages").append("<tr id='"+i+"'><th scope='row' colspan='5' class='text-center'id='idM'>"+cs[i].id+"</th>"+"<td colspan='5' class='text-center' id='mensaje'>"+cs[i].messagetext+"</td><td colspan='2' class='text-center'> <button id='btnEditar' onclick='llenarModalMessage("+i+")' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modalMensaje'>Editar</button><a>  </a><button class='btn btn-danger' onclick='deleteMessage("+cs[i].id+")'>Borrar</button></td></tr>");
        
                    }            
                
            },
            error : function(xhr, status) {
            alert('Ha sucedido un problema');
            }
            });    
        }
    
        function llenarModalMessage(i){
            $.ajax({
                url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
                type : 'GET',
                dataType : 'json',
                success : function(mensajes) {
                    let cs=mensajes.items;
                    $("#idEditarMessage").val(cs[i].id);
                    $("#mensajeEditar").val(cs[i].messagetext);      
                },
                error : function(xhr, status) {
                alert('Ha sucedido un problema');
                }
                });    
        }
    
    
    function saveMessage(){
        let id = $("#idMensaje").val();
        let mensaje = $("#mensajeTexto").val();
    
        let data = {
            id:id,
            messagetext:mensaje
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'POST',
            data:dataToSend,
            contentType:'application/json',
    
            success : function(json) {
                console.log(data);
                $("#idMensaje").val("");
                $("#mensajeTexto").val("");
            },
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            },
            complete: function(){
                readClient();
            }
        });
    
    }
    
    function updateMessage(){
        let idM=$("#idEditarMessage").val();
        let mensaje=$("#mensajeEditar").val();
    
        let data={
            id:idM,
            messagetext:mensaje,
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'PUT',
            data:dataToSend,
            contentType:'application/json',
    
            success : function(json) {
                $('#modalMensaje').modal('hide');           
            },
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            },
            complete: function(){
                readMessage();
            }
        });
    
    }
    
    function deleteMessage(idMensaje){
    
        let data={
            id:idMensaje
        };
    
        let dataToSend=JSON.stringify(data);
    
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'DELETE',
            data:dataToSend,
            contentType:'application/json',
    
            complete: function(){
                readMessage();
            },
    
            error : function(xhr, status) {
            //alert('Ha sucedido un problema');
            }       
        });
    
    }
    
    //Órtesis
    function readOrtesis(){
        //FUNCTION GET
        $.ajax({
            url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
            type : 'GET',
            dataType : 'json',
            success : function(clientes) {
                let cs=clientes.items;
                $("#listOrtesis").empty();      
                    
                    for(i=0;i<cs.length;i++){                            
                        $("#listOrtesis").append("<tr id='"+i+"'><th scope='row' colspan='1' class='text-center'id='idO'>"+cs[i].id+"</th>"+"<td colspan='3' class='text-center' id='marca'>"+cs[i].brand+"</td><td colspan='2' class='text-center' id='modelo'>"+cs[i].model+"</td><td colspan='1' class='text-center' id='categoria'>"+cs[i].category_id+"</td><td colspan='3' class='text-center' id='nombre'>"+cs[i].name+"</td><td class='text-center'> <button id='btnEditar' onclick='llenarModalOrtesis("+i+")' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modalOrtesis'>Editar</button><a>  </a><button class='btn btn-danger' onclick='deleteOrtesis("+cs[i].id+")'>Borrar</button></td></tr>");
        
                    }            
                
            },
            error : function(xhr, status) {
            alert('Ha sucedido un problema');
            }
            });    
        }
        
        function llenarModalOrtesis(i){
            $.ajax({
                url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
                type : 'GET',
                dataType : 'json',
                success : function(clientes) {
                    let cs=clientes.items;
                    $("#idEditarOrtesis").val(cs[i].id);
                    $("#marcaEditar").val(cs[i].brand);
                    $("#modeloEditar").val(cs[i].model);
                    $("#catIdEditar").val(cs[i].category_id);
                    $("#nombreOrtesisEditar").val(cs[i].name);         
                },
                error : function(xhr, status) {
                alert('Ha sucedido un problema');
                }
                });    
        }
        
        
        
        
        function saveOrtesis(){
            let id=$("#idOrtesis").val();
            let marca=$("#marcaOrtesis").val();
            let modelo=$("#modeloOrtesis").val();
            let categoriaId=$("#categoriaIdOrtesis").val();
            let nombre=$("#nombreOrtesis").val();
        
        
            let data={
                id:id,
                brand:marca,
                model:modelo,
                category_id:categoriaId,
                name:nombre
            };
        
            let dataToSend=JSON.stringify(data);
        
            $.ajax({
                url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
                type : 'POST',
                data:dataToSend,
                contentType:'application/json',
        
                success : function(json) {
                    $("#idOrtesis").val("");
                    $("#marcaOrtesis").val("");
                    $("#modeloOrtesis").val("");
                    $("#categoriaIdOrtesis").val("");
                    $("#nombreOrtesis").val("");           
                },
                error : function(xhr, status) {
                //alert('Ha sucedido un problema');
                },
                complete: function(){
                    readOrtesis();
                }
            });
        
        }
        
        function updateOrtesis(){
            let id=$("#idEditarOrtesis").val();
            let marca=$("#marcaEditar").val();
            let modelo=$("#modeloEditar").val();
            let categoriaId=$("#catIdEditar").val();
            let nombre=$("#nombreOrtesisEditar").val();
        
            let data={
                id:id,
                brand:marca,
                model:modelo,
                category_id:categoriaId,
                name:nombre
            };
        
            let dataToSend=JSON.stringify(data);
        
            $.ajax({
                url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
                type : 'PUT',
                data:dataToSend,
                contentType:'application/json',
        
                success : function(json) {
                    $('#modalOrtesis').modal('hide');           
                },
                error : function(xhr, status) {
                //alert('Ha sucedido un problema');
                },
                complete: function(){
                    readOrtesis();
                }
            });
        
        }
        
        function deleteOrtesis(idOrtesis){
        
            let data={
                id:idOrtesis
            };
        
            let dataToSend=JSON.stringify(data);
        
            $.ajax({
                url : 'https://g1baabd5adf77c9-dbg3mt.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/orthesis/orthesis',
                type : 'DELETE',
                data:dataToSend,
                contentType:'application/json',
        
                complete: function(){
                    readOrtesis();
                },
        
                error : function(xhr, status) {
                //alert('Ha sucedido un problema');
                }       
            });
        
        }