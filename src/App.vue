<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-theme-editor>
      <n-space vertical>
        <n-layout>
          <n-layout-header bordered style="height: 50px">
            <div :class="$style.logo">
              <img src="@/assets/logo.png" />
            </div>
          </n-layout-header>
          <n-layout has-sider>
            <n-layout-sider
              bordered
              show-trigger
              collapse-mode="width"
              :collapsed-width="64"
              :width="240"
              :native-scrollbar="false"
              style="height: calc(100vh - 100px)"
            >
              <n-menu
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
              />
            </n-layout-sider>
            <n-layout>
              <div :class="$style.content">
                <n-breadcrumb :class="$style.breadcrumb">
                  <n-breadcrumb-item
                    v-for="(value, key) in breadcrumb"
                    :key="key"
                  >
                    {{ value }}
                  </n-breadcrumb-item>
                </n-breadcrumb>
                <router-view />
              </div>
            </n-layout>
          </n-layout>
          <n-layout-footer bordered :class="$style.footer">
            Copyright © 2021-2023 ibuilding.com.my. All Rights Reserved.
          </n-layout-footer>
        </n-layout>
      </n-space>
    </n-theme-editor>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, h, ref, type Component } from "vue";
import { RouterView } from "vue-router";
import {
  useOsTheme,
  lightTheme,
  darkTheme,
  NThemeEditor,
  NIcon,
} from "naive-ui";
import { darkThemeOverrides } from "@/constants/dark-theme-overrides";
import { lightThemeOverrides } from "@/constants/light-theme-overrides";
import {
  CallOutline as CallIcon,
  BusinessOutline as BusinessIcon,
  AppsOutline as AppsIcon,
  PeopleOutline as PeopleIcon,
  StatsChartOutline as StatsChartIcon,
  SettingsOutline as SettingsIcon,
} from "@vicons/ionicons5";

const osThemeRef = useOsTheme();
const theme = computed(() =>
  osThemeRef.value === "dark" ? darkTheme : lightTheme
);
const themeOverrides = computed(() =>
  osThemeRef.value === "dark" ? darkThemeOverrides : lightThemeOverrides
);
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const breadcrumb = ref([""]);
breadcrumb.value = window.location.pathname.split("/");

const menuOptions = [
  {
    label: "Team Overview",
    key: "team-overview",
    icon: renderIcon(CallIcon),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  {
    label: "Tenant Overview",
    key: "tenant-overview",
    icon: renderIcon(BusinessIcon),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  {
    label: "Main Overview",
    key: "main-overview",
    icon: renderIcon(AppsIcon),
    children: [
      {
        label: "Dashboard (Admin)",
        key: "dashboard",
      },
      {
        label: "Building Community Directory",
        key: "building-community-directory",
      },
      {
        label: "Tasks Management",
        key: "tasks-management",
      },
      {
        label: "Complaints Management",
        key: "complaints-management",
      },
      {
        label: "Facility Management",
        key: "facility-management",
      },
      {
        label: "Asset Management",
        key: "asset-management",
      },
      {
        label: "Visitors Management",
        key: "visitors-management",
      },
      {
        label: "Campaigns Management",
        key: "campaigns-management",
      },
      {
        label: "Parcel Tracking Management",
        key: "parcel-tracking-management",
      },
      {
        label: "Advance User Alert Management",
        key: "advance-user-alert-management",
      },
      {
        label: "Document Management",
        key: "document-management",
      },
      {
        label: "FAQ Management",
        key: "faq-management",
      },
    ],
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  {
    label: "User List Overview",
    key: "user-list-overview",
    icon: renderIcon(PeopleIcon),
    children: [
      {
        label: "Commerical Owner List",
        key: "commerical-owner-list",
      },
      {
        label: "Residential Owner List",
        key: "residential-owner-list",
      },
      {
        label: "Management Office List",
        key: "management-office-list",
      },
    ],
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  {
    label: "Data Tracker Overview",
    key: "data-tracker-overview",
    icon: renderIcon(StatsChartIcon),
    children: [
      {
        label: "Visitor/Guest/Contractor",
        key: "visitor-guest-contractor",
      },
      {
        label: "Parcel",
        key: "parcel",
      },
    ],
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  {
    label: "System",
    key: "system",
    icon: renderIcon(SettingsIcon),
    children: [
      {
        label: "System Settings",
        key: "system-settings",
      },
      {
        label: "System Logs",
        key: "system-logs",
      },
    ],
  },
];
</script>

<style>
@import "@/assets/css/base.css";
</style>
<style lang="scss" module src="@/assets/css/layout.scss"></style>
