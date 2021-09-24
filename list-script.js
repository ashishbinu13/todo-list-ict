let count = 0;
function counter(elem) {
  let promise = new Promise((res, rej) => {
    if (elem.checked) {
      count++;
    } else {
      count--;
    }
    res(count);
  });

  promise.then((value) => {
    if (value == 5) {
      $(".popup").css("visibility", "visible");
    }
  });
}

$("#popbtn").on("click", () => {
  $(".popup").css("visibility", "hidden");
});

$(document).ready(() => {
  $(".todo").on("click", () => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      success: (data) => {
        var list = document.getElementById("list");
        var row = "";
        for (var i = 0; i < data.length; i++) {
          if (data[i].completed == true) {
            row = `<input class="cboxComp" type="checkbox" checked disabled > <span class="datalistComp"><s>${data[i].title}</s></span><br><hr>`;
          } else {
            row = `<input class="cbox" type="checkbox" onchange="counter(this)" > <span class="datalist">${data[i].title}</span><br><hr>`;
          }

          list.innerHTML += row;
        }
      },
    });
  });

  function strike() {
    var chbox = Array.from(document.querySelectorAll(".cbox"));
    var dataTitle = Array.from(document.querySelectorAll(".datalist"));

    for (var i = 0; i < chbox.length; i++) {
      if (chbox[i].checked) {
        dataTitle[i].innerHTML = `<s>${dataTitle[i].textContent}</s>`;
      } else {
        dataTitle[i].innerHTML = `${dataTitle[i].textContent}`;
      }
    }
  }

  $("#list").on("click", strike);
});
