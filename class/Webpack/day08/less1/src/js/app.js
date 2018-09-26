import $ from "jquery";

$(function () {
    $.ajax({
        type: "GET",
        url: "http://192.168.2.129:5066/api/users?type=userlist",
        dataType: "json",
    }).then((data) => {
        console.log(data);
    })
})