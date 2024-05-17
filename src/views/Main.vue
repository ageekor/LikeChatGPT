
import router from '../router';
<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
            <CommonHeader></CommonHeader>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts" name="Main">
import CommonHeader from '../components/CommonHeader.vue';
</script>