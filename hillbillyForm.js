var hillbillyInputObject = null;

const scrolltoError = () => {
  var s4WorkSpace = $("#s4-workspace");
  var scrollPos =
    s4WorkSpace.scrollTop() + $(".errorMsg:visible").first().offset().top - 300;
  s4WorkSpace.animate({ scrollTop: scrollPos }, 200);
};

const validateInputTextField = () => {
  $(".validateInputText").each((idx, value) => {
    let text = $(value).find("input[type='text']").val();
    text === "" && $(value).siblings(".errorMsg").show();
  });
};

const validateRichTextField = () => {
  $(".validateRichText").each((idx, value) => {
    let richText = $(
      ".validateRichText:eq(" + idx + ") div[contenteditable='true'] *"
    )
      .text()
      .trim()
      .replace(/[^\w\s]/gi, "");
    richText === "" && $(value).siblings(".errorMsg").show();
  });
};

const validateCheckBoxField = () => {
  $(".validateCheckBox").each((idx, value) => {
    let checkBoxCount = $(value).find("input[type='checkbox']:checked").length;
    checkBoxCount === 0 && $(value).siblings(".errorMsg").show();
  });
};

const validateForm = () => {
  $(".errorMsg").hide();
  validateInputTextField();
  validateRichTextField();
  validateCheckBoxField();
};

const submitForm = () => {
  //validateForm();
  //const errCount = $('.errorMsg:visible').length;
  //if(errCount === 0){
  setTimeout(() => {
    $('[id$="_diidIOSaveItem"]:eq(1)').trigger("click");
  }, 2000);
  // } else {
  // scrolltoError();
  //  }
};

$(document).ready(function () {
  $("#category input[type='text']").attr(
    "placeholder",
    "Please provide details"
  );
  $("#category input[type='text']").hide();
  hillbillyInputObject = $(".hillbillyInput input");
  hillbillyInputObject.attr("placeholder", "Limited to 200 characters");
  hillbillyInputObject.attr("maxlength", 200);
  $("#savebtn").click(function () {
    submitForm();
  });
});
