
   $(function(){
    $('.navbar-burger').on('click', function(){
        var target = $(this).attr('href');
        $(this).toggleClass('active');
        $(target).toggleClass('navbar-collapse');
    })
   })

});
