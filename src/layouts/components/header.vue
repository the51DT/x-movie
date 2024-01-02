<template>
  <div class="header">
    <div class="inner__wrap">
      <div class="logo">
        <h1>MyPackage</h1>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >        
        <el-sub-menu
          v-for="(gnb, index) in gnbList" :key="index"  
          :index="1 + index"        
        >
          <template #title>{{ gnb.name }}</template>
          <el-menu-item 
            v-for="(subGnb, idx) in gnb.children" :key="idx"
            :index="`${index} - 1 + ${idx}`"          
          >
            <router-link :to="subGnb.to">{{ subGnb.name }}</router-link>
          </el-menu-item>
        </el-sub-menu>                   
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import gnbList from './gnb'
  

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
