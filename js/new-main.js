$(function(){

    /*простые табы*/
    $(".n-main-salary .tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    /*количество товара в карточке*/
    function catalogItemCounter(field) {
        var fieldCount = function (el) {
            var
                // Мин. значение
                min = el.data('min') || false,
                // Макс. значение
                max = el.data('max') || false,
                // Кнопка уменьшения кол-ва
                dec = el.prev('.dec'),
                // Кнопка увеличения кол-ва
                inc = el.next('.inc');
            function init(el) {
                if (!el.attr('disabled')) {
                    dec.on('click', decrement);
                    inc.on('click', increment);
                }
                // Уменьшим значение
                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if (!min || value >= min) {
                        el[0].value = value;
                    }
                };
                // Увеличим значение
                function increment() {
                    var value = parseInt(el[0].value);

                    value++;

                    if (!max || value <= max) {
                        el[0].value = value++;
                    }
                };
            }
            el.each(function () {
                init($(this));
            });
        };
        $(field).each(function () {
            fieldCount($(this));
        });
    }

    catalogItemCounter('.fieldCount');

    $('.product-card-properties__btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.product-card-properties__list').slideToggle(100);
    });

    // $('.fotorama').fotorama({
    //     width: '100%',
    //     loop: true,
    //     thumbwidth: 88,
    //     allowfullscreen: true,
    //     nav: 'thumbs'
    // });

    // код для тестирования
    var maxValue = 23000,
        minValue = 17000,
        defaultValue = 20000,
        interval = 6000;

    $(document).on('change', '.custom-value-range input', function(){
        defaultValue = Number($(this).val()); 
        maxValue = defaultValue + (defaultValue * 0.15);
        minValue = defaultValue - (defaultValue * 0.15);
        interval = maxValue - minValue;
        // console.log('defaultValue ' + defaultValue);
        // console.log('maxValue ' + maxValue);
        // console.log('minValue ' + minValue);
        // console.log('interval ' + interval);

        slider.update({
            from: minValue,
            to: maxValue,
            max_interval: interval,
            min_interval: interval
        });

        
    });

    
    $('#filter-price__on-search-result').ionRangeSlider({
        // min: 0,
        // max: 90000,
        // from: 50000

        type: "double",
        min: 0,
        max: 90000,
        from: minValue,
        to: maxValue,
        keyboard: true, // true by defaultб
        drag_interval: true,
        max_interval: interval,
        min_interval: interval
    });
    

    var slider = $('#filter-price__on-search-result').data("ionRangeSlider");
    
    


    

    // Инициализация
    $('#datepicker').datepicker({
      range: true
    });

    /*клонирование карточек*/
    $('.additional-card-add').on('click', function(e){
        e.preventDefault();
        $('.js-clone').clone().removeClass('js-clone').appendTo('.n-main-additional__list');
    });

    /*выбор гарантии*/
    function choiceOfGuarantee (elem, activeClass){
        $(elem).on('click',function(e){
            e.preventDefault();
            console.log('click');
            var $this = $(this);
            $this.removeClass('guarantee-default guarantee-red guarantee-yellow guarantee-green');
            $this.siblings().removeClass('guarantee-default guarantee-red guarantee-yellow guarantee-green');
            $this.prevUntil().addClass(activeClass);
            $this.addClass(activeClass);
            $this.siblings().find('.guarantee-card-status__point-text').removeClass('active');
            $this.find('.guarantee-card-status__point-text').addClass('active');

            /*красим заголовок*/
            $this.parents().siblings('.guarantee-card__price').removeClass('guarantee-default guarantee-red guarantee-yellow guarantee-green');
            $this.parents().siblings('.guarantee-card__price').addClass(activeClass);
        });
    }

    choiceOfGuarantee('.js-guarantee-no','guarantee-default');
    choiceOfGuarantee('.js-guarantee-one','guarantee-red');
    choiceOfGuarantee('.js-guarantee-three','guarantee-yellow');
    choiceOfGuarantee('.js-guarantee-forever','guarantee-green');


    /*закрыть карточку в доп. товарах*/
    $('.additional-card__close, .c-btn__delete').on('click', function(e){
        e.preventDefault();
        $(this).parents('.n-main-additional__item').hide();
    });

    $('.insurance-card__btn').on('click', function(e){
        e.preventDefault();
        var $text = $(this).data('title');
        $('.insurance-card__status').text($text);
        $('.insurance-card').addClass('active');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.n-main-notice-card').on('click', function(e){
        e.preventDefault();
        console.log('клик прошел');
        $(this).removeClass('no-read no-read--message');
    });







});
