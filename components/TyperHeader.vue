<template>
  <div v-if="!$route.meta.hideTitleBar" class="top curvy-box">
    <h2>
      <vue-typer
        id="vtyperTitle"
        :text="title"
        :repeat="0"
        initial-action="typing"
        @typed-char="onTypedCharTitle"
      ></vue-typer>
    </h2>
    <h4>
      <vue-typer
        id="vtyperSubtitle"
        :text="subtitle"
        :repeat="0"
        pre-type-delay="3200"
        initial-action="typing"
        @typed-char="onTypedCharSubtitle"
      ></vue-typer>
    </h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TyperHeader",
  data() {
    return {
      countWordTitle: 0,
      countWordSutTitle: 0,
    };
  },
  async fetch() {
    await this.$store.dispatch("data/fetchData", "general");
  },
  computed: {
    ...mapGetters("data/getData"),
    title: {
      get() {
        return (
          "> Hello, World! I'm " + this.$store.state.data.cv.general.title + "!"
        );
      },
    },
    subtitle: {
      get() {
        return "> " + this.$store.state.data.cv.general.subtitle;
      },
    },
  },
  methods: {
    onTypedCharTitle: function (typedChar, typedCharIndex) {
      var vtyperElement = document.getElementById("vtyperTitle");

      if (typedCharIndex == 0) {
        vtyperElement.firstChild.innerHTML = "";
      }
      var lessNodes = vtyperElement.lastChild.childNodes;
      if (typedChar == " " || lessNodes.length == 1) {
        var finalNodes = vtyperElement.firstChild;
        var listNodes = finalNodes.childNodes;

        var newNode = document.createElement("span");

        var x = this.countWordTitle;
        var countNodes = listNodes.length;
        while (x < countNodes) {
          if (listNodes[this.countWordTitle].innerHTML != " ")
            newNode.insertAdjacentElement(
              "beforeend",
              listNodes[this.countWordTitle]
            );
          else this.countWordTitle++;

          // TODO: ADD LAST CHAR
          x++;
        }
        newNode.className = "nowrap";
        finalNodes.insertAdjacentElement("beforeend", newNode);

        this.countWordTitle++;
      }
    },
    onTypedCharSubtitle: function (typedChar, typedCharIndex) {
      var vtyperElement = document.getElementById("vtyperSubtitle");

      if (typedCharIndex == 0) {
        vtyperElement.firstChild.innerHTML = "";
      }
      var lessNodes = vtyperElement.lastChild.childNodes;
      if (typedChar == " " || lessNodes.length == 1) {
        var finalNodes = vtyperElement.firstChild;
        var listNodes = finalNodes.childNodes;

        var newNode = document.createElement("span");

        var x = this.countWordSubtitle;
        var countNodes = listNodes.length;
        while (x < countNodes) {
          if (listNodes[this.countWordSubtitle].innerHTML != " ")
            newNode.insertAdjacentElement(
              "beforeend",
              listNodes[this.countWordSubtitle]
            );
          else this.countWordSubtitle++;

          // TODO: ADD LAST CHAR
          x++;
        }
        newNode.className = "nowrap";
        finalNodes.insertAdjacentElement("beforeend", newNode);

        this.countWordSubtitle++;
      }
    },
  },
};
</script>

<style></style>
