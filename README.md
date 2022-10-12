# legend-dynamic

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## instructions

### 参数
legendAbbr boolean //是否需要缩略图标
imgAbbr  string //缩略图标图片src
legendWidth number //整个图例宽度
liWidth  number //每项图例的宽度 可以通过调节legendWidth与liWidth来控制每行多少个图例
legendBorder boolean //是否需要图例外部的边框样式
legendTool boolean //是否需要标题栏
legendTitle string //标题名称
closeBtn boolean //是否需要关闭按钮
legendList array //图标数组，提供src（string），color（string），value（string）作为此对象的key使用（可同时全部使用），决定每项图例左侧类型是图片/色块/文字，其中当某一对象存在src时，额外提供unchecked（boolen 是否选中图片，默认为true，图片路径为src，切换时修改为false，图片路径为unCheckedSrc），uncheckedSrc（string）两个key，实现点击图片切换选中与非选中的图片。

## 插槽
left 在图例外层提供插槽
content 在图例标题栏与内容直接提供插槽

## 事件
closeLegend 关闭图标点击事件
legendAbbrClick 缩略图图标点击事件
liClick 单项图例点击事件

