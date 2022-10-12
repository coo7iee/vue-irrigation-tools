<template>
  <div class="legend-container">
    <img
      :src="imgAbbr"
      alt=""
      class="legend-abbr"
      @click="legendAbbrClick"
      v-if="legendAbbr"
    />
    <div
      v-if="legendList.length && !legendAbbr"
      :style="`width:${legendWidth}px;`"
      :class="legendBorder ? 'legend-border' : ''"
    >
      <div class="legend-title" v-if="legendTool">
        <h3>{{ legendTitle }}</h3>
        <div @click="closeLegend" v-if="closeBtn">X</div>
      </div>
      <slot name="content"></slot>
      <ul>
        <li
          v-for="(item, index) in legendList"
          :key="index"
          :style="`width:${liWidth}px;`"
          @click="liClick(item)"
        >
          <!-- 图片 -->
          <img
            :src="item?.unchecked ? item.uncheckedSrc  :item.src"
            alt="加载失败"
            v-if="item?.src"
            class="legend-item-img"
          />
          <!-- 颜色 -->
          <div
            :style="{ background: item.color }"
            v-if="item?.color"
            class="legend-item-block"
          ></div>
          <!-- 文字 -->
          <span class="legend-item-text">{{
            item?.value ? item.value : "——"
          }}</span>
        </li>
      </ul>
    </div>
    <div v-else-if="!legendList.length && !legendAbbr">暂 无 图 例</div>
    <slot name="left"></slot>
  </div>
</template>

<script>
export default {
  name: "LegendDynamic",
  props: {
    legendTool: {
      type: Boolean,
      default: true,
    },
    legendBorder: {
      type: Boolean,
      default: true,
    },
    legendAbbr: {
      type: Boolean,
      default: true,
    },
    imgAbbr: {
      type: String,
      default: require(`/src/assets/legend.png`),
    },
    closeBtn: {
      type: Boolean,
      default: true,
    },
    legendList: {
      type: Array,
      default: () => [],
    },
    legendWidth: {
      type: Number,
      default: 240,
    },
    legendTitle: {
      type: String,
      default: "图例",
    },
    liWidth: {
      type: Number,
      default: 60,
    },
  },
  methods: {
    legendAbbrClick() {
      this.$emit("legendAbbrClick", true);
    },
    closeLegend() {
      this.$emit("closeLegend", true);
    },
    liClick(data) {
      this.$emit("liClick", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.legend-container {
  padding: 10px;
  .legend-border {
    position: relative;
    border: 1px solid #00effe;
    box-shadow: 0px 0px 2px 0px rgba(107, 150, 253, 0.52) inset,
      0px 0px 20px 0px rgba(105, 124, 255, 0.78) inset;
    border-radius: 5px;
    z-index: 400;
    color: #00ffee;
    &:before,
    &:after {
      position: absolute;
      width: 30.7px;
      height: 5px;
      background: url("~@/assets/box_right.png") no-repeat;
      background-size: cover;
      content: "";
      display: block;
    }

    &:before {
      top: 0;
      right: 19px;
    }

    &:after {
      bottom: 0px;
      left: 19px;
      background-image: url("~@/assets/box_bottom.png");
    }
  }
  .legend-title {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 10px 15px;
    align-items: center;
    h3 {
      line-height: 30px;
      margin: 0;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 15px 10px;
    padding: 0;
    li {
      display: flex;
      cursor: pointer;
      font-size: 14px;
      align-items: center;
      list-style: none;
      line-height: 20px;
      height: 30px;
    }
  }
  .legend-item-img {
    width: 20px;
    height: 20px;
  }
  .legend-item-block {
    display: inline-block;
    width: 20px;
    height: 10px;
    border-radius: 2px;
  }
  .legend-item-text {
    padding: 0 5px 0 3px;
  }
}
</style>
