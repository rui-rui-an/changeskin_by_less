<template>
  <div class="hello">
    <img :src="avatar" alt="" />
    <div class="box-1"></div>
    <div class="box-2"></div>
    <p>我是测试文字</p>
    <button @click="defaultTheme">默认主题</button>
    <button @click="dark">暗黑主题</button>
    <button @click="custom">自定义主题</button>
  </div>
</template>


<script>
import { setTheme } from "../theme/theme";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapState({
      themeName: 'themeName'
    }),
    avatar () {
      if (!this.themeName || this.themeName === 'zidingyi') {
        // 这里应该去取自定义图片在服务器的路径，然后弄回来，这里先用本地的代替了
        return require(`@/assets/images/logo-default.png`)
      } else {
        return require(`@/assets/images/logo-${this.themeName}.png`)
      }

    },
  },
  mounted () {
    this.init(); // 初始化主题
  },
  methods: {
    ...mapMutations({
      setTheme: 'setTheme'
    }),
    init () {
      // setTheme("default"); // 初始化未默认主题
    },
    // 更改为默认主题
    defaultTheme () {
      localStorage.setItem('themeName', 'default')
      this.setTheme('default')
      setTheme("default");
    },
    // 更改为暗黑主题
    dark () {
      localStorage.setItem('themeName', 'dark')
      this.setTheme('dark')
      setTheme("dark");
    },
    // 更改为自定义主题
    custom () {
      let newColor = {
        r: 12,
        g: 33,
        b: 234,
      };
      localStorage.setItem('themeName', 'zidingyi')
      this.setTheme('zidingyi')
      let newPrimaryColor = `${newColor.r},${newColor.g},${newColor.b}`;
      localStorage.setItem("primaryColor", newPrimaryColor); // 将新的主题色存入本地
      localStorage.setItem("primaryTextColor", newPrimaryColor); // 将新的主题色存入本地
      setTheme();
    },
  },
};
</script>
<style scoped lang="less">
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  .box-1 {
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
    background: rgba(@primaryColor, 1);
  }
  .box-2 {
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
    background: rgba(@primaryColor, 0.3);
  }
  p {
    color: rgb(@primaryTextColor);
  }
}
</style>