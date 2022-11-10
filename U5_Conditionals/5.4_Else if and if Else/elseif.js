let password = prompt("What is your secret passphrase");

// if they type sasquatch, alert they may enter
// if they type in yet, print .. very close! But no quite
// if they type in big foor, alert close enough... you may enter.
// otherwise, alert You are inccorect. You may not enter\\
// Always alert... thank you for tryiong to guess the pass phrase!

if(password == "sasquatch"){
    alert("You may Enter!")
} else if (password == "yeti"){
    alert ("Very close! But not quite :D")
} else if (password == "bigfoot"){
    alert("Close enough! You may enter.")
} else {
    alert("You are Inccorect. You may not enter.")
}

alert("thank you for trying to guess the passphrase!")
