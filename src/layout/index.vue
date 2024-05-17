<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-button @click="toggleAside" class="toggle-button">
          {{ isAsideCollapsed ? 'Expand' : 'Collapse' }}
        </el-button>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth" class="resizable-aside">
          <div class="aside-content">
            <LeftMenu />
          </div>
          <div class="resizer" @mousedown="startResize"></div>
        </el-aside>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="Layout">
import { ref } from 'vue';
import LeftMenu from './component/LeftMenu.vue';
import Main from './component/Main.vue';

const asideWidth = ref('200px');
const isAsideCollapsed = ref(false);

const toggleAside = () => {
  isAsideCollapsed.value = !isAsideCollapsed.value;
  asideWidth.value = isAsideCollapsed.value ? '0px' : '200px';
};

const startResize = (event) => {
  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', stopResize);
};

const handleResize = (event) => {
  if (!isAsideCollapsed.value) {
    const newWidth = `${event.clientX}px`;
    asideWidth.value = newWidth;
  }
};

const stopResize = () => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
};
</script>

<style scoped>
.common-layout {
  height: 100vh;
  overflow: hidden;
}

.header {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.resizable-aside {
  position: relative;
  transition: width 0.3s;
}

.aside-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toggle-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.resizer {
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  cursor: ew-resize;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
