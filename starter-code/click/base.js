console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function(event){
       	 $('ul').append("<li>" + this.text + " at " + Date.now());
    	})
})
