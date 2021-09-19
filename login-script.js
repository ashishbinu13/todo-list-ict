$(document).ready(() => {
  //   $("#get").on("click", () => {
  //     $.get("https://jsonplaceholder.typicode.com/todos", (data, stat) => {
  //       console.log(data[0]);
  //     });
  //   });

  $(".login").on("click", (e) => {
    let uname = $(".uname");
    let pass = $(".pass");

    if (uname[0].value != "admin") {
      e.preventDefault();
      uname.css("border", "solid red 2px");
      $(".uname+.fas").css("visibility", "visible");
    } else {
      uname.css("border", "none");
      $(".uname+.fas").css("visibility", "hidden");
    }

    if (pass[0].value != 12345) {
      e.preventDefault();
      pass.css("border", "solid red 2px");
      $(".pass+.fas").css("visibility", "visible");
    } else {
      pass.css("border", "none");
      $(".pass+.fas").css("visibility", "hidden");
    }
  });
});
