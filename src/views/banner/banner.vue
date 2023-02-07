<template>
  <div class="qy_banner">
    <div class="bg" v-if="mk"></div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="480px">
        <el-carousel-item>
          <img
            src="https://pic.qyer.com/public/home/focus/2023/02/05/16755719085049?imageMogr2/interlace/1|imageslim"
            alt=""
            class="Img"
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://pic.qyer.com/public/home/focus/2023/02/06/16756739975583?imageMogr2/interlace/1|imageslim"
            alt=""
            class="Img"
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://pic.qyer.com/public/home/focus/2023/02/05/16755730231406?imageMogr2/interlace/1|imageslim"
            alt=""
            class="Img"
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://pic.qyer.com/public/home/focus/2023/02/05/16755731347809?imageMogr2/interlace/1|imageslim"
            alt=""
            class="Img"
          />
        </el-carousel-item>
      </el-carousel>
      <div class="qy_search">
        <div class="qy_search_top">
          <div
            class="qy_item"
            @click="change1"
            :class="item_color1 ? 'item_color' : ''"
          >
            <i></i>
            <span class="gl">看攻略</span>
          </div>
          <div
            class="qy_item"
            @click="change2"
            :class="item_color2 ? 'item_color' : ''"
          >
            <i></i>
            <span class="xc">做行程</span>
          </div>
          <div
            class="qy_item"
            @click="change3"
            :class="item_color3 ? 'item_color' : ''"
          >
            <i></i>
            <span class="hotel">特价酒店</span>
          </div>
        </div>
        <div class="qy_search_bottom">
          <div class="qy_search_box" ref="qy_search_box">
            <div class="qy_search_gl">
              <input
                type="text"
                id="search"
                name=""
                placeholder="搜目的地/主题攻略/问题"
                @focus="mk = true"
                @blur="mk = false"
              />
            </div>
            <div class="qy_search_btn">
              <button class="button_search">搜索旅行攻略</button>
            </div>
            <div class="qy_search_info" v-if="mk">
              <div class="qy_search_title">
                <h3>热门城市</h3>
              </div>
              <ul class="city_info">
                <li class="city_info_item" v-for="item in city" :key="item.id">
                  <span>{{ item.name }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="qy_search_xc" ref="qy_search_xc" style="display: none">
            <div class="qy_search_xc">穷游行程助手，一分钟搞定你的攻略</div>
            <div class="qy_search_xc-btn">
              <button class="qy_search_xc_dz">免费私人订制</button>
              <button class="qy_search_xc_new">创建行程</button>
            </div>
          </div>
          <div
            class="qy_search_hotal"
            ref="qy_search_hotal"
            style="display: none"
          >
            <div class="qy_search_hotal_search">
              <input
                type="text"
                id="hotal_search"
                name=""
                placeholder="搜城市/机场/地标/酒店"
              />
            </div>
            <div class="data"></div>
            <div class="hotal_btn">
              <button class="search_price_hotal">搜索特价酒店</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    created(){
        this.xx()
    },
  data() {
    return {
      mk: false,
      item_color1: true,
      item_color2: false,
      item_color3: false,
      city:[]
    };
  },
  methods: {
    change1() {
      this.item_color1 = true;
      this.item_color2 = false;
      this.item_color3 = false;
      if (this.item_color1) {
        this.$refs.qy_search_box.style.display = "block";
        this.$refs.qy_search_xc.style.display = "none";
        this.$refs.qy_search_hotal.style.display = "none";
        console.log(this.$refs.qy_search_box.display);
      }
    },
    change2() {
      this.item_color2 = true;
      this.item_color1 = false;
      this.item_color3 = false;
      if (this.item_color2) {
        this.$refs.qy_search_box.style.display = "none";
        this.$refs.qy_search_hotal.style.display = "none";
        this.$refs.qy_search_xc.style.display = "block";
        console.log(this.$refs.qy_search_xc.display);
      }
    },
    change3() {
      this.item_color1 = false;
      this.item_color2 = false;
      this.item_color3 = true;
      if (this.item_color3) {
        this.$refs.qy_search_box.style.display = "none";
        this.$refs.qy_search_xc.style.display = "none";
        this.$refs.qy_search_hotal.style.display = "block";
      }
    },
    async xx(){
         let data= await this.$api.hotCity()
        //  return data
        this.city=data.data.result.hotcity
        console.log(data.data)
    }
  },
};
</script>
  <style lang="less">
.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 888;
  background-color: rgba(255, 255, 255, 0.6);
}
.qy_banner {
  position: relative;
  img {
    height: 480px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  height: 100%;
  width: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  height: 100%;
  width: 100%;
}
.qy_search {
  width: 792px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .qy_search_top {
    height: 52px;
  }
  .qy_item {
    float: left;
    width: 264px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    background-color: rgba(0, 0, 0, 0.75);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    cursor: pointer;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
  .item_color {
    background-image: linear-gradient(
      90deg,
      rgba(40, 213, 164, 0.8),
      rgba(38, 208, 181, 0.8)
    ) !important;
  }
  .qy_search_bottom {
    position: relative;
    width: 772px;
    height: 54px;
    top: -0.5px;
    padding: 10px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-image: linear-gradient(
      90deg,
      rgba(21, 219, 145, 0.8),
      rgba(6, 204, 199, 0.8)
    );
    .qy_search_gl {
      width: 582px;
      float: left;
      #search {
        box-sizing: border-box;
        border: 0;
        padding: 0 27px;
        width: 100%;
        height: 54px;
        font-size: 18px;
        outline: none;
        border: none;
        border-radius: 6px;
        color: #000;
      }
    }
    .qy_search_btn {
      float: left;
      width: 172px;
      border: 2px solid #fff;
      margin-left: 10px;
      border-radius: 6px;
      .button_search {
        box-sizing: border-box;
        display: inline-block;
        border: 0;
        width: 180px;
        height: 54px;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        background-color: transparent;
        cursor: pointer;
        text-align: center;
      }
    }
    .qy_search_info {
      position: absolute;
      z-index: 999;
      width: 522px;
      padding: 30px;
      background: hsla(0, 0%, 100%, 0.95);
      box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
      border-radius: 6px;
      top: 70px;
      .city_info {
        margin-left: -30px;
        .city_info_item {
          margin-top: 20px;
          margin-left: 30px;
          float: left;
          font-size: 14px;
          cursor: pointer;
          color: #636363;
        }
      }
    }
  }
}
</style>