import {translateText} from "./translateText.js";

$(document).ready(function () {
  $(document).on("mouseup", ".textcont", function () {
    let selectedText = window.getSelection();
    // console.log(selectedText);
    let spn = '<span class="highlight">' + selectedText + "</span>";
    let text = $(".textcont").text();
    $(".textcont").html(text.replace(selectedText, spn));
  });
  $(document).on("mouseover", ".highlight", function () {
    translateText(selectedText).then(response => response)
    // alert("Works!");
    console.log(response);
    console.log("Highlighted");
  });
});
