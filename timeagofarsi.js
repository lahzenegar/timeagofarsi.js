/*
 * Javascript Time Ago Formatted (Farsi)
 * By Lahzenegar (https://lahzenegar.com) - (https://github.com/lahzenegar/)
 * Licensed under the MIT license.
 */

export function timeAgoFarsi (startDate) {
  
  if (!Date.now) {
    Date.now = function() { 
      return new Date().getTime(); 
    }
  }

  var delta = Math.abs( Math.floor(Date.now() / 1000) - startDate ); 
  var upcomingMode = false;

  if (startDate > Math.floor(Date.now() / 1000)) {
    upcomingMode = true;
  }
  
  var minute = 60,
      hour = minute * 60,
      day = hour * 24,
      month = day * 30,
      year = day * 365,
      postfix = upcomingMode ? 'بعد' : 'پیش'

  if (delta < 30) {
    return 'همین الان';
  } else if (delta < minute) {
    return delta + ' ثانیه ' + postfix;
  } else if (delta < 2 * minute) {
    return 'یک دقیقه ' + postfix;
  } else if (delta < hour) {
    return Math.floor(delta / minute) + ' دقیقه ' + postfix;
  } else if (Math.floor(delta / hour) == 1) {
    return 'یک ساعت ' + postfix;
  } else if (delta < day) {
    return Math.floor(delta / hour) + ' ساعت ' + postfix;
  } else if (delta < day * 2) {
    return upcomingMode ? 'فردا' : 'دیروز';
  } else if (delta < month) {
    return Math.floor(delta / day) + ' روز ' + postfix;
  } else if (Math.floor(delta / month) == 1) {
    return 'یک ماه ' + postfix;
  } else if (delta < year) {
    return Math.floor(delta / month) + ' ماه ' + postfix;
  } else if (Math.floor(delta / year) == 1) {
    return 'یک سال ' + postfix;
  } else {
    return Math.floor(delta / year) + ' سال ' + postfix;
  }
}
