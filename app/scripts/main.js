$(document).ready(function(){
  var symbols = {
    x: '<i class="fa fa-times"></i>',
    o: '<i class="fa fa-circle-o"></i>'
  }

  var player = symbols.x;
var machine = symbols.o;
var curPlayer = player;

// Other needed Variables
var gameOver = false;
var lockIcon = false;
var moves = 1;

$('.choose').on('click', SetIcon);
$('.el').on('click', MarkPosition);

function PToggler(cplayer) {
  cplayer === player ? curPlayer = machine : curPlayer = player;
};


function SetIcon() {
  if ($(this).attr('id') === 'X' && !lockIcon) {
    $('.btn-x').addClass('active');
      // $('.btn-o').removeClass('active');
    player = symbols.x;
    machine = symbols.o;
    lockIcon = true;
  } else if ($(this).attr('id') === 'O' && !lockIcon) {
    $('.btn-o').addClass('active');
    player = symbols.o;
    machine = symbols.x;
    lockIcon = true;
  }
   curPlayer = player;
}

function DrawIcon(id) {
  $('#' + id).html(curPlayer);
}


function DrawLine(pos1, pos2, pos3) {
  var $pos1 = $(pos1);
  var $pos2 = $(pos2);
  var $pos3 = $(pos3);
  $pos1.addClass('winningRow');
  $pos2.addClass('winningRow');
  $pos3.addClass('winningRow');

  // Fix for the race problem of JS vs jQuery toggling the current player befre the score is changed.
  // PToggler(curPlayer);
}

function Clear() {

  $('.popup').fadeOut();
  $('.el').empty();

 // Allow board to be clickable again
 $('.el').removeClass('clicked');

 // Clear winner line
 $('div').removeClass('winningRow');

 // Reset Moves
 moves = 1;

 // Reset gameover
 gameOver = false;

 // Reset Player to chosen one.
 SetIcon();
}

function showPop() {
  $('.popup').show();

  $('#restart').on('click', Clear);

  $("#message-win").html(curPlayer + " wins!");
}

function YouWin() {
  showPop();
}

function checkDraw() {
  // showPop();
  if (moves === 10) {
    showPop();
    $("#message-win").html("It's a tie!");
  }
}

function WinCheck() {
  switch(true){
    case $('#n0').html() === curPlayer && $('#n1').html() === curPlayer &&
    $('#n2').html() === curPlayer:
      DrawLine('#n0', '#n1', '#n2');
      YouWin();
      break;
    case $('#n3').html() === curPlayer && $('#n4').html() === curPlayer &&
    $('#n5').html() === curPlayer:
      DrawLine('#n3', '#n4', '#n5');
      YouWin();
      break;
    case $('#n6').html() === curPlayer && $('#n7').html() === curPlayer &&
    $('#n8').html() === curPlayer:
      DrawLine('#n6', '#n7', '#n8');
      YouWin();
      break;
    case $('#n0').html() === curPlayer && $('#n3').html() === curPlayer &&
    $('#n6').html() === curPlayer:
      DrawLine('#n0', '#n3', '#n6');
      YouWin();
      break;
    case $('#n1').html() === curPlayer && $('#n4').html() === curPlayer &&
    $('#n7').html() === curPlayer:
      DrawLine('#n1', '#n4', '#n7');
      YouWin();
      break;
    case $('#n2').html() === curPlayer && $('#n5').html() === curPlayer &&
    $('#n8').html() === curPlayer:
      DrawLine('#n2', '#n5', '#n8');
      YouWin();
      break;
    case $('#n0').html() === curPlayer && $('#n4').html() === curPlayer &&
    $('#n8').html() === curPlayer:
      DrawLine('#n0', '#n4', '#n8');
      YouWin();
      break;
    case $('#n2').html() === curPlayer && $('#n4').html() === curPlayer &&
    $('#n6').html() === curPlayer:
      DrawLine('#n2', '#n4', '#n6');
      YouWin();
      break;
    default:
      checkDraw();
  }
}


function MarkPosition() {
  lockIcon = true;
  var id = $(this).attr('id');

  // Prevent changing already selected grid
  if (!$('#' + id).hasClass('clicked')) {
    $('#' + id).addClass('clicked');

    // Add Icon to the board
    DrawIcon(id);

    // Mark number of moves
     moves += 1;
     console.log()
     WinCheck();
    PToggler(curPlayer);

    // Add Icon to the board for machine
    if (moves % 2 === 0) {
      MachineAI();
      WinCheck();
      moves += 1;
      PToggler(curPlayer);
    }
  }
}
//
// function MachineAI() {
//   switch (true) {
//     case $('#n0').html() !== player && $('#n0').html() !== machine:
//       DrawIcon('n0');
//       break;
//     case $('#n1').html() !== player && $('#n1').html() !== machine:
//       DrawIcon('n1');
//       break;
//     case $('#n2').html() !== player && $('#n2').html() !== machine:
//       DrawIcon('n2');
//       break;
//     case $('#n3').html() !== player && $('#n3').html() !== machine:
//       DrawIcon('n3');
//       break;
//     case $('#n4').html() !== player && $('#n4').html() !== machine:
//       DrawIcon('n4');
//       break;
//     case $('#n5').html() !== player && $('#n5').html() !== machine:
//       DrawIcon('n5');
//       break;
//     case $('#n6').html() !== player && $('#n6').html() !== machine:
//       DrawIcon('n6');
//       break;
//     case $('#n7').html() !== player && $('#n7').html() !== machine:
//       DrawIcon('n7');
//       break;
//     case $('n8').html() !== player && $('#n8').html() !== machine:
//       DrawIcon('n8');
//       break;
//   }
// };
  // function compMove() {
  //
  // }




});
