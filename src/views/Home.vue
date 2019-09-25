<template>
    <div id="app">
        <div class="app-wrap">
            <el-menu size="mini" :default-active="$route.path" class="el-menu-demo" mode="horizontal"
                     @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                     router>
                <el-submenu index="welcome">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">茵科美信</span>
                    </template>
                    <el-menu-item index="/welcome">欢迎页面</el-menu-item>
                    <el-menu-item index="/profile">个人信息</el-menu-item>
                    <el-menu-item index="/login">退出登陆</el-menu-item>
                </el-submenu>

                <el-submenu v-for="(item,index) in menuList" :key="index" :index='item.id'>
                    <template slot="title">
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :key="child.id" :index='child.index'>
                        {{child.title}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
            <el-tabs v-model="activeIndex" type="border-card" @tab-click='tabClick' @tab-remove='removeTab'>
                <el-tab-pane :key="item.name" :closable="item.name!='welcome'" v-for="(item, index) in openTab"
                             :label="item.name" :name="item.route"></el-tab-pane>
            </el-tabs>

            <div class="content-wrap">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuList: [
                    {
                        id: '1',
                        title: '导航1',
                        children: [
                            {
                                id: '2',
                                index: '/page1',
                                title: '导航1page1'
                            },
                            {
                                id: '3',
                                index: '/page2',
                                title: '导航1page2'
                            },
                        ]
                    },
                    {
                        id: '4',
                        title: '导航2',
                        children: [
                            {
                                id: '5',
                                index: '/page3',
                                title: '导航2page3'
                            },
                            {
                                id: '6',
                                index: '/page4',
                                title: '导航2page4',
                            },
                        ]
                    }
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            logout() {
                location.href = '/login.html';
            },
            tabClick(tab) {
                console.log(this.$router);
                this.$router.push({path: this.activeIndex}).catch(err => {
                    console.log('输出报错:' + err.name, err)
                    if (err.name === 'NavigationDuplicated') {
                        console.log('重新加载当页数据')
                    }
                });
            },
            removeTab(targetName) {
                console.log("tabRemove", targetName);
                //首页不删
                if (targetName == '/' || targetName == '/welcome') {
                    return
                }
                this.$store.commit('delete_tabs', targetName);
                if (this.activeIndex === targetName) {
                    // 设置当前激活的路由
                    if (this.openTab && this.openTab.length >= 1) {
                        console.log('=============', this.openTab[this.openTab.length - 1].route)
                        this.$store.commit('set_active_index', this.openTab[this.openTab.length - 1].route);
                        this.$router.push({path: this.activeIndex});
                    } else {
                        this.$router.push({path: '/'});
                    }
                }
            }
        },
        mounted() {
            this.$router.push('/').catch(err => {
                console.log('输出报错/', err)
            });
            this.$store.commit('delete_all_tabs');
            // 刷新时以当前路由做为tab加入tabs
            // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
            // 当当前路由是首页时，添加首页到store，并设置激活状态
            if (this.$route.path !== '/' && this.$route.path !== '/welcome') {
                console.log('1');
                this.$store.commit('add_tabs', {route: '/welcome', name: 'welcome'});
                this.$store.commit('add_tabs', {route: this.$route.path, name: this.$route.name});
                this.$store.commit('set_active_index', this.$route.path);
            } else {
                console.log('2');
                this.$store.commit('add_tabs', {route: '/welcome', name: 'welcome'});
                this.$store.commit('set_active_index', '/welcome');
                this.$router.push('/').catch(err => {
                    console.log('输出报错/', err)
                });
            }
        },
        computed: {
            openTab() {
                return this.$store.state.openTab;
            },
            activeIndex: {
                get() {
                    return this.$store.state.activeIndex;
                },
                set(val) {
                    this.$store.commit('set_active_index', val);
                }
            }
        },
        watch: {
            '$route'(to, from) {
                //判断路由是否已经打开
                //已经打开的 ，将其置为active
                //未打开的，将其放入队列里
                let flag = false;
                for (let item of this.openTab) {
                    console.log("item.name", item.name)
                    console.log("t0.name", to.name)

                    if (item.name === to.name) {
                        console.log('to.path', to.path);
                        this.$store.commit('set_active_index', to.path)
                        flag = true;
                        break;
                    }
                }

                if (!flag) {
                    console.log('to.path', to.path);
                    this.$store.commit('add_tabs', {route: to.path, name: to.name});
                    this.$store.commit('set_active_index', to.path);
                }

            }
        }
    }
</script>
<style scoped lang='less'>
    .home {
        /*height:100vh;*/
    }

    .app-wrap {
        /*padding: 20px;*/
    }

    .content-wrap {
        border: 1px solid #DCDFF7;
        border-top: none;
    }

    .el-tabs.el-tabs--border-card {
        box-shadow: none;
        border-bottom: none;
    }
</style>


