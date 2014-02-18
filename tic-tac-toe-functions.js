var sqr1;
var sqr2;
var sqr3;
var sqr4;
var sqr5;
var sqr6;
var sqr7;
var sqr8;
var sqr9;

var isTurn = true;

var wins = 0;
var losses = 0;
var draws = 0;

$( document ).ready(function() {
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#draws').html(draws);
});

function setVars()
{
    sqr1 = $('#topLeft').html();
    sqr2 = $('#topMiddle').html();
    sqr3 = $('#topRight').html();
    sqr4 = $('#middleLeft').html();
    sqr5 = $('#middleMiddle').html();
    sqr6 = $('#middleRight').html();
    sqr7 = $('#bottomLeft').html();
    sqr8 = $('#bottomMiddle').html();
    sqr9 = $('#bottomRight').html();
}

function clearBoxes()
{
    $('#topLeft').html('');
    $('#topMiddle').html('');
    $('#topRight').html('');
    $('#middleLeft').html('');
    $('#middleMiddle').html('');
    $('#middleRight').html('');
    $('#bottomLeft').html('');
    $('#bottomMiddle').html('');
    $('#bottomRight').html('');
    
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#draws').html(draws);
}

function fillBox(elem)
{
    var id = $(elem).attr("id");

    if(isTurn)
    {
        if($.trim($(elem).html())=='')
        {
            document.getElementById(id).innerHTML = "X";
            isTurn = false;
        }
    }
    
    if(!isTurn)
    {
        setVars();

        if(checkWinner(true))
        {
            alert("X wins!");
            wins++;
            clearBoxes();
            isTurn = true;
        }
        else
        {
            computerPick();
            
            if(checkWinner(false))
            {
                alert("O wins!");
                losses++;
                clearBoxes();
            }
            isTurn = true;
        }
    }
}

function checkWinner(player)
{
    var mark = (player) ? "X" : "O";
    setVars();
    
    if(sqr1 == mark) // This will check the vertical, horizontal and diagonal for the first square
    {
        if((sqr2 == mark && sqr3 == mark) || (sqr4 == mark && sqr7 == mark) || (sqr5 == mark && sqr9 == mark))
        {
            return true;
        }
    }
    else if(sqr2 == mark) // This will check the middle column
    {
        if(sqr5 == mark && sqr8 == mark)
        {
            return true;
        }
    }
    else if(sqr3 == mark) // This will check the vertical and diagonal for square 3
    {
        if((sqr6 == mark && sqr9 == mark) || (sqr5 == mark && sqr7 == mark))
        {
            return true;
        }
    }
    else if(sqr4 == mark) // This will check the middle row
    {
        if(sqr5 == mark && sqr6 == mark)
        {
            return true;
        }
    }
    else if(sqr7 == mark) // This will check the bottom row 
    {
        if(sqr8 == mark && sqr9 == mark)
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}

// Determines the computer's move as well as if we have a draw
function computerPick()
{
    if(!checkVictory("O"))
    {
        if(!checkVictory("X"))
        {
            if($.trim($('#middleMiddle').html()) == '')
            {
                $('#middleMiddle').html('O');
            }
            else
            {
                if($.trim($('#topLeft').html()) == '')
                {
                    $('#topLeft').html('O');
                }
                else if($.trim($('#topRight').html()) == '')
                {
                    $('#topRight').html('O');
                }
                else if($.trim($('#bottomLeft').html()) == '')
                {
                    $('#bottomLeft').html('O');
                }
                else if($.trim($('#bottomRight').html()) == '')
                {
                    $('#bottomRight').html('O');
                }
                else
                {
                     if($.trim($('#topMiddle').html()) == '')
                    {
                        $('#topMiddle').html('O');
                    }
                    else if($.trim($('#middleRight').html()) == '')
                    {
                        $('#middleRight').html('O');
                    }
                    else if($.trim($('#middleLeft').html()) == '')
                    {
                        $('#middleLeft').html('O');
                    }
                    else if($.trim($('#bottomMiddle').html()) == '')
                    {
                        $('#bottomMiddle').html('O');
                    }
                    else
                    {
                        alert("Draw!");
                        draws++;
                        clearBoxes();
                        isTurn = true;
                    }
                }
            }
        }
    }
    
    setVars();
    
     if(checkWinner(true))
    {
        alert("O wins!");
    }
}

/****************************************************
*           Checks for Winning Combinations         *
*****************************************************/
function checkVictory(mark)
{
    if($.trim($('#topLeft').html()) == '' && ((sqr2 == mark && sqr3 == mark) || (sqr7 == mark && sqr4 == mark) || (sqr5 ==mark && sqr9 == mark)))
    {
        $('#topLeft').html('O');
        return true;
    }
    else if($.trim($('#topMiddle').html()) == '' && ((sqr1 == mark && sqr3 == mark) || (sqr5 == mark && sqr8 == mark)))
    {
        $('#topMiddle').html('O');
        return true;
    }
    else if($.trim($('#topRight').html()) == '' && ((sqr1 == mark && sqr2 == mark) || (sqr6 == mark && sqr9 == mark) || (sqr5 ==mark && sqr7 == mark)))
    {
        $('#topRight').html('O');
        return true;
    }
    else if($.trim($('#middleLeft').html()) == '' && ((sqr1 == mark && sqr7 == mark) || (sqr5 == mark && sqr6 == mark)))
    {
        $('#middleLeft').html('O');
        return true;
    }
    else if($.trim($('#middleMiddle').html()) == '' && ((sqr1 == mark && sqr9 == mark) || (sqr4 == mark && sqr6 == mark) || (sqr3 ==mark && sqr7 == mark) || (sqr2 ==mark && sqr8 == mark)))
    {
        $('#middleMiddle').html('O');
        return true;
    }
    else if($.trim($('#middleRight').html()) == '' && ((sqr3 == mark && sqr9 == mark) || (sqr4 == mark && sqr5 == mark)))
    {
        $('#middleRight').html('O');
        return true;
    }
    else if($.trim($('#bottomLeft').html()) == '' && ((sqr1 == mark && sqr4 == mark) || (sqr8 == mark && sqr9 == mark) || (sqr3 ==mark && sqr5 == mark)))
    {
        $('#bottomLeft').html('O');
        return true;
    }
    else if($.trim($('#bottomMiddle').html()) == '' && ((sqr7 == mark && sqr9 == mark) || (sqr2 == mark && sqr5 == mark)))
    {
        $('#bottomMiddle').html('O');
        return true;
    }
    else if($.trim($('#bottomRight').html()) == '' && ((sqr1 == mark && sqr5 == mark) || (sqr7 == mark && sqr8 == mark) || (sqr3 ==mark && sqr6 == mark)))
    {
        $('#bottomRight').html('O');
        return true;
    }
    else
    {
        return false;
    }
}