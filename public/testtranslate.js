const targLang = "sv"

function HoverTranslate() {
  $(document).ready(function () {
    $(document).on("mouseup", ".textcont", function () {
      let selectedText = window.getSelection().toString();
      let spn = '<span class="highlight">' + selectedText + "</span>";
      let text = $(".textcont").text();
      $(".textcont").html(text.replace(selectedText, spn));
      console.log(`"${selectedText}" was highlighted"`);
      
      fetch("/api/translate/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        text: selectedText,
        language: targLang,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
}

HoverTranslate();
