// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {

  var today = dayjs();
  var currentHour = dayjs().hour();
  console.log(today);
  addHours();

  function addHours() {
    $('#currentDay').text(today.format('dddd, MMMM D'))
    for (var i = 9; i <= 17; i++){
      var timeBlock = $('<div class="row time-block">');
      var hourCol = $('<div class="col-2 col-md-1 hour text-center py-3">');
      var textArea = $('<textarea class="col-8 col-md-10 description" rows="3">');
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
    
}
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
);
