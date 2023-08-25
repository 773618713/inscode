define(['app', "assets/js/menu/1.0.1/menu"],function(app){return {module: function($scope, $http, eventBusService, httpService, params, configService) {
    let menus = [
        {
            id:"001",
            name:"菜单001",
            url:"",
            icon: "edit",
            menus:[
                {
                    id:"011",
                    name:"欢迎页1",
                    url:"modules/content/welcome",
                },{
                    id:"021",
                    name:"用户管理",
                    url:"modules/content/user",
                },{
                    id:"021",
                    name:"DropDown",
                    url:"modules/content/dropdown",
                },{
                    id:"021",
                    name:"菜单021",
                    url:"url021",
                    menus: [
                        {
                            id:"011",
                            name:"菜单011",
                            url:"url011"
                        },{
                            id:"021",
                            name:"菜单021",
                            url:"url021",
                        }
                    ]
                }
            ]
        },
        {
            id:"002",
            name:"菜单002",
            url:"url002",
            icon: "export",
            menus:[
                {
                    id:"011",
                    name:"菜单011",
                    url:"url011"
                },{
                    id:"021",
                    name:"菜单021",
                    url:"url021",
                },{
                    id:"021",
                    name:"菜单021",
                    url:"url021",
                },{
                    id:"021",
                    name:"菜单021",
                    url:"url021",
                    menus: [
                        {
                            id:"011",
                            name:"菜单011",
                            url:"url011"
                        },{
                            id:"021",
                            name:"菜单021",
                            url:"url021",
                        }
                    ]
                }
            ]
        }
    ]

    let menuParams = {
        menus: menus,
        getMenuElement: function (menu){
            return $("<div class='menu-content'>" +
                "<i class='menu-icon iconfont icon-"+menu.icon+"'></i>&nbsp;"+menu.name +
                "</div>");
        },
        menuClick: function (menu){
            if (menu.url == null || menu.url ==""){
                return;
            }
            eventBusService.publish("modules.content.load", menu);
            $scope.$apply();
        }
    }

    let menuUtil = new Menu();
    menuUtil.initMenus(menuParams);
    menuUtil.clickFirstMenuCascade(menuParams.menus);
}}});