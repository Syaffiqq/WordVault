function buttonClicked(){    

    var word = document.getElementById('word_input').value
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data)
        document.getElementById('word').innerHTML=`<br>${data[0].word}`
        //noun
        document.getElementById('nodefinitions1').innerHTML=`definition<br>${data[0].meanings[0].definitions[0].definition}<br><br>example<br>${data[0].meanings[0].definitions[0].example}`
        document.getElementById('nodefinitions2').innerHTML=`definition<br>${data[0].meanings[0].definitions[1].definition}<br><br>example<br>${data[0].meanings[0].definitions[1].example}`
        document.getElementById('nodefinitions3').innerHTML=`definition<br>${data[0].meanings[0].definitions[2].definition}<br><br>example<br>${data[0].meanings[0].definitions[2].example}`
        document.getElementById('nosyno').innerHTML=`synonyms<br>${data[0].meanings[0].synonyms}`
        document.getElementById('noanto').innerHTML=`antonyms<br>${data[0].meanings[0].antonyms}`
        
        //adjective
        document.getElementById('addefinitions1').innerHTML=`definition<br>${data[0].meanings[1].definitions[0].definition}<br><br>example<br>${data[0].meanings[1].definitions[0].example}`
        document.getElementById('addefinitions2').innerHTML=`definition<br>${data[0].meanings[1].definitions[1].definition}<br><br>example<br>${data[0].meanings[1].definitions[1].example}`
        document.getElementById('addefinitions3').innerHTML=`definition<br>${data[0].meanings[1].definitions[2].definition}<br><br>example<br>${data[0].meanings[1].definitions[2].example}`
        document.getElementById('adsyno').innerHTML=`synonyms<br>${data[0].meanings[1].synonyms}`
        document.getElementById('adanto').innerHTML=`antonyms<br>${data[0].meanings[1].antonyms}`

       //  Display sound (audio)
        const audioObj = data[0].phonetics.find(p => p.audio);  // find one with audio
        if (audioObj && audioObj.audio) {
        document.getElementById('soundAudio').innerHTML = `<audio controls src="${audioObj.audio}"></audio>`;
        } else {
        document.getElementById('soundAudio').innerHTML = `No audio available.`;
        }

        document.getElementById('soundLink').innerHTML = `<a href="${data[0].phonetics[0].sourceUrl}">${data[0].phonetics[0].audio}</a>`

        document.getElementById('sourceLink').innerHTML = `<a href="${data[0].phonetics[0].sourceUrl}">${data[0].phonetics[0].sourceUrl}</a>`
        document.getElementById('sourceUrls').innerHTML=`<a href= "${data[0].sourceUrls}">${data[0].sourceUrls}</a>`


        document.querySelectorAll('.collapsible').forEach(button => {
            button.addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                content.style.maxHeight = null;
                } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
            });


       
         


    } )  //end of second then  
}