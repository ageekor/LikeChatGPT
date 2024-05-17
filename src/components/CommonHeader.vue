<template>
    <el-header>
        <div class="logo">
            <el-button size="small">
                <el-icon>
                    <HomeFilled />
                </el-icon>
            </el-button>
        </div>
        <div class="title">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img :src=ImgUrl alt="头像" style="width: 30px;height: 30px;border-radius: 50%;">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>self</el-dropdown-item>
                        <el-dropdown-item>exit</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const ImgUrl = ref('https://cube.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
</script>

<style  scoped>  
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>