$(document).ready(function () {
  
$(".share").click((e)=>{


$(".icon").css("display","block")

e.stopImmediatePropagation();
})
$(".fa-share").parents().click((e)=>{

  
$(".icon").css("display","none")
e.preventDefault();
})

});