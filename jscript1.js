// Asks the user Enter a word. Press 'q' to quit. Create a loop that will not quit until they enter 'q'.

function main()
{
    var userInput = prompt("Enter a word. Press 'q' to quit");
    while(userInput != "q")
    {
        alert("That isn't q")
        userInput = prompt("Enter a word. Press 'q' to quit ");
    }
}

main();