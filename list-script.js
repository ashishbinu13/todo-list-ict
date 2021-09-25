// promise counter function
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

// --------

// popup message

$("#popbtn").on("click", () => {
  $(".popup").css("visibility", "hidden");
});

// ------

$(document).ready(() => {
  // ajax get and populate list on todo button

  $(".todo").on("click", () => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      success: (data) => {
        var list = document.getElementById("list");
        var row = "";
        for (var i = 0; i < data.length; i++) {
          if (data[i].completed == true) {
            row = `<input class="cboxComp" type="checkbox" checked disabled > 
            &emsp;<span class="datalistComp">
              <s style="color: rgb(214, 106, 106)" >
                <small style="color: rgb(161, 228, 161)">${data[i].title}
                </small>
              </s>
            </span><br><hr>`;
          } else {
            row = `<input class="cbox" type="checkbox" onchange="counter(this)" > 
            &emsp;<span class="datalist">
                <span style="color: green">${data[i].title}
                </span>
            </span><br><hr>`;
          }

          list.innerHTML += row;
        }
      },
    });
  });

  //-------

  // logout button

  $(".logout").on("click", () => {
    window.location.href = "./login.html";
  });

  // -----

  // strike throught function

  function strike() {
    var chbox = Array.from(document.querySelectorAll(".cbox"));
    var dataTitle = Array.from(document.querySelectorAll(".datalist"));

    for (var i = 0; i < chbox.length; i++) {
      if (chbox[i].checked) {
        dataTitle[i].innerHTML = `
                <span class = "strike"><small style = "color: rgb(161, 228, 161)" >${dataTitle[i].textContent}
                </small></span>
                `;
      } else {
        dataTitle[
          i
        ].innerHTML = `<span style="color: green">${dataTitle[i].textContent}</span>`;
      }
    }
  }

  // -----

  // strike through event call

  $("#list").on("click", strike);
});

// style = "color: rgb(161, 228, 161)";
