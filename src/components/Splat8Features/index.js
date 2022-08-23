import React from 'react';
import clsx from 'clsx';
// import styles from './styles.module.css';
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
                     <p><a href="#" class="btn btn-d" >分享斯普拉遁（Splatoon）3 的点点滴滴。 搜索请善用右上角的搜索功能。（正在完善中，还无法使用）</a></p>
                     <a href="docs/intro" class="btn btn-d scroll-fx-left-in" target="_blank">点击 进入斯普资料库</a>
                  </div>
               </div>
            </div>
         </div>

         
         <div class="bloc bg-bg d-bloc" id="bloc-1">
            <div class="container bloc-lg bloc-sm-lg">
               <div class="row">
                  <div class="col text-center text-md-start animated fadeIn " data-appear-anim-style="fadeIn">
                     <h4 class="mg-md h3-style">正在加油建设中，再等等</h4>
                     <span class="badge badge--secondary">目前完成：初始登场武器的汇总（8/22）副武器汇总页（8/21）特殊武器的整理（8/20）</span>
                     <span class="badge badge--info">施工中🚧 ：地图场地的整理</span>
                     <p>斯普拉遁（日语：スプラトゥーン，英语：Splatoon，中国大陆旧译“喷射战士”、“喷色卡通”，台湾旧译“漆弹大作战”）是由任天堂开发并发行的第三人称射击游戏系列。第一款游戏《Splatoon》于2015年5月在Wii U平台发行。续作《Splatoon2》于2017年7月在任天堂Switch平台发行；其新增下载内容《Octo Expansion》于2018年6月发行。最新作《斯普拉遁3》预计于2022年9月9日在任天堂Switch平台发行，是系列首次中文化的作品。 - 维基百科</p>
                  </div>
               </div>
               
               <div class="row">
   <div class="col col--3">
      <div class="card">
         <div class="card__image">
            <img
               src="/img/worldfest.png"
               alt="发售前的试射会"
               title="前夜祭" />
         </div>
         <div class="card__body">
            <h4>试射会 - 石头剪子布</h4>
            <small>
            斯普拉遁3，将会8月27日或28日举办发售前的祭典活动。该祭典虽然是全球统一举办，但是各个区域的时间段不一样。
            </small>
         </div>
         <div class="card__footer">
            <a class="button button--primary button--block" href="/docs/fest/rock-paper-scissors/">详情</a>
         </div>
      </div>
   </div>
   <div class="col col--3">
   <div class="card">
         <div class="card__image">
            <img
               src="/img/special-weapon-cover.png"
               alt="splatoondirect"
               title="splatoondirect" />
         </div>
         <div class="card__body">
            <h4>splatoon 3 特殊武器汇总</h4>
            <small>
            斯普拉遁3，发售后首先登场的特殊武器（大招）一共有15种，我们对所有武器进行了汇总。
            </small>
         </div>
         <div class="card__footer">
         <a class="button button--primary button--block" href="/docs/weapon/special_weapon/">详情</a>
         </div>
      </div>
   </div>
   <div class="col col--3">
   <div class="card">
         <div class="card__image">
            <img
               src="/img/stage-cover.png"
               alt="stage"
               title="对战场地" />
         </div>
         <div class="card__body">
            <h4>对战场地汇总</h4>
            <small>
            斯普拉遁3的对战场地除了新发现的场地之外，还包括一部分斯普拉遁1，2的部分场地。<span class="badge badge--warning">(持续更新中)</span>
            </small>
         </div>
         <div class="card__footer">
         <a class="button button--primary button--block" href="/docs/stage/">详情</a>
         </div>
      </div>
   </div>
   <div class="col col--3">
   <div class="card">
         <div class="card__image">
            <img
               src="/img/main_weapon_cover.png"
               alt="main_weapon_cover"
               title="main_weapon_cover" />
         </div>
         <div class="card__body">
            <h4>主武器汇总</h4>
            <small>
            根据目前公开的信息，汇总了部分主武器的信息，包括副武器和特殊武器。<span class="badge badge--warning">(持续更新中)</span>
            </small>
         </div>
         <div class="card__footer">
            <a class="button button--primary button--block" href="/docs/main_weapon/">详情</a>
         </div>
      </div>
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