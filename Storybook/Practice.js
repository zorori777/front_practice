import React from 'react';
import styled from 'styled-components';

import noimage from '../images/noimage.svg';
import logo from '../images/logo.svg';

const Wrapper = styled.div`
  padding: 30px 0px 28px 0px;
  border-bottom: solid 1px #e3e3e3;
  width: 560px;
  .cover {
    margin: 0 0 20px;
    height: 228px;
    overflow: hidden;
  }
  .jobtype {
    display: flex;
    span {
      height: 20px;
      line-height: 18px;
      font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans", "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
      font-size: 11px;
      font-weight: 500;
      display: block;
      box-sizing: border-box;
      margin: 0 8px 0 0;
      padding: 0 4px 0 4px;
      color: #1AA4BA;
      background-color: transparent;
      border: solid 1px #1AA4BA;
      border-radius: 2px;
    }
  }
  .title {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4em;
    margin: 10px 0 8px 0;
  }
  .description {
    line-height: 1.5em;
    color: #9DA0A4;
    margin: 0 0 14px;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }
  .footer {
    display: flex;
    align-items: center;
    margin: 16px 0 0 0;
    width: 100%;
    .companylogo {
      width: 50px;
      height: 50px;
      padding: 0 12px 0 0;
      img {
        height: 100%;
        border-radius: 50%;
        background-color: #000000;
      }
    }
    .companyname {
      flex: 0 1 auto;
      min-width: 0;
      h3 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: #24282a;
        line-height: 1.3em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .actions {
      flex: 1 0 auto,
      text-align: right;
      .published-date {
        display: inline-block;
        padding: 0 15px 0 0;
        margin: 0 15px;
        border-right: 1px solid #ccc;
        font-size: 11px;
        line-height: 20px;
        color: #ccc;
      }
      .support-points {
        font-size: 18px;
        color: #aaa;
        display: inline-block;
        vertical-align: middle;
        a {
          font-weight: 600;
        }
      }
      .bookmark-form {
        display: inline-block;
        vartical-align: middle;
        line-height: 20px;
        padding: 0 10px 0 10px;
        margin: 0px;
        .bookmark-button {
          color: #aaa;
        }
      }
    }
  }
`

const WantedlyJobPosting = () => {
  return (
    <Wrapper>
      <div>
        <div className="cover">
          <img src={noimage} alt='cover-image' />
        </div>
        <div className="jobtype">
          <span>Web engineer</span>
        </div>
        <h1 className='title'>
          <a>フロントエンドエンジニア募集！</a>
        </h1>
        <p className="description">
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガン...
        </p>
      </div>

      <div className="footer">
        <div className="companylogo">
          <img src={logo} alt='logo' />
        </div>

        <div className="companyname">
          <h3>
            <a>株式会社カブシキガイシャ</a>
          </h3>
        </div>

        <div className="actions">
          <div className="published-date">
            <i className="far fa-clock"/>
            1 day ago
          </div>
          <div className="support-points">
            <a>
              <i className="fas fa-volume-down"/>
                23
            </a>
          </div>
          <div className="bookmark-form">
            <div className="bookmark-button">
              <i className="far fa-bookmark"/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

export default WantedlyJobPosting;
