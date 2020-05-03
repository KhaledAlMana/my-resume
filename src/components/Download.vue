<template>
  <div class="container">
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Experience></Experience>
    <Education></Education>
  </div>
</template>

<script>
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default {
  name: "Download",
  components: {
    AboutMe,
    Experience,
    Education,
    Skills
  }
};
</script>
<style lang="scss">



@media print {
  .middle{
    width: 100%;
    padding: 0px;
  }

  .curvy-box{
    margin: 0 auto;
    width: 100%;
  }

  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  $font: Helvetica, 'Roboto', sans-serif;
  body *{
    font-size: 30px !important;
    font-family: $font !important;
    line-height: 120%;
    .card-title > :first-child{
      font-size: xx-large !important;
    }
  }

  #footer{
    display: none;
  }

  .downloadpdf {
    width: 150%;
    margin-left: -260px;
    margin-bottom: 35px;
    padding: 15px;
    .title {
      display: none !important;
    }
  }
}

</style>
