console.log('translator running')

document.querySelector('.replies-content').addEventListener("mouseup", async function () {
    // let spn = '<span class="highlight">' + selectedText + "</span>";
    // let text = document.querySelector(".textcont").textContent();
    // document.querySelector(".textcont").innerHTML(text.replace(selectedText, spn));
    // console.log(`"${selectedText}" was highlighted"`);

    document.getElementById('language-field').style.display = "block"
})

document.getElementById('translate-button').addEventListener('click', function(event) {
    event.preventDefault

    let textLanguage = document.getElementById('language-abbreviation').value.toUpperCase()
    console.log(textLanguage)
    let selectedText = window.getSelection().toString();
    console.log(selectedText)

    const requestBody = "auth_key=2f50a44d-d143-747e-881c-048a8f7ea56a:fx&text=" + selectedText + "&target_lang=" + textLanguage
    console.log(requestBody)
    getTranslation(requestBody)
})


async function getTranslation(body) {
    fetch("https://api-free.deepl.com/v2/translate", {
        body: body,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    .then((response) => response.json())
        .then((data) => 
        alert(data.translations[0].text)
        )
    .catch((error) => {
        console.error("Error:", error);
    })

    document.getElementById('language-field').style.display = "none"
}