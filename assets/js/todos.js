//Check off todos on click
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});
//Delete todos when bin is clicked
$("ul").on("click", "span" ,function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
       event.stopPropagation(); 
});
//Add new todo in the ul 
$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        var todoText = $("input[type='text']").val();
        $(this).val("") ;
         $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li>");
    }
});
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").toggleClass("hide");
})
