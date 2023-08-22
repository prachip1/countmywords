document.addEventListener('DOMContentLoaded', function () {


    const getText = document.getElementById('entertext');
    const countButton = document.getElementById('countnow')
    const wordCountDisplay = document.getElementById('wordCount');

   countButton.addEventListener('click', countNow);

    function countNow (){
   
          const inputText = getText.value.trim(); // trim will remove all spaces i.e. leading and trailing spaces from the entered text
          const whitespaceRemoved = inputText.split(/\s+/); // this regex and split will remove the whitespaces from the entered text
    
          const nonEmptyWords = whitespaceRemoved.filter(rem => rem !== ''); // this will filter out and remove any empty strings
    
          const totalWords = nonEmptyWords.length; // will give the exact length of the entered text
          wordCountDisplay.textContent = totalWords; // putting it on the span where it is displayed
    }

});



