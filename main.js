function addUser() 
{
player_name1 = document.getElementById("player1_input_name").value;
player_name2 = document.getElementById("player2_input_name").value;

localStorage.setItem("player_name1", player_name1);
localStorage.setItem("player_name2", player_name2);

window.location ="game_page.html";

document.getElementById("Question").innerHTML= "<h3> Question Turn:" + player_name1 + "</h3>";
}