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

  var delta = Math.floor(Date.now() / 1000) - startDate;
  var minute = 60,
      hour = minute * 60,
      day = hour * 24,
      month = day * 30,
      year = day * 365;


  if (delta < 30) {
    return 'همین الان';
  } else if (delta < minute) {
    return delta + ' ثانیه پیش';
  } else if (delta < 2 * minute) {
    return 'یک دقیقه پیش'
  } else if (delta < hour) {
    return Math.floor(delta / minute) + ' دقیقه پیش';
  } else if (Math.floor(delta / hour) == 1) {
    return 'یک ساعت پیش'
  } else if (delta < day) {
    return Math.floor(delta / hour) + ' ساعت پیش';
  } else if (delta < day * 2) {
    return 'دیروز';
  } else if (delta < month) {
    return Math.floor(delta / day) + ' روز پیش';
  } else if (Math.floor(delta / month) == 1) {
    return 'یک ماه پیش';
  } else if (delta < year) {
    return Math.floor(delta / month) + ' ماه پیش';
  } else if (Math.floor(delta / year) == 1) {
    return 'یک سال پیش';
  } else {
    return Math.floor(delta / year) + ' سال پیش';
  }
}
