// Author: Alex Freewalker
// alexfreewalker.blogspot.com

jQuery.fn.getfavicon = function () {

  return this.each(function () {
    $('a[href^="http"]', this).each(function () {
      var url = $(this).attr('href').replace(/(:\/\/[^\/]+).*$/, '$1') + '/favicon.ico';
      var img = $('<img src="'+url+'" />').insertBefore($(this));
      img.attr('height', '16').attr('width', '16').attr('alt', 'favicon').css('margin','0 8px -3px 1px');

      var testimg = new Image();
      testimg.src = url;
      testimg.onerror = function (evt){$('img[src="'+this.src+'"]').attr('src', '/images/nofavicon.png')}

        }); 
    });
};
