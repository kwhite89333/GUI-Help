$(document).ready( function() {

	$("#m-form").submit( function() {
		$("#p-wrapper p").addClass("hide");

		var inStr = $("#m-input").val();

		setTimeout(  function() {
			(inStr === "Kdubzz fo life") ? $("#pass").removeClass("hide") : $("#fail").removeClass("hide");
		}, 100);

	});
});