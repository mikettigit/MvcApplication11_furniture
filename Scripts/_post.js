$(document).ready(function () {

    $("form").submit(function (e) {

        e.preventDefault();
        
        var form_data = new FormData(this);

        form_data.append("2fea14ff-d8e3-42c1-a230-3917b7a640c9", "2fea14ff-d8e3-42c1-a230-3917b7a640c9");

        $.ajax({
            url: "/Home/Feedback",
            data: form_data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST'
        });

        return false;

    });

    $(document).ajaxSuccess(function (event, xhr, settings) {
            data = JSON.parse(xhr.responseText);
            alert(data.Message);
    });

    $(".AddFile").click(function () {
        if ($(this).parents("form").find(".filesdiv").find("input[type=file]").length > 2) {
            alert("Максимум 3 файла");
            return false;
        }
        file_index++;
        newfile = $(".templatefile").clone().removeClass("templatefile").show();
        newfile.find("input[type=file]").attr("name", "file" + file_index);
        newfile.find("input[type=text]").click(function () {
            var fileinput = $(this).parent().find("input[type=file]");
            fileinput.change(function () {
                newfile.find("input[type=text]").val($(this).val().split(/(\\|\/)/g).pop())
            })
            fileinput.click();
        });
        newfile.appendTo($(this).parents("form").find(".filesdiv"));
        return false;
    })

    $(document).on("click", ".RemoveFile", function () {
        $(this).parents(".fileline").remove();
        return false;
    })

});

var file_index = 0;
