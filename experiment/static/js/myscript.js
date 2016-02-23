/**
 * Created by Ludwig on 2016-02-16.
 */
$( document ).ready(function(){

    $('.top-menu a').on('click', (function(event){
        alert('Clicked an a');
    }));

    $('main.content a').on('click', function(event){
        var url = $(this).attr('href');
        $.get(url, function(data){
            $('main.content').html(data);
        });
        event.preventDefault();
    });

    /*$('main.content td').on('click', function(){
        alert("click td");
        $(this).css("background-color","red" );
    }); */
});