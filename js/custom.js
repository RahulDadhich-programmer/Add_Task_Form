
$("#summernote").summernote({
  placeholder: "",
  tabsize: 2,
  height: 100,
  toolbar: [
    ["style", ["style"]],
    ["font", ["bold", "underline", "clear"]],
    ["color", ["color"]],
    ["para", ["ul", "ol", "paragraph"]],
    ["table", ["table"]],
    ["insert", ["link", "picture", "video"]],
    ["view", ["fullscreen", "codeview", "help"]],
  ],
});
// });

// other details
$(document).ready(function () {
  $(".click-h2, .click-h2 img").click(function () {
    // $(this).toggle("down");
    $("#other-details").show(500);
  });
  // time hh:mm "Show"
  $("#time-estimate").click(function () {
    $("#time-format").show(500);
  });
  // days
  $("#repeat-days").click(function () {
    $("#regulation").show(500);
  });

});

// time hh:mm
$(".hh").blur(function () {
  if ($(this).val() >= 24) $(this).val($(this).val() % 24);

  if ($(this).val() == "") $(this).val("");
  else if ($(this).val() < 10) $(this).val("0" + parseInt($(this).val()));
  validateTime(x);
});
$(".mm").blur(function () {
  if ($(this).val() >= 60) $(this).val($(this).val() % 60);

  if ($(this).val() == "") $(this).val("");
  else if ($(this).val() < 10) $(this).val("0" + parseInt($(this).val()));

  var x = $(this).parent().attr("class").split(" ")[1];
  validateTime(x);
});

$(".hh").on("input", function () {
  $(this).parent().removeClass("invalid").removeClass("valid");
  if ($(this).val().length == 2) $(this).siblings(".mm").focus().select();
});
$(".mm").on("input", function () {
  $(this).parent().removeClass("invalid").removeClass("valid");
  if ($(this).val().length == 2) $(this).blur();
});
$(".hh").on("focus", function () {
  $(this).parent().removeClass("invalid").removeClass("valid");
});
$(".mm").on("focus", function () {
  $(this).parent().removeClass("invalid").removeClass("valid");
});

function getTime(x) {
  var t =
    $(".timepicker." + x)
      .find(".hh")
      .val() +
    ":" +
    $(".timepicker." + x)
      .find(".mm")
      .val();
  var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);
  var res = t;
  if (!isValid) res = null;
  return res;
}

function validateTime(x) {
  var t =
    $(".timepicker." + x)
      .find(".hh")
      .val() +
    ":" +
    $(".timepicker." + x)
      .find(".mm")
      .val();
  var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);
  if (isValid) {
    $(".timepicker." + x)
      .removeClass("invalid")
      .addClass("valid");
  } else {
    $(".timepicker." + x)
      .removeClass("valid")
      .addClass("invalid");
  }
}

// popup
const dependentCheckbox = document.getElementById("dependentCheckbox");
const popup = document.getElementById("popup");
const taskList = document.getElementById("taskList");

dependentCheckbox.addEventListener("change", () => {
  if (dependentCheckbox.checked) {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
});

taskList.addEventListener("click", (event) => {
  const selectedTask = event.target.textContent;
  // Here, you would perform the logic to establish the task dependency.
  console.log(`Task selected: ${selectedTask}`);
  popup.style.display = "none";
});
