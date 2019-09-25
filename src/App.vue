<template>
    <router-view/>
</template>

<script>
    export default {
        mounted() {
            console.log('app.mounted')
        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .app-wrap {
        height: 100%;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 1400px;
    }

    .el-tabs.el-tabs--card.el-tabs--top {
        height: calc(100% - 46px);
    }

    .el-menu--horizontal > .el-menu-item {
        float: left;
        height: 48px;
        line-height: 48px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #000;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__title {
        height: 48px;
        line-height: 48px;
        border-bottom: 2px solid transparent;
        color: #000;
    }

    .el-menu--popup-bottom-start {
        margin-top: 0;
    }

    .el-menu--popup-right-start {
        margin-left: 0;
        margin-right: 0
    }

    .el-tabs__nav-scroll {
        background-color: #EEE;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active.is-closable {
        padding-left: 20px;
        padding-right: 20px;
        background-color: #FFF;
    }

    .el-tabs__header {
        margin-bottom: 0;
    }

    .el-tabs__content {
        overflow: hidden;
        position: relative;
        flex: 1;
        overflow-y: auto;
        border: 16px solid transparent;
        text-align: justify;
        box-sizing: border-box;
        height: calc(100% - 41px);
    }
</style>
