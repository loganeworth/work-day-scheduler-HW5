// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').click( function(){
    let text = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');
    
    console.log(hour)

    localStorage.setItem(hour, text)
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function initializeTimeBlockColors() {
    let currentTime = new Date().getHours();
    console.log(currentTime)
    $('.time-block').each(function block() {
      let timeBlock = $(this).attr('id')

      let timeBlockHour = parseInt(timeBlock.match('[1-9]+')[0])
      

      if (currentTime === timeBlockHour) {
        $(this).addClass('present')
        $(this).removeClass('future')
        $(this).removeClass('past')
      }

      else if (currentTime > timeBlockHour) {
        $(this).addClass('past')
        $(this).removeClass('future')
        $(this).removeClass('present')
      }

      else {
        $(this).addClass('future')
        $(this).removeClass('present')
        $(this).removeClass('past')
      }
    })
    
  }
  initializeTimeBlockColors();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#hour-8 .description').val(localStorage.getItem('hour-8'))
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))


// $('hour-8', 'description').val.localStorage.getItem('hour-8', 'description')
  // The below line is retrieving the stored in item from local storage
  // localStorage.getItem('hour-8', 'description')

  // $('.time-block').each(function() {
  //   let storedText = localStorage.getItem($(this).attr('id'))
  //   console.log(storedText)
  //   // $('#hour-9 .description').text(storedText)
  //   // $('#hour-10 .description').text(storedText)
  //   // $('#hour-11 .description').text(storedText)
  // })


  
  // TODO: Add code to display the current date in the header of the page.
  
  let fullCurrentDate = new Date()
  console.log(fullCurrentDate)
  $('#currentDay').text(fullCurrentDate)


  // let d = new Date();

  // let month = d.getMonth()+1;
  // let day = d.getDate();

  // let output = d.getFullYear() + '/' +
  //   (month<10 ? '0' : '') + month + '/' +
  //   (day<10 ? '0' : '') + day;
  // $('#currentDay').text(output)
});
