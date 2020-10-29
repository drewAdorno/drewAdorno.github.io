var turnCounter=0
var result
var isFilled=true

$('.box').click(function(){
    if(turnCounter % 2 == 0){
        $(this).addClass('circle');
        $(this).attr('value', 'O')
    }
    else{
        $(this).addClass('cross');
        $(this).attr('value', 'X')  
    }
    getBoard()
    result=checkForWin()
    if(result == 'Circle Won'){
        $('#circleWon').show()
    }
    else if(result == 'Cross Won'){
        $('#crossWon').show()
    }
    else if(result == 'Tie'){
        $('#tie').show()
    }
    turnCounter++
})
var board=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

function getBoard(){
    var allBoxes=document.getElementsByClassName('box')
    isFilled=true
    for(var i=0; i<allBoxes.length; i++)
    {
       if( allBoxes[i].getAttribute('value') == ''){
           isFilled=false
           break
       }
    }

    var boxCount=0
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++)
        {
            board[i][j]=allBoxes[boxCount].getAttribute('value')
            boxCount++
        }
    }
    console.log(board);
}

function checkForWin(){
    //Horizontal
    for(var i=0; i<3; i++)
    {
        if(board[i][0] != '')
        {
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2]){
                if(board[i][0] == 'O'){
                    return 'Circle Won'
                }
                else{
                    return 'Cross Won'
                }
            }
        }
    }
    //Vertical
    for(var i=0; i<3; i++)
    {
        if(board[0][i] != '')
        {
            if(board[0][i] == board[1][i] && board[1][i] == board[2][i]){
                if(board[0][i] == 'O'){
                    return 'Circle Won'
                }
                else{
                    return 'Cross Won'
                }
            }
        }
    }
    //Diagonal

    if(board[1][1] != ''){
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){
            if(board[1][1] == 'O'){
                return 'Circle Won'
            }
            else{
                return 'Cross Won'
            }
        }
        else if(board[0][2] == board[1][1] && board[1][1] == board[2][0]){
            if(board[1][1] == 'O'){
                return 'Circle Won'
            }
            else{
                return 'Cross Won'
            }
        }
        if(isFilled){
            return 'Tie'
        }
        return 0
    }
}