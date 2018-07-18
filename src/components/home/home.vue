<template>
    <div class="home">
        <div class="bg1" :style="bgImg1">
            <div class="brand">
                <img src="./logo1.png" alt="">
                <h2>百威,敬真我</h2>
            </div>
        </div>
        <div class="bg2" :style="bgImg2">
        </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    isShow: Boolean
  },
  data() {
    return {
      bgImg1: {
        backgroundImage: "url(" + require("../../assets/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      bgImg2: {
        backgroundImage: "url(" + require("../../assets/bg1.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/css/variables.styl';

.home {
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 0;

    .bg1 {
        width: 100%;
        height: 100%;
        position: relative;

        .brand {
            position: absolute;
            top: 15%;
            left: 5%;

            h2 {
                margin-top: 20px;
                line-height: 50px;
                color: #eeffff;
                font-family: Arial;
            }
        }
    }

    .bg2 {
        width: 100%;
        height: 100%;
    }
}

@media (min-width: 768px) {
    .bg2 {
        display: none;
    }
}

@media (max-width: 768px) {
    .bg1 {
        display: none;
    }
}
</style>
