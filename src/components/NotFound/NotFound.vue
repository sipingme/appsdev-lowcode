<template>
  <div :class="$style.content">
    <n-result
      status="404"
      title="404 Not Found"
      description="You know life is always ridiculous."
    >
      <template #footer>
        <n-button :loading="loading" icon-placement="left" @click="handleClick">
          Back to dashboard
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

const loading = ref(false);
const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    router.push("/dashboard");
  }, 500);
};
</script>

<style lang="scss" module>
.content {
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
