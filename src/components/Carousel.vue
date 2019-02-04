<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active carousel-item-header ">
            <img class="productImg d-block w-100" src="../assets/img/carousel-1.jpg" alt="First slide">
                <div class="textbox carousel-caption d-none d-md-block">
                    <div class="title">{{$t("Carousel.title1")}}</div>
                    <div class="detail">{{$t("Carousel.detail1")}}</div>
                    <div class="date">2018/11/28</div>
                </div>
            </div>
            <div class="carousel-item carousel-item-header " >
            <img class="d-block w-100" src="../assets/img/carousel-2.jpg" alt="Second slide">
                <div class="textbox carousel-caption d-none d-md-block">
                    <div class="title">{{$t("Carousel.title2")}}</div>
                    <div class="detail">{{$t("Carousel.detail2")}}</div>
                    <div class="date">2018/10/16</div>
                </div>
            </div>
            <div class="carousel-item carousel-item-header" >
            <img class="d-block w-100" src="../assets/img/carousel-3.jpg" alt="Third slide">
                <div class="textbox carousel-caption d-none d-md-block">
                    <div class="title">{{$t("Carousel.title3")}}</div>
                    <div class="detail">{{$t("Carousel.detail3")}}</div>
                    <div class="date">2018/08/17</div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Carousel',
  data(){
      return{
          
      }
  },
}
</script>
<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"
@import "src/assets/helpers/font.sass"

#carouselExampleIndicators
    padding-top: 80px
.carousel-item-header
    height: 400px
+pad
    .carousel-item-header
        height: 100%
.textbox
    background-color: rgba(255, 255, 255,0.6)
.title
    +text(black,'Noto Sans TC',1.5rem,bold,auto,auto)
.detail
    +text(black,'Noto Sans TC',1rem,normal,auto,auto)
.date
    +text(gray,'Noto Sans TC',0.8rem,normal,auto,auto)

</style>
