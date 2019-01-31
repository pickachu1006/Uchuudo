<template>
  <div>
    <div class="footer bg-primary">
      <div class="container d-flex justify-content-between py-3">
        <div class="authorInfo">
          <p class="author">
            作者：
            <a class="text-dark" href="https://github.com/pickachu1006/Uchuudo" target="_blank">pickachu1006 Github</a>
          </p>
          
          <p>練習作品 ｜ 資料來源： <a href="https://webshop.sekaido.co.jp/" target="_blank" class="text-dark">世界堂</a></p>
        </div>
        <div class="contactInfo d-md-block d-none">
          <p>問い合わせ：886-123-456-789</p>
          <p>（受付時間 09:00～18:00）</p>
        </div>
        <div class="admin mt-2">
          <select class="custom-select bg-primary text-light" id="inputGroupSelect01" v-model="Lang" @change="setLang">
            <option selected value="jp">日本語</option>
            <option value="tw">繁體中文</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";


export default {
  name: "Footer",
  data() {
    return {
      Lang:'jp',
    };
  },
  methods: {
    setLang(){
      // $i18n.locale = this.Lang;
      console.log(this.Lang )
    }
  },
};
</script>
<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"

p
    margin-bottom: 0.5rem
.authorInfo a
  text-decoration: none
</style>