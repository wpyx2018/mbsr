import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    //mode: 'history',
    linkActiveClass: "mui-active", //更改活动链接的class类名，可以用style自定义样式
    routes: [{
            path: "/",
            name: "Home",
            meta: {
                hideInMenu: true,
                title: "MBSR八周练习册",
                notCache: true
            },
            component: () =>
                import ("../components/home.vue")
        },
        {
            path: "/geren",
            name: "Geren",
            meta: {
                hideInMenu: true,
                title: "个人MBSR八周练习册",
                notCache: true
            },
            component: () =>
                import ("../components/geren.vue")

        }
    ]
});