$(function () {

  var today = dayjs();
  var currentHour = dayjs().hour();
  console.log(today);
  addHours();
  loadSavedData();



  function addHours() {
    $('#currentDay').text(today.format('dddd, MMMM D'))
    for (var i = 9; i <= 17; i++){
      var timeBlock = $('<div class="row time-block">');
      var hourCol = $('<div class="col-2 col-md-1 hour text-center py-3">');
      var textArea = $('<textarea class="col-8 col-md-10 description" id="text-'+i+'" rows="3">');
      var saveBtn = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">')
        .append($('<i class="fas fa-save" aria-hidden="true">'));
      timeBlock.attr('id', 'hour-'+i);
      if (i < 12) hourCol.text(i+'AM');
      else if (i === 12) hourCol.text(i+'PM');
      else hourCol.text((i-12)+'PM');
        if (i < currentHour) timeBlock.addClass('past');
        if (i === currentHour) timeBlock.addClass('present');
        if (i > currentHour) timeBlock.addClass('future');
        timeBlock.append(hourCol, textArea, saveBtn);
        $('#hour-container').append(timeBlock);
    }
  }

  $('.saveBtn').on('click', function(event){
    event.preventDefault();
    var row = $(this).closest(".time-block");
    var hour = row.attr("id").split("-")[1];
    var text = $('#text-'+hour).val();
    localStorage.setItem('hour-'+hour+'-text', text);
    console.log(text);
  });

  function loadSavedData(){
    for (var i = 9; i <= 17; i++){
      var toDo = localStorage.getItem('hour-'+i+'-text');
      if(toDo) $('#text-'+i).val(toDo);
      console.log(toDo + 'being inputted into #text-'+i);
    }
  }
    
}
);
