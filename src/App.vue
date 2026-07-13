<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
          router
                class="el-menu-vertical-demo"
              >
                <el-menu-item index="/nxtDy">
                  <span>测试报</span>
                </el-menu-item>
              </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
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
