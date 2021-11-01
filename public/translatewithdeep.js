console.log('translator running')

document.querySelector("main :not(.msger)").addEventListener("mousedown", function () {
    document.getElementById('language-field').style.display = "none"
})

document.querySelector('.replies-content').addEventListener("mouseup", function () {
    document.getElementById('language-field').style.display = "block"
})


document.querySelector('#translate-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Translate Button Pressed")


    let textLanguage = document.getElementById('language-abbreviation').selectedOptions[0].value;
    console.log(textLanguage)
    let selectedText = window.getSelection().toString();
    console.log(selectedText)

    //const requestBody = "auth_key=2f50a44d-d143-747e-881c-048a8f7ea56a:fx&text=" + selectedText + "&target_lang=" + textLanguage
    getTranslation(selectedText, textLanguage)
})


async function getTranslation(text, language) {
    fetch("/api/translate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({text: text,
          language: language,})
      })
    .then((response) => response.json())
        .then((data) => 
        alert(data.translation)
        )
    .catch((error) => {
        console.error("Error:", error);
    })

    document.getElementById('language-field').style.display = "none"
}