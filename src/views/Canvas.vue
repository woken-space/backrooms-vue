<template>
  <iframe id="iframe" :src="src" frameborder="0" width="100%" height=""></iframe>
</template>

<script>
import '../lib/smoke/jquery-1.4.2.min'
import '../lib/smoke/jquery.qrcode'
import '../lib/smoke/qrcode'

export default {
  name: "canvas",
  data() {
    return {
      src: require('../lib/smoke/index.html')
    }
  },
  computed: {},
  mounted() {
    jQuery('#qrcodeTable').qrcode({width: 180, height: 180, text: $("#iframe").attr("src")});
    window.onload = function () {
      var hidemobilebtn = document.getElementById("hidemobile");
      var showmobilebtn = document.getElementById("showmobile");
      var mobileframe = document.getElementById("mobileFrame");
      if (!hidemobilebtn) return false;
      if (!showmobilebtn) return false;
      if (!mobileframe) return false;
      hidemobilebtn.onclick = function () {
        mobileframe.style.display = "none";
        showmobilebtn.style.display = "block";
      }
      showmobilebtn.onclick = function () {
        this.style.display = "none";
        mobileframe.style.display = "";
      }
    }
    document.getElementById("mobileFrame").getElementsByTagName("iframe")[0].onload = function () {
      this.style.width = "301px";
    }
    $(document).ready(function () {
      $("#hidemobile").click(function () {
        $("#mobileFrame").slideToggle();
      });
    });
  }
}
</script>

<style lang="scss" scoped>
//.none {
//  display: none !important
//}
//@media screen and (max-width: 640px) {
//  #mobileFrame {
//    display: none !important;
//  }
//}
//.qrcode {
//  width: 287px;
//  height: 320px;
//  background: #f7f7f7;
//  padding-top: 80px;margin: 1px 0 0 4px; text-align: center;
//}
//.qrcode table {
//  vertical-align: middle;
//  text-align: center;
//  margin: 0px auto;
//  width: 200px;
//  padding: 1px;
//  border: 1px solid #ccc;
//  background: #fff;
//}
//.qrcode p {
//  text-align: center;
//  height: 36px;
//  font-size: 15px;
//  font-family: "微软雅黑 Light";
//  color: #ff0000;
//  line-height: 36px;
//}
//@media screen and (min-width: 640px) {
//  .coright {
//    position: absolute;
//    bottom: 0px;
//    height: 24px;
//    line-height: 24px;
//    color: #666;
//    text-align: center;
//    background: #fff;
//    width: 100%;
//  }
//}
</style>