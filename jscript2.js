// Create a hardcoded password. Create a while loop that will ask the user to enter the correct password until it
// matches the hardcoded password. Once they match alert the user THAT’S CORRECT!!

function main()
{
    var pasword = 0;
    var userInput = prompt("Enter the password");
    while (userInput != pasword)
    {
        alert(userInput+" Is the wrong password");
        var userInput = prompt("Enter the password");
    }
    alert("That Is the right password");
}

main();
