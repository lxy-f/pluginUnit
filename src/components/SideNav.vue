<template>
  <div class="side-nav">
    <v-scrollbar
      :speed="100"
      :bar-container-style="barContainerStyle"
      class="nav-wrapper"
    >
      <a-menu
        class=""
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        theme="dark"
        @click="handleClick"
      >
        <template v-for="item in menus">
          <a-sub-menu
            :key="item.key"
            @titleClick="titleClick"
          >
            <span slot="title"><a-icon type="mail" /><span>{{ item.title }}</span></span>
            <a-menu-item-group key="g1">
              <template slot="title">
                <a-icon type="qq" />
                <span>Item 1</span>
              </template>
              <a-menu-item key="1">
                Option 1
              </a-menu-item>
              <a-menu-item key="2">
                Option 2
              </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group
              key="g2"
              title="Item 2"
            >
              <a-menu-item key="3">
                Option 3
              </a-menu-item>
              <a-menu-item key="4">
                Option 4
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </template>
      </a-menu>
    </v-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barContainerStyle: { // 滚动条容器样式对象
        width: 'auto'
      },
      current: ['mail'],
      openKeys: ['sub1'],
      menus: [
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        },
        {
          title: '基本概念',
          key: 'basic'
        }, 
        {
          title: '基本概念',
          key: 'basic'
        }
      ]
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    }
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  }
}
</script>

<style scoped lang="scss">
.side-nav {
  height: 100%;
  width: 250px;
  box-sizing: border-box;
}

.nav-wrapper {
  height: 100vh;
  position: relative;
  box-sizing: border-box;
}

::v-deep .content-container {
  padding-right: 0 !important;
}
::v-deep .ant-menu-submenu-title {
  padding-left: 0 !important;
}
</style>