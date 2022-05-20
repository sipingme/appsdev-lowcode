import {
  create,
  NThemeEditor,
  darkTheme,
  NConfigProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NMenu,
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NButton,
  NCollapse,
  NCard,
  NPopover,
} from "naive-ui";

export default create({
  components: [
    NThemeEditor,
    darkTheme,
    NConfigProvider,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NMenu,
    NBreadcrumb,
    NBreadcrumbItem,
    NIcon,
    NInput,
    NButton,
    NCollapse,
    NCard,
    NPopover,
  ],
});

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    NThemeEditor: typeof NThemeEditor;
    darkTheme: typeof darkTheme;
    NConfigProvider: typeof NConfigProvider;
    NSpace: typeof NSpace;
    NLayout: typeof NLayout;
    NLayoutHeader: typeof NLayoutHeader;
    NLayoutContent: typeof NLayoutContent;
    NLayoutFooter: typeof NLayoutFooter;
    NLayoutSider: typeof NLayoutSider;
    NMenu: typeof NMenu;
    NBreadcrumb: typeof NBreadcrumb;
    NBreadcrumbItem: typeof NBreadcrumbItem;
    NIcon: typeof NIcon;
    NInput: typeof NInput;
    NButton: typeof NButton;
    NCollapse: typeof NCollapse;
    NCard: typeof NCard;
    NPopover: typeof NPopover;
  }
}
