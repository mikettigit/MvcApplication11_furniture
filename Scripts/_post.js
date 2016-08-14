$(document).ready(function () {

    $("form").submit(function (e) {

        e.preventDefault();
        
        var isError = false;

        clientNameField = $(this).find("[name=имя]");
        if (clientNameField.length > 0){
            clientNameField.removeClass("error");
            nameChars = " -ёйцукенгшщзхъфывапролджэячсмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ";
            nameString = clientNameField.val();
            if (nameString.length < 3) {
                clientNameField.addClass("error");
                isError = true;
            }
            else {
                i = 0;
                while (ch = nameString.substr(i, 1)) {
                    if (nameChars.indexOf(ch) == -1) {
                        clientNameField.addClass("error");
                        isError = true;
                        break;
                    }
                    i++;
                }
            }
        }

        clientPhoneField = $(this).find("[name=телефон]");
        if (clientPhoneField.length > 0) {
            clientPhoneField.removeClass("error");
            phoneChars = " +-()1234567890";
            phoneString = clientPhoneField.val();
            if (phoneString.length < 5) {
                clientPhoneField.addClass("error");
                isError = true;
            }
            else {
                i = 0;
                while (ch = phoneString.substr(i, 1)) {
                    if (phoneChars.indexOf(ch) == -1) {
                        clientPhoneField.addClass("error");
                        isError = true;
                        break;
                    }
                    i++;
                }
            }
        }

        if (!isError) {
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
        }

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
