
player1_name = localStorage.getItem("player_name1");
player2_name = localStorage.getItem("player_name2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Question").innerHTML = "Question turn - " + player1_name;
document.getElementById("Answer").innerHTML = "Answer turn - " + player2_name;

function Send()
{
    get_Word = document.getElementById("word").value;
    word = get_Word.toLowerCase();

    charAt1 = word.charAt(1);
    Midlenght = Math.floor(word.length/2);
    charAt2 = word.charAt(Midlenght);
    charAt3 = word.charAt(word.length - 1);
    word1 = word.replace(charAt1, "_");
    word2 = word1.replace(charAt2, "_");
    word3 = word2.replace(charAt3, "_");
    console.log(word3);

    Question = "<h4 id= 'word_display'> Q. " + word3 + "</h4>";
    Input = "<br><input type='text' id = 'input_box'> ";
    New_button = "<br> <br> <button class= 'btn btn-info' onclick='check()'>Check </button>"
    document.getElementById("output").innerHTML = Question + Input + New_button;
    document.getElementById("word").value = "";
}   

Question_turn = "player_1";
Answer_turn = "player_2";

function check()
{
    get_Word = document.getElementById("input_box").value;
    answer = get_Word.toLowerCase();

    if(answer == word)
    {
        if(Answer_turn == "player_1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else 
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(Question_turn == "player_1")
    {
        Question_turn = "player_2";
        document.getElementById("Question").innerHTML = "Question turn - " + player2_name;
    }
    else
    {
        Question_turn = "player_1";
        document.getElementById("Question").innerHTML = "Question turn - " + player1_name;

    }


    if(Answer_turn == "player_1")
    {
        Answer_turn = "player_2";
        document.getElementById("Answer").innerHTML = "Answer turn - " + player2_name;
    }
    else
    {
        Answer_turn = "player_1";
        document.getElementById("Answer").innerHTML = "Answer turn - " + player1_name;

    }
    console.log(Question_turn);
    console.log(Answer_turn);
    document.getElementById("output").innerHTML = "";
}