<template>
  <div>
    <div class="footer bg-primary">
      <div class="container d-flex justify-content-between py-3">
        <div class="authorInfo">
          <p class="author">
            作者：
            <span>pickachu1006 Github</span>
          </p>
          <p>練習作品 ｜ 資料來源： 世界堂</p>
        </div>
        <div class="contactInfo d-md-block d-none">
          <p>問い合わせ：886-972-065-632</p>
          <p>（受付時間 09:00～18:00）</p>
        </div>
        <div class="admin mt-2">
          <router-link to="/login">
            <a href="#" class="btn btn-outline-light btn-sm">ADMIN</a>
          </router-link>
        </div>
      </div>
      <!-- <div class="container py-3">
        <div class="row">
          <div class="col-md-4">
            <div class="authorInfo">
              <p class="author">
                作者：
                <span>pickachu1006 Github</span>
              </p>
              <p>練習作品 ｜ 資料來源： 世界堂</p>
            </div>
          </div>
          <div class="col-md-4">
          <div class="contactInfo d-md-block d-none">
            <p>問い合わせ：886-972-065-632</p>
            <p>（受付時間 09:00～18:00）</p>
          </div>
          </div>
          <div class="col-md-4">
          <div class="admin mt-2">
            <router-link to="/login">
              <a href="#" class="btn btn-outline-light btn-sm">ADMIN</a>
            </router-link>
          </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"

p
    margin-bottom: 0.5rem
</style>