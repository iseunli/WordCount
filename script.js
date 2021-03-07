const message = document.getElementById("message");
const SubmitQuery = document.getElementById('submit');
const putphrase = document.getElementById('phrase');
const putpicture = document.getElementById('picture');

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]




//for console 
SubmitQuery.addEventListener('click', () => {

    let messageWords = []
    let theMostFrequentWord = freq;
    let numberOfWordsInTheMessage = wordnum;
    
    messageWords = message.value.split(/[\n\r\s]+/g);
    messageWords = messageWords.map(elem => elem.toLowerCase());

      for (var i = 0; i < messageWords.length; i++){
      if (str(i) == " ") { 
        wordnum = +1; 
      }
    return wordnum;
  }

  var exmpl = {};

    var freq = array[0], max = 1;

  for(var i = 0; i < messageWords.length; i++)
    {
        var j = messageWords[i];

        if(exmpl[j] == null)

        exmpl[j] = 1;
        else

        exmpl[j]++;

        if(exmpl[j] > max)

        {
            freq = j;
            max = exmpl[j];
        }

        return freq;
    }

    if (messageWords.length < 20) {
        alert("The message is too small!");
        return;
    }

        console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
        console.log(`The number of words in the message is "${numberOfWordsInTheMessage}"`);
    
});
//for outpur
SubmitQuery.addEventListener('click', () => {
    putpicture.setAttribute("width", "400px");
    putpicture.setAttribute("height", "280px");
    var phrandpic = Math.floor(Math.random() * randomPhrasesAndPictures.length);
    putphrase.innerText = randomPhrasesAndPictures[phrandpic].phrase;
    putpicture.src = randomPhrasesAndPictures[phrandpic].imageURL;

});
