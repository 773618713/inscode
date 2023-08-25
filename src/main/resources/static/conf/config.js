app_name = '数据分析系统';
app_version = '1.0';
app_css = ['assets/css/layout.css', 'assets/css/default.css', 'assets/css/style.css'];
app_route = ['route'];

define(['app'], function (app) {
    app.urls = {
        //基础信息
        userInfo: "api/userInfo", //用户信息，数据保存在app.userInfo
        user_logout: "api/logout", //用户退出登录
        changeYear: "api/changeYear",

        //菜单按钮
        getMenuData: "api/queryForList/menu.select", //菜单查询，数据保存在app.menuList
        getButtonData: "api/queryForList/button.select", //按钮查询，数据保存在app.buttonList

        // 学生
        findStudentList: "api/queryForList/student.findStudent",
        findStudent: "api/queryForObject/student.findStudent",
        addStudent: "api/insert/student.addStudent",
        updateStudent: "api/update/student.updateStudent",
        deleteStudent: "api/update/student.deleteStudent",
    }
});