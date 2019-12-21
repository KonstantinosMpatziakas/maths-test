$(document).ready(function() {
    $("#sel").on('change', function() {
        num1 = Math.floor((Math.random() * 1000) + 1);
        num2 = Math.floor((Math.random() * 1000) + 1);
        if ($("#sel").val() == "add") {
            $("#num1").text(num1);
            $("#praxi").text('+');
            $("#num2").text(num2);
            apotelesma = num1 + num2;
        } else if ($("#sel").val() == "multi") {
            $("#num1").text(num1);
            $("#praxi").text("*");
            $("#num2").text(num2);
            apotelesma = num1 * num2;
        } else if ($("#sel").val() == "divide") {
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            }
            $("#num1").text(num1);
            $("#praxi").text('/');
            $("#num2").text(num2);
            apotelesma = max / min;
        } else if ($("#sel").val() == "substraction") {
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            }
            $("#num1").text(max);
            $("#praxi").text('-');
            $("#num2").text(min);
            apotelesma = max - min;
        }
    });
    $("#check").click(function() {
        if (parseInt($("#answer").val()) != apotelesma) {
            alert("wrong answer,the correct is:" + " " + apotelesma);
        } else {
            alert("correct!");
        }
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 100) + 1);
        $("#num1").text(num1);
        $("#num2").text(num2);
        $("#answer").val(' ');
        if ($("#sel").val() == "add") {
            $("#num1").text(num1);
            $("#praxi").text('+');
            $("#num2").text(num2);
            apotelesma = num1 + num2;
        } else if ($("#sel").val() == "multi") {
            $("#num1").text(num1);
            $("#praxi").text("*");
            $("#num2").text(num2);
            apotelesma = num1 * num2;
        } else if ($("#sel").val() == "divide") {
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            }
            $("#num1").text(num1);
            $("#praxi").text('/');
            $("#num2").text(num2);
            apotelesma = max / min;
        } else if ($("#sel").val() == "substraction") {
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            }
            $("#num1").text(max);
            $("#praxi").text('-');
            $("#num2").text(min);
            apotelesma = max - min;
        }
    });
});