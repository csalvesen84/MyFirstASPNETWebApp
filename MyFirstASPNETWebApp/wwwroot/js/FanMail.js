$("#btnSend").click(function () {
    alert("From: " + $("#textFrom").val() + "\nSubject: " + $("#textSubject").val() + "\n\n" + $("#textMessage").val());
    for (let i = 0; i < 10; i++) {
        $("#picAnderson").fadeOut("slow");
        $("#picAnderson").fadeIn("slow");
    }
})