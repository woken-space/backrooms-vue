<script>
import Menu from "@/components/Menu.vue";
import HomeScroller from "@/components/index/HomeScroller.vue";
import HomeTop from "@/components/index/HomeTop.vue";
import HomeLeft from "@/components/index/HomeLeft.vue";

export default {
  components: {HomeLeft, HomeScroller, HomeTop, Menu},
  mounted() {
    const shadow = document.querySelector('.shadow');
    const light = document.querySelector('.bulb');
    const filaments = document.querySelector('.filaments');

    light.addEventListener('click', function () {
      light.classList.toggle('off');
      shadow.classList.toggle('off');
      filaments.classList.toggle('off');
    });
  }
}
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="bulb">
        <div class="filaments"></div>
      </div>
    </div>
    <div class="floor">
      <div class="shadow"></div>
    </div>
  </div>
  <div class="common-layout">
    <el-container>
      <el-header class="menu">
        <Menu/>
      </el-header>
      <el-container class="home-body">
        <el-aside class="home-left" width="200px" height="1400px">
          <HomeLeft/>
        </el-aside>
        <el-container class="home-middle">
          <div class="home-top">
            <HomeTop/>
          </div>
          <div class="home-scroller">
            <HomeScroller/>
          </div>
          <el-footer class="home-footer">
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 50px;
  width: 100%;
}

.home-body {
  margin-top: 50px;
  height: 1600px;
  background-color: #232930;

  .home-left {
    position: fixed;
    left: 0;
    z-index: 3;
  }

  .home-middle {
    margin-left: 200px;

    .home-top {
      height: 200px;
    }

    .home-scroller {
      width: 80%;
      height: 1200px;
    }
  }

  .home-footer {
    height: 200px;
  }
}

.background {

  .container {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    position: absolute;
    z-index: 1;
    width: 75px;
    height: 500px;
    animation: bulb-swing 3s infinite ease-in-out;
    transform-origin: top center;

    top: 0;
    left: calc(50% - (75px / 2));
  }

  .container.paused {
    animation-play-state: paused;
  }

  .bulb {
    z-index: 10;
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    left: calc(50% - (75px / 2));
    background: #FFD700;
    box-shadow: 5px 5px 80px gold, 5px -5px 80px gold, -5px 5px 80px gold, -5px -5px 80px gold;
    cursor: pointer;
  }

  .bulb::before {
    content: "";
    position: absolute;
    width: 35px;
    height: 50px;
    bottom: 100%;
    left: calc(50% - (35px / 2));
    z-index: -1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  // 灯泡线
  .bulb::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 250px;
    background: black;
    bottom: 100%;
    left: calc(50% - 5px);
    z-index: -1;
  }

  .bulb .filaments {
    display: block;
    position: absolute;
    width: 2px;
    height: 30px;
    background: black;
    top: 2px;
    left: 28px;
    box-shadow: 17px 0 black;
    opacity: 0;
  }

  .bulb .filaments::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 4px;
    background: black;
    width: 2px;
    height: 12px;
    display: block;
    box-shadow: 4.5px 0 black, 9px 0 black;
  }

  .bulb.off {
    background: transparent;
    box-shadow: none;
    border: 1px solid black;
  }

  .filaments.off {
    opacity: 1;
  }

  @keyframes bulb-swing {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  .floor {
    position: absolute;
    background: #000c19;
    height: 200px;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .floor .shadow {
    position: absolute;
    background: #524c11;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    box-shadow: 20px 20px 100px gold, -20px 20px 100px gold, 20px -20px 100px gold, -20px -20px 100px gold;
    animation: shadow-swing 3s infinite ease-in-out;
  }

  .shadow.off {
    background: #000c19;
    box-shadow: none;
  }

  @keyframes shadow-swing {
    0% {
      transform: translateX(100px);
    }
    50% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(100px);
    }
  }
}
</style>
