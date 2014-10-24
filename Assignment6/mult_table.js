$(document).ready( function() {
  $("#m_form").submit( function() {
    
  	$("#result").empty(); //reset the table
  	$("#error").css("visibility", "hidden");

  	//value is max - min + 1 (+1 due to inclusive range)
    var columns = ($("#max_h").numVal() - $("#min_h").numVal()) + 2;
    var rows = ($("#max_v").numVal() - $("#min_v").numVal()) + 2;

    //check for hipster values
    if ( $("#max_h").numVal() < $("#min_h").numVal() || $("#max_h").numVal() < $("#min_h").numVal() ) {
    	$("#error").css("visibility", "visible");
    	return;
    }
    
    var appendStr = ""; //assign appendStr as a string

    //2 for loops iterate and concat table rows and columns to "appendStr"
    //which is appended to the DOM when all "tr's" and "td's" are added
    for( var i = 0; i < Math.abs(rows); i++){
    	
    	appendStr = appendStr.concat("<tr>");
	     
		for( var j = 0; j < Math.abs(columns); j++){

			if ( i === 0 && j === 0 ) {
				//do nothing - top left corner
				//add empty cell
				appendStr = appendStr.concat("<th></th>");
			}

			else if ( i === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( ( j-1 + $("#min_h").numVal() ).toString() );
				appendStr = appendStr.concat("</th>");
			}

			else if ( j === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( (i-1 + $("#min_v").numVal() ).toString() );
				appendStr = appendStr.concat("</th>");
			}

			else {
				appendStr = appendStr.concat("<td>");
				appendStr = appendStr.concat( ((i-1 + $("#min_v").numVal() ) * (j-1 + $("#min_h").numVal() )).toString() );
				appendStr = appendStr.concat("</td>");
			}

		}
     	appendStr = appendStr.concat("</tr>");
    }

    $("#result").append(appendStr); //append the DOM (only once for performance reasons)

  });
   
});


//return a input tag's value as a number(or int)
jQuery.fn.numVal = function() {
	return parseInt($(this).val());
}