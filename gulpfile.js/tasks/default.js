// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// gulpの設定ファイル
const config = require("../config");

// webpackの設定ファイルの読み込み
const webpackConfig = require("../../build/webpack.config");

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("default", () => {
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(config.root.dest));
});