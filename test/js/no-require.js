(function(){
    var result = define.yarn.returnAfterLast("1234", "3");
    console.log(result === "4" ? "pass" : "fail");
}())