// This script implements simple routing by loading partial HTML files 
// named corresponding to fragment identifiers.

$(document).ready( function() {

  // Sets the "active" class on the active navigation link.
  function setActiveLink(fragmentId) {
    $("#nav-table li.nav-btn").each( function (i, linkElement) {
      var link = $(this).find("a");
      var pageName = link.attr("href").substr(1);

      if (pageName === fragmentId) {
        link.addClass("active");
      } 
      else {
        link.removeClass("active");
      }
    });
  }

  // Binds page specfic events to newly loaded pages
  function onSuccess(fragmentId) {
  	if (fragmentId === "home") {

  	}
  	else if (fragmentId === "big-fudge") {

  	}
  	else if (fragmentId === "houses") {
  		//Fill in the house's specific name
  		var strName = $("img.img-format:first").attr("data-name");
  		$("#house-name").text(strName);
  		//Bind click events to tiny images
  		$("img.img-format").bind("click", function() {
  			var strImg = $(this).attr("src");
  			$("#main-img").attr("src", strImg);
  			var strNewName = $(this).attr("data-name");
  			$("#house-name").text(strNewName);
  		});
  	}
  	else {
  		alert("Error!");
  	}
  }

  // Updates dynamic content based on the fragment identifier.
  function navigate() {

    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    var fragmentId = location.hash.substr(1);

    //loads partial html fragment and inserts into the DOM,
    //jQuery.load also does its own caching
	$("#content").load(fragmentId + ".html", function() {
    	onSuccess(fragmentId);
	});

    // Toggle the "active" class on the link currently navigated to.
    setActiveLink(fragmentId);

  }

  // If no fragment identifier is provided,
  if(!location.hash) {

    // default to #home.
    location.hash = "#home";
  }

  // Navigate once to the initial fragment identifier.
  navigate();

  // Navigate whenever the fragment identifier value changes.
  $(window).bind('hashchange', navigate);

}); //end of $(document).ready