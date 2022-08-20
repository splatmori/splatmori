import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Splat8Features from '@site/src/components/Splat8Features';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            点击进入 斯普拉遁知识库 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="斯普吧，是斯普拉遁3（Splatoon 3）的一个咨询汇集分享的小站点">
      {/* <HomepageHeader /> */}
      <main>
        <Splat8Features />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
