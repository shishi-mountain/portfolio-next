import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const cardStyle = {
  fontSize: 12,
  marginTop: 6,
};

function FormRow() {
  return (
    <React.Fragment>
      <Grid container item spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item md={6}>
          <Grid item xs={12}>
            <Item style={cardStyle}>
              <h4>FuRai</h4>
              <p>1977.1生</p>
              <p>主婦</p>
              <p>webエンジニア</p>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={cardStyle}>
              <h4>略歴</h4>
              <p>1999 広島大理学部卒業</p>
              <p>1999~2012 正社員でSE</p>
              <p>2012〜2020 整体師・自宅サロン</p>
              <p>2018~2019 派遣社員でデータ分析（Excel VBA）</p>
              <p>2019〜 フリーランスでWebエンジニア</p>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={cardStyle}>
              <h4>資格</h4>
              <p>第二種情報処理技術者(1997.12)</p>
              <p>高校教諭一種免許（理科）(1999.3)</p>
              <p>ORACLE MASTER Silver(2003.8)</p>
              <p>ソフトウェア開発技術者(2005.6)</p>
              <p>データベーススペシャリスト(2010.6)</p>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={cardStyle}>
              <h4>趣味</h4>
              <p>登山（毎週末）</p>
              <p>ランニング（フルマラソン 3'21）</p>
              <p>筋トレ（毎日）</p>
              <p>キャンプ（月１）</p>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={cardStyle}>
              <h4>日々</h4>
              <p>高校生・中学生の息子娘と、</p>
              <p>柴犬２匹と、</p>
              <p>たまに単身赴任の旦那さんとの生活</p>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Item>
            <img src="./image/my.jpg" width="100%" />
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Top() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={1} alignItems="flex-end">
          <FormRow />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function About() {
  return <Top />;
}
