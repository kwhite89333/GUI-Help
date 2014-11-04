$(document).ready( function() {

	$("#m-form").submit( function() {
		$("#p-wrapper p").addClass("hide");

		setTimeout(  function() {
			($("#m-input").val() === "Kdubzz fo life") ? $("#pass").removeClass("hide") : $("#fail").removeClass("hide");
		}, 100);

	});
});