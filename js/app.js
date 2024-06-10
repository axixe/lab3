$(document).ready(function() {
    $('#a_num, #b_num, #c_num').on('input', function() {
        var a_num = $('#a_num').val()
        var b_num = $('#b_num').val()
        var c_num = $('#c_num').val()
        
        $.ajax({
            url: 'php/script.php',
            type: 'POST',
            dataType: 'json',
            data: {
                a_num: a_num,
                b_num: b_num,
                c_num: c_num
            },
            success: function(response) {
                $('.result__space').html(response)
                return
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    errorMessage = 'Страница обработки запроса не найдена.'
                } else {
                    errorMessage = 'Статус ошибки: ' + xhr.status + '.'
                }

                alert(errorMessage)
                return
            }
        })
    })
})