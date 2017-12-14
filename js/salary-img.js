$(function(){



    /*изменение картинок*/
    var $percent = 0,
        $gender = 'man',
        $day = 1,
        $path = './img/salary/',
        $img = $('.n-main-salary__img img');

    /*для проверки и теста--------*/
    var max_day = 31,
        min_day = 1,
        step_day = 1,
        output_day = $('#output-day').text(min_day),
        max_percent = 100,
        min_percent = 1,
        step_percent = 1,
        output_percent = $('#output-percent').text(min_percent);


    $("#range-day")
        .attr({'max': max_day, 'min':min_day, 'step': step_day,'value': String(min_day)})
        .on('input change', function() {
            output_day.text(this.value);
            $day = this.value;

        });

    $("#range-percent")
        .attr({'max': max_percent, 'min':min_percent, 'step': step_percent,'value': String(min_percent)})
        .on('input change', function() {
            output_percent.text(this.value);
            $percent = this.value;

        });


    $('.controls input[type="radio"]').on('input change ', function(){
        $gender = $('input[name=gender]:checked').val();
    });

    /*---------*/




    $('.controls').on('input change', function() { /*строка для тестов и превью. При программинге ее убрать!!!*/

    if($gender == 'man'){
        /*проверяем пол*/

        if($percent >= 0 && $percent <= 50){
            /*проверяем диапазон процентов*/
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice36.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice34.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice33.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 51 && $percent <= 60){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice30.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice29.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice27.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 61 && $percent <= 70){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice20.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice24.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice22.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 71 && $percent <= 80){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice14.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice18.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice16.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 81 && $percent <= 90){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice8.png');
            }else if($day > 11 && $day <= 20){
                $img.attr('src', $path + 'slice12.png');
            }else if($day > 21 && $day <= 31){
                $img.attr('src', $path + 'slice10.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 91 && $percent <= 99){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice42.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice41.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice40.png');
            }else {
                console.log('false $day');
                return false;
            }
        }else if($percent == 100){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice2.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice6.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice4.png');
            }else {
                console.log('false $day');
                return false;
            }
        }else{
            console.log('false $percent');
            return false;
        }


    } else if ($gender == 'woman'){

        if($percent >= 0 && $percent <= 50){
            /*проверяем диапазон процентов*/
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice35.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice32.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice31.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 51 && $percent <= 60){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice25.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice28.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice26.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 61 && $percent <= 70){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice19.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice23.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice21.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 71 && $percent <= 80){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice13.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice17.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice15.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 81 && $percent <= 90){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice7.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice11.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice9.png');
            }else {
                console.log('false $day');
                return false;
            }
            /*------------------------------------*/
        }else if($percent >= 91 && $percent <= 99){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice39.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice38.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice37.png');
            }else {
                console.log('false $day');
                return false;
            }
        }else if($percent == 100){
            /*проверяем дату*/
            if($day >= 1 && $day <= 10){
                $img.attr('src', $path + 'slice1.png');
            }else if($day >= 11 && $day <= 20){
                $img.attr('src', $path + 'slice5.png');
            }else if($day >= 21 && $day <= 31){
                $img.attr('src', $path + 'slice3.png');
            }else {
                console.log('false $day');
                return false;
            }
        }else{
            console.log('false $percent');
            return false;
        }

    }else {
        console.log('false gender');
        return false;
    }


    });/*-окончание изменения формы--------*/

});