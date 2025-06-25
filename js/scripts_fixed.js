
$("#rsvp-form").on("submit", function(e) {
  e.preventDefault();
  var t = $(this).serialize();  // Ensure 't' is defined here
  $("#alert-wrapper").html(alert_markup("info", "<strong>Even geduld</strong> We zijn de informatie aan het opslaan."));

  $.post("https://script.google.com/macros/s/AKfycbz5KiufWLBc811RH81PyvB_y8rRKtY9cHG_ickoMOgOo8OUonAUjhYuRkrz8KMWunLE/exec", t)
    .done(function(e) {
      console.log(e);
      if (e.result === "error") {
        $("#alert-wrapper").html(alert_markup("danger", e.message));
      } else {
        $("#alert-wrapper").html("");
        $("#rsvp-modal").modal("show");
      }
    })
    .fail(function(e) {
      console.log(e);
      $("#alert-wrapper").html(alert_markup("danger", "<strong>Sorry!</strong> Er is een probleem met de server."));
    });
});
