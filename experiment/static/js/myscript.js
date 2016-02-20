/**
 * Created by Ludwig on 2016-02-16.
 */
$( document ).ready(function(){

    $('.top-menu a').on('click', (function(event){
        alert('Clicked an a');
    }));

    $('main.content a').on('click', function(event){
        $.get('/exp/ms', function(data){
            $('main.content').html(data);
        });
    });

    $('main.content td').on('click', function(){
        alert("click td");
        $(this).css("background-color","red" );
    });
});