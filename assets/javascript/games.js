
  var words = ["apple" , "mango", "strawberry", "grapes"];
  var win = 0;
  var possileWord = words[Math.floor(Math.random()* words.length)];
  var blankSpaces = "";
  var wordLength = possileWord.length;
  var myGuessing = [];
  var myGuessingWords  = [];
  var stopTheGame = false;
  var guessingTime;

  for ( i = 0; i < wordLength ; i++)
  {
      var x = possileWord.charAt(i);

      for ( x === " " || x === "/'" )
      {
        blankSpaces = blankSpaces + x ;

      }

      else {

        blankSpaces = blankSpaces + " _ ";


      }

      document.getElementById("blankSpaces").innerHTML =  blankSpaces;
  }

  var guessLeft = 9 ;

  function checkWords(letter)
  {
    var foundWords = false;

    for ( var i = 0 , j = matchWords.length ; i < j ; i++)
    {
        if (letter === matchWords[i]  )
        {

          myGuessing[i] = letter ;
          foundWords = true;

          if ( myGuessing.join("") === matchWords)
          {
             win++;
             stopTheGame = true;

          }


        }


    }

      if ( !foundWords) {
        if ( !myGuessingWords.include(letter))
        {
          myGuessingWords.push(letter);
          guessingTime--;

        }

        if ( guessingTime === 0)
        {
          myGuessingWords = matchWords.split();
          pauseGame = true;



        }

      }
      displayGame();
  }

//document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
//document.getElementById("guessLeft").innerHTML = guessLeft;

//

//if (guessLeft === -1 )
//{

//( "You Loose !" ) ;

//}

function displayGame()
{
  document.getElementById("Win").innerText = win ;
  document.getElementById("currentWord").innerText = myGuessing.join("") ;
  document.getElementById("guessingLeft").innerText = guessingTime ;
  document.getElementById("myGuessingWords").innerText = myGuessingWords.join(" ") ;




}
