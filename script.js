$(document).ready(function(){
    //Write all your jQuery code here
        $("button").click(function() {
      $("#like").html("You like this project!");
    });
  
  $(window).scroll(function() {
      console.log($(this));
  })
    
    
});