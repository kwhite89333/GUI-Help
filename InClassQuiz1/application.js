$(document).ready( function() {

	$("#m-form").submit( function() {
		$("#p-wrapper p").addClass("hide");

		var inStr = $("#m-input").val();

		(inStr === "Kdubzz fo life") ? $("#pass").removeClass("hide") : $("#fail").removeClass("hide");
	});
});