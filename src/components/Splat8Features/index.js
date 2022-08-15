import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import styles1 from './style.css';
// import styles2 from './css/bootstrap.min.css';
import styles3 from './css/animate.min.css';
// import styles4 from 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap&subset=latin,latin-ext';
// import styles5 from 'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap&subset=latin,latin-ext';


export default function Splat8Features() {
  return (
      <div class="page-container">
         <div class="bloc bg-c-3 d-bloc bloc-bg-texture texture-darken-strong" id="bloc-0">
            <div class="container bloc-lg bloc-lg-lg">
               <div class="row">
                  <div class="col text-center text-md-start">
                     <h3 class="mg-md h3-style">斯普吧, splat8</h3>
                     <p class="p-style">分享斯普拉遁（Splatoon）3 的点点滴滴。</p>
                     <a href="docs/intro" class="btn btn-d scroll-fx-left-in" target="_blank">点击 进入斯普资料库</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="bloc bg-bg d-bloc" id="bloc-1">
            <div class="container bloc-lg bloc-sm-lg">
               <div class="row">
                  <div class="col text-center text-md-start animated fadeIn " data-appear-anim-style="fadeIn">
                     <h4 class="mg-md">正在加油建设中，再等等</h4>
                     <p>斯普拉遁（日语：スプラトゥーン，英语：Splatoon，中国大陆旧译“喷射战士”、“喷色卡通”，台湾旧译“漆弹大作战”）是由任天堂开发并发行的第三人称射击游戏系列。第一款游戏《Splatoon》于2015年5月在Wii U平台发行。续作《Splatoon2》于2017年7月在任天堂Switch平台发行；其新增下载内容《Octo Expansion》于2018年6月发行。最新作《斯普拉遁3》预计于2022年9月9日在任天堂Switch平台发行，是系列首次中文化的作品。 - 维基百科</p>
                  </div>
               </div>
            </div>
         </div>
         <a class="bloc-button btn btn-d scrollToTop" onclick="scrollToTarget('1',this)">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
               <path class="scroll-to-top-btn-icon" d="M30,22.656l-14-13-14,13"/>
            </svg>
         </a>
      </div>
  );
}