<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2" @click="goToPath('nxtDy')">
                  <el-icon><icon-menu /></el-icon>
                  <span>测试报</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <el-icon><document /></el-icon>
                  <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon><setting /></el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
              </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { proxy, ctx }:any = getCurrentInstance();
const goToPath = (name) => {
  proxy.$router.push({ name })
}
</script>

<style lang="scss" scoped>
.common-layout {
  display: flex;
}
.el-header, .el-aside, .el-main {
  background: #fff;
  position: relative;
}
.el-header {
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  z-index: 5;
}
.el-aside {
  box-shadow: 2px 0 -1px 0 rgba(29, 35, 41, .05);
  z-index: 1;
}
.el-main {
  margin: 15px 0 15px 15px;
}
</style>