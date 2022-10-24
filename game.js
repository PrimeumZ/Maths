player1_name=localStorage.getItem('player_1_name');
player2_name=localStorage.getItem('player_2_name');

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;

function send(){
    number1 = document.getElementById("Number_1").value;
    number2 = document.getElementById("Number_2").value;
    actual_answer = parseInt(Number_1) * parseInt(Number_2);
    question_number = "<h4>" + Number_1 + " X "+ Number_2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_turn + input_box + check_button ;
    document.getElementById("output").inputHTML = row; 
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}

question_turn="player1";
answer_turn="player2"

function check(){
    get_answer=document.getElementById("answer_input").value;
    answer=get_answer.toLowerCase();
    console.log("Answer in lower-case ="+answer);



    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        

    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn="+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn="+player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn="+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn="+player1_name;
    }

    document.getElementById("output").innerHTML="";
}