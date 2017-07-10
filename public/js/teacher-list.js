define(['jquery', 'template', 'bootstrap'], function ($, template) {
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            var html = template('teacherTpl', {list: data.result});
            $('#teacherInfo').html(html);


            $('#teacherInfo').find('.preview').click(function () {
                var tcId=$(this).parent().attr('data-tcId');
                //var tcId=$(this).closest('td').attr('data-tcId');
                //console.log(tcId);
                //console.dir($(this).closest());
                //console.dir($(this).parent());
                $.ajax({
                    type: 'get',
                    url: '/api/teacher/view',
                    data: {
                        tc_id: tcId
                    },
                    dataType: 'json',
                    success: function (data) {
                        var html = template('modalTpl', data.result)
                        $('#modalInfo').html(html);
                        $('#teacherModal').modal();
                    }
                });
            });
        }
    });
});