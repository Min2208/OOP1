

function loadPage() {
    let result = "<img id='img' src='ltv.jpg'>"+"<br>"+"<input id='inputUsername' ><input id='password' type='password'>" +"<button onclick='show()'>Login</button>";
    document.getElementById('container').innerHTML=result;
}
function show() {
    let teacher=new Teacher(1,'Vuong',30,"deverlopment");
    teacher.showDesktop();
}
function Teacher(password,name,age,job) {
    this.password=password;
    this.fullName=name;
    this.age=age;
    this.job=job;
    this.showDesktop=function () {
      let result="<div class='left'>"+"<table><tr><td>Thông tin cá nhân</td></tr><tr><td> Lịch sử điểm danh</td></tr><tr><td>Lịch giảng dạy</td></tr></table></div>"+"<div class='manuRight'></div>";
      document.getElementById('container').innerHTML=result;
    };
    this.showInfo=function () {
        let result="<div class='right'>" +
            "<div>" +"<table></table>"
            "</div>" +
            "<div" +
            "</div>" +
            "</div>"
    };
    this.getPassword=function () {
        return this.password;

    };
    this.setPassword=function (password) {
        this.password = password;
    };
    this.getName=function () {
        return this.fullName;
    };
    this.setName=function (name) {
        this.fullName=name;
    };
    this.getAge=function () {
        return this.age;
    };
    this.setAge=function (age) {
        this.age=age;
    }

}


