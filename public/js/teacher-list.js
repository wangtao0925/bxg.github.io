define(['jquery', 'template', 'bootstrap'], function ($, template) {
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            var html = template('teacherTpl', {list: data.result});
            $('#teacherInfo').html(html);
// 实现教师注销和启用功能
$('#teacherInfo').find('.switchBtn').click(function () {
    var td=$(this).parent();
    var tcId=td.attr('data-tcId');
    var tcStatus=td.attr('data-tcStatus');
    var that=this;
    $.ajax({
        type:'post',
        url:'/api/teacher/handle',
        data:{
            tc_id:tcId,
            tc_status:tcStatus
        },
        dataType:'json',
        success:function(data){
            td.attr('data-tcStatus',data.result.tc_status);
            if(data.result.tc_status == 0){
                $(that).text('启用');
            }else{
                $(that).text('注销');
            };
        }
    });
});
// 实现教师查看功能
            $('#teacherInfo').find('.preview').click(function () {
                var td=$(this).parent();
                var tcId=td.attr('data-tcId');
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