
  $(function () {
   $('.seaction-header-burger ').on('click', function (e) {
          $('.seaction-header-menu__dropdown').slideToggle('slow');

         e.preventDefault();
      });


      $('.seaction-header-menu__dropdown-item').on('click', function () {
          $('.seaction-header-menu__dropdown').slideToggle('slow');
      });

      $('.seaction-header-search__img').on('click', function () {
          $('.seaction-header__form').slideToggle('slow');

      });
  });

