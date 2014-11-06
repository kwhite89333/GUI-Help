// This script implements simple routing by loading partial HTML files 
// named corresponding to fragment identifiers.

$(document).ready( function() {
	// Remove awkward CSS
	$("li.nav-btn:last").css("border-bottom", "0px");

	//index of cached pages
	var partialCache = {};

	function getContent(fragmentId) {

		// if the page has been previously loaded, load from cache
		if ( partialCache[fragmentId] ) {
			console.log("Perviously Loaded...")
			$("#content").html(partialCache[fragmentId]);

		}
		// if the page hasn't already been loaded, load it
		else {
			// Loads the partial HTML page and adds it into "#content"
		    // @function() "on success" binds/runs page events to the specific page
		    $("#content").load(fragmentId + ".html", function() {
		    	console.log("Not currently cached, loading...")
		    	partialCache[fragmentId] = $("#"+fragmentId+"-div").html();
    		});
		}

		onSuccess(fragmentId);

	}


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

	getContent(fragmentId);

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


//jQuery Extension: returns true if selector exists, false if not
jQuery.fn.exists = function () {
    return this.length !== 0;
}