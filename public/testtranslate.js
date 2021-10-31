$(document).ready(function () {
  $(document).on("mouseup", ".textcont", function () {
    let selectedText = window.getSelection().toString();
    // console.log(selectedText);
    let spn = '<span class="highlight">' + selectedText + "</span>";
    let text = $(".textcont").text();
    $(".textcont").html(text.replace(selectedText, spn));
    console.log(selectedText);
  });
  $(document).on("mouseover", ".highlight", function () {
    // alert("Works!");

    console.log("Highlighted");
  });
});
