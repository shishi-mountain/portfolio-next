import React from "react";

export const getStaticProps = async () => ({
  props: {
    title: "about me",
  },
});

const About = () => {
  return (
    <div>
      <h4>略歴</h4>
      <p>1999 広島大学理学部卒業</p>
      <p>1999〜2012　正社員でSE</p>
      <p>2012〜2020　整体師・自宅サロン</p>
      <p>
        2018〜2019　自宅サロンと並行して派遣社員で売上データ分析（EXCEL VBA）
      </p>
      <p>2019〜　フリーランスでWEBエンジニア</p>
      <img src="../styles/image/my.jpg" alt="" />
    </div>
  );
};

export default About;
