
// 验证手机号
function checkTel() {
    var telnumber = document.getElementById("telnum").value;
    var telExp = /^((13[0-2])|(15[5|6])|(18[6|5]))\d{8}$/;
    if (telnumber.length != 11) { alert("请输入11位有效电话号码！"); }
    else if (!telExp.test(telnumber)) {
        alert("联通手机号必须以130、131、132、155、156、186、185开头！")
        document.getElementById("telnum").value = "";
        return;
    }
    else return true;
}
//验证身份证
function checkIdcard() {
    var idcard = document.getElementById("idcard").value;
    var idExp = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (!idExp.test(idcard)) {
        alert("请输入正确的身份证号码！");
        document.getElementById("idcard").value = "";
        return;
    }
    else return true;
}
//校对验证码
function checkSms() {
    var sms = document.getElementById("sms").value;
    if (sms.length!=6) {
        alert("请输入正确的验证码！");
        document.getElementById("sms").value = "";
    }
    else return true;
}
//验证6位新密码
function checkPassword() {
    var pass = document.getElementById("password").value;
    var repass = document.getElementById("repassword").value;
    var telnumber = document.getElementById("telnum").value;
    var telnum = telnumber.toString();
    var lasttel = telnum.substr(5, 6);
    if (pass.length != 6) {
        alert("密码只能是6位！");
        clear();

    }
    else if (pass == "" || repass == "") {
        alert("用户名和密码为空！");
        clear();
    }
    else if (pass !== repass) {
        alert("用户名和密码不相等！");
        clear();
    }
    else if (lasttel == pass) {
        alert("不能为手机号后六位！");
        clear();
    }
    else {
        return true;
    }
}
function clear() {
    document.getElementById("password").value = "";
    document.getElementById("repassword").value = "";
}
function settime() {
    var idcard = document.getElementById("idcard").value;
    if (idcard == "")
        alert("请先输入身份证号码！")
    else {
        
        Current();
    }
}
//倒计时验证

function Current() {
    var MAX_TIME_INIT = 59;
    var maxtime = MAX_TIME_INIT; 
    var currenttime = setInterval(function() {
        if (maxtime <0) {
            clearInterval(currenttime);
            document.getElementById("getSms").removeAttribute("disabled");
            document.getElementById("getSms").style.color="#09f";
            document.getElementById("getSms").style.cursor="pointer";
            document.getElementById("getSms").value="重新获取验证码";
        } else {
            var seconds = maxtime % 60;
            var msg = seconds + "秒后重新获取";
            document.getElementById("getSms").value = msg;
            maxtime--;
            document.getElementById("getSms").setAttribute("disabled","disabled");
            document.getElementById("getSms").style.color="#c7c7c7";
            document.getElementById("getSms").style.cursor="not-allowed";
        }
    }, 1000);

    
}


//下一步操作
function next(step) {
    switch (step) {
        //第一个下一步
        case 1:
            if (checkTel() != true) {
                return;
            }
            else {
                switchnextone();
                step += 1;
            };
            break;
        //第二个下一步
        case 2:
            if (checkIdcard() != true) {
                return;
            }
            else if (checkSms() != true) {
                return;
            }
            else {
                switchnexttwo();
                step += 1;
            }
            break;
        //完成
        case 3:
            if (checkPassword() != true) {
                return;
            } else {
                alert("密码修改成功！您的密码更改为：" + document.getElementById("password").value)
            }

    }
    //封装的两个函数
    function switchnextone() {
        document.getElementById("stepForm2").style.display = "block";
        document.getElementById("stepForm1").style.display = "none";
        document.getElementById("stepForm1").style.display = "none";
        document.getElementById("iconjiantou1").style.color = "#4cd694";
        document.getElementById("iconstyle2").style.color = "#4cd694";
        document.getElementById("stepTip1").style.display = "none";
        document.getElementById("stepTip2").style.display = "block";
    }
    function switchnexttwo() {
        document.getElementById("stepForm").style.display = "block";
        document.getElementById("stepForm2").style.display = "none";
        document.getElementById("stepTip2").style.display = "none";
        document.getElementById("iconstyle3").style.color = "#4cd694";
        document.getElementById("iconjiantou2").style.color = "#4cd694";
        document.getElementById("stepTip3").style.display = "block";
    }

}


