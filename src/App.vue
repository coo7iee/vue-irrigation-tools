<template>
  <div id="app">
    <LegendDynamic :legendAbbr="legendAbbr" :legendList="legendList"  @legendAbbrClick="legendAbbrClick" @closeLegend="closeLegend" :legendBorder="true">
    </LegendDynamic>
  </div>
</template>

<script>
import LegendDynamic from './components/LegendDynamic.vue'
export default {
  name: 'App',
  components: {
    LegendDynamic
  },
  data(){
    return{
      legendList:[{
          color:'#000',
          value:'234'
        },
        {
          src:require("@/assets/logo.png"),
          value:'234'
        },
      ],
      legendAbbr:true
    }
  },
  methods:{
    closeLegend(){
      this.legendAbbr = true
    },
    legendAbbrClick(){
      this.legendAbbr = false
    }
  }
}
</script>
