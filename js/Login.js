var login = document.getElementById('btn');

login.onclick = function () {
        var user = document.getElementById('user').value;
        var pwd = document.getElementById('pwd').value;

        if (user == '' || user == null) {
                document.getElementById('error').innerHTML = "����д�˺�";
        } else if (pwd == '' || pwd == null) {
                document.getElementById('error').innerHTML = "����д����";
        } else {
                document.getElementById('error').innerHTML = "ϵͳ���ڲ���";
        }
}

