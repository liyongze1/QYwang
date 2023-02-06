<template>
  <div class="header">
    <div class="warp">
      <div class="logo_box">
        <router-link to="/">
          <img
            src="https://fes.qyerstatic.com/FgP-BkmxyKWjMKv-bAbvpXg4G2r2?imageslim"
            alt=""
            class="logo"
          />
        </router-link>
      </div>
      <div class="nav">
        <ul>
          <li class="item">
            <router-link to="/destination">目的地</router-link>
          </li>
          <li class="item">
            <router-link to="/idiom">锦囊</router-link>
          </li>
          <li class="item">
            <router-link to="/community">
              社区
              <i class="iconfont icon-xiala"></i>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/itinerary_Helpn">行程助手</router-link>
          </li>
          <li class="item">
            <router-link to="/shopping">
              商城
              <i class="iconfont icon-xiala"></i>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/hotel"
              >酒店·民宿<i class="iconfont icon-xiala"></i
            ></router-link>
          </li>
          <li class="item">
            <router-link to="/special_Hotel">特价酒店</router-link>
          </li>
        </ul>
      </div>
      <div class="login_choose">
        <ul>
          <li class="item_search">
            <span class="iconfont icon-sousuo"></span>
            <span style="margin-right: 10px; margin-left: 10px; color: #c0c0c0;">|</span>
          </li>
          <li class="tb">
            <span class="iconfont icon-taobao"></span>
          </li>
          <li class="qq">
            <span class="iconfont icon-qq"></span>
          </li>
          <li class="item_weiixn">
            <span class="iconfont icon-weixin"></span>
          </li>
          <li class="item_weibo">
            <span class="iconfont icon-weibo"></span>
          </li>
          <li class="item_register">
            <span class="register">注册</span>
          </li>
          <li class="item_login">
            <span class="login">登录</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.header {
  position: absolute;
  top: 0;
  .warp {
    width: 1440px;
    height: 60px;
    margin: 0 auto;
    background-color: red;
    .logo_box {
      float: left;
      width: 76px;
      height: 50px;
      padding-top: 14px;
      margin-left: 30px;
      overflow: hidden;
      .logo {
        width: 76px;
        height: 36px;
      }
    }
    .nav {
      float: left;
      font-size: 16px;
      ul > li {
        float: left;
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        a {
          color: #fff;
        }
      }
    }
    .login_choose {
      float: right;
      padding-right: 30px;
      color: #fff;
      font-size: 14px;
      li {
        padding-left: 14px;
        display: inline-block;
        line-height: 60px;
      }
      .icon-sousuo{
        font-size: 20px;
      }
      .search {
        font-size: 20px;
      }
    }
  }
}
</style>