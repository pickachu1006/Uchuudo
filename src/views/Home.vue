<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar/>
    <Carousel/>
    <div class="main bg-primary">
      <!-- 最新消息 -->
      <section class="newsArea" id="newsArea">
        <h2 class="news bg-primary text-contract">News</h2>
        <div class="tableBox bg-white">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row" width="100" class="pt-4">全店共通</th>
                <td width="100" class="pt-4">2018/11/30</td>
                <td width="80" class="text-right text-danger tag pt-4">NEW</td>
                <td class="pt-4">第15回世界絵画大賞展の日程を決定しました！！</td>
              </tr>
              <tr>
                <th scope="row">新宿本店</th>
                <td>2018/11/23</td>
                <td class="tag"></td>
                <td>マスキングテープ詰め放題開催!!</td>
              </tr>
              <tr>
                <th scope="row">全店共通</th>
                <td>2018/11/08</td>
                <td class="tag"></td>
                <td>「2018年 冬の大コミックフェア」 開催中！！</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-outline-light d-block mx-auto btn-lg mb-5 px-5">もっと見る</button>
      </section>
      <!-- 實體店家資訊 -->
      <section class="container-fluid bg-light" style="position: relative" id="realshop">
        <div class="row">
          <div class="col-md-5 bg-cover p-0 photo shopImg"></div>
          <div class="col-md-7 pl-4 shop-list py-4">
            <div class="bigger-navi__detail container">
              <h2 class="bigger-navi__title text-contract">
                <span class="english">SHOP</span>店舗情報
              </h2>
              <div class="bigger-navi__shop-group row mt-4">
                <div class="col-md-6">
                  <ul class="bigger-navi__shoplist p-0">
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>新宿本店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>新宿西口文具館
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>池袋パルコ店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>立川北口店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>聖蹟桜ヶ丘アートマン店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>相模大野店
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="bigger-navi__shoplist p-0">
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>町田店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>ルミネ横浜店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>ルミネ藤沢店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>武蔵野美術大学店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>新所沢パルコ店
                      </a>
                    </li>
                    <li class="bigger-navi__shopitem">
                      <a href="#">
                        <i class="bigger-navi__shoparrow"></i>名古屋パルコ店
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 關於我們 -->
      <section class="container-fluid bg-light" id="aboutAs">
        <div class="row align-items-center">
          <div class="col-md-7 bg-cover p-0 photo aboutImg d-md-none"></div>
          <div class="col-md-5 bg-cover p-0 text-center py-5">
            <h2 class="bigger-navi__title text-contract">
              <p class="english">COMPANY</p>企業情報
            </h2>
            <p class="about-text">世界堂は昭和15年、東京・新宿に
              <br>おいて創業いたしました。
              <br>
            </p>
            <p class="mt-4 about-text">
              <a href="#">会社概要を見る</a>
            </p>
          </div>
          <div class="col-md-7 bg-cover p-0 photo aboutImg rwd"></div>
        </div>
      </section>
      <!-- 網路商店 -->
      <section class="container-fluid bg-light">
        <div class="row">
          <div
            class="col-md-12 bg-cover p-0 photo onlineImg d-flex align-items-center justify-content-center"
          >
            <div class="box text-center">
              <h2 class="bigger-navi__title text-contract">
                <p class="english">ONLINE SHOP</p>世界堂オンラインショップ
              </h2>
              <br>
              <router-link to="/shop">
                <button type="button" class="btn btn-outline-primary btn-lg">オンラインショップを見る</button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script >
import $ from "jquery";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Carousel,
    Footer
  },
  data() {
    return {
      isLoading: false //控制全畫面loading效果
    };
  }
};
</script>

<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"
@import "src/assets/helpers/clear.sass"
.news
  font-size: 3.75rem
  font-family: "Dosis", Roboto, "Droid Sans", "HiraKakuProN-W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴProN W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴPro W3", Meiryo, "メイリオ", sans-serif;
  font-weight: 300
  margin-bottom: -32px
  padding-left: 17%
.tableBox
  margin: 0% 15% 3% 15%
  padding: 2% 15% 1% 15%
+iphone6-1
  .tableBox
    padding: 0%
    margin: 2% 6% 7% 6%
  .tag
    display: none
.tableBox .table tbody tr:hover
  color: green
  cursor: pointer
.bigger-navi__title
  font-size: 1.125rem
  font-weight: normal
  letter-spacing: .15em
.bigger-navi--shop .bigger-navi__detail 
  background-color: #f2f2f2
.bigger-navi__title .english
  font-size: 3.75rem
  font-family: Roboto, "Droid Sans", "HiraKakuProN-W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴProN W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴPro W3", Meiryo, "メイリオ", sans-serif
  font-weight: 300
.bigger-navi__shoplist 
  list-style: none
.bigger-navi__shopitem 
  font-size: 0.875rem
  padding: 7px 0 7px 20px
.photo
  height: 400px
  background-size: cover
  background-position: center center
.shopImg
  background-image: url(../assets/img/shop.png)
.aboutImg
  background-image: url(../assets/img/about.png)
.onlineImg
  background-image: url(../assets/img/online-3.png)
.about-text
  font-size: 1.125rem
  line-height: 2
  letter-spacing: .1em
  margin-top: 30px
+iphone6plus-1
  .rwd
    display: none
</style>