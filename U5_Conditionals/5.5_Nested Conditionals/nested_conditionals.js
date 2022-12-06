alert("You are the Pretty prince of High Fantisa, The Princess of the land of kyrule has been taken by the ogre king gannondwarf.")

let Save_or_Ignore = prompt("Do you (1) Go to save the princess r do you (2) Ignore the situation? (please type 1 or 2)")

if (Save_or_Ignore == 1) {
    alert ("Ariving at the front gate of the Ogre king Ganon's castle you are met by his guards Who request you to leave.")
    let Fight_or_talk = prompt("(1)Do you Request an audience with the king or (2) Try to fight the guards? (please type 1 or 2.");
    if (Fight_or_talk == 1){
        alert("The guards reluctently take you to see the king, Speaking with him you find the pepole of Kyrule are blocking of trade roots to his kingdom. You convince him to allow you to take the princess by promising to help trade discussions between the kingdoms (good ending)")
    } else {
        alert("Your no slouch in combat, But you are outnumbered 10 to 1. You are captured by the guards and thrown into prision with the handsome princess, whihc isn't sooo bad (eh ending)")
    }

} else {
    alert("Who needs em anyway, You ignore saving the princess and a war breaks out between the ogre kiong and the pepole of kyrule (bad ending)");
}
