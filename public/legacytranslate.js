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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({text: selectedText,
          language: targLang,})
      })
        .then((response) => response.json())
        .then((data) => console.log(data.translation))
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
}

HoverTranslate();
