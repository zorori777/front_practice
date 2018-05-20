import React from 'react';
import styled from 'styled-components';

const Wrapper =　styled.div `
  background-color: #55c500
  color: #fff;
  height: 56px;

  a:hover {
    cursor : pointer;
  }
  .Wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .box {
    margin-left: 12px;
  }

  .left-content {
    width: 50%;
    display: flex;
    justify-content: flex-start;

    .left-content__box {
      margin-left: 12px;
      display: flex;

      .fas.fa-caret-down {
        margin-left: 10px;
      }
    }
  }

  .right-content {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    .right-content__box {
      margin-right: 12px;
    }
  }
`

const QiitaHeader = () => {
  return (
    <Wrapper>
      <header className="Wrap">
        <div className="left-content">
          <a className="left-content__box">Qiita</a>
          <i class="fas fa-caret-down"></i>
          <div className="left-content__box">
            <div>ホーム</div>
            <i class="fas fa-caret-down"></i>
          </div>
          <div className="left-content__box">
            <div>コミュニティ</div>
            <i class="fas fa-caret-down"></i>
          </div>
           {/* 後form componentを作成する予定 */}
          <div className="left-content__box">Form</div>
        </div>
        <div className="right-content">
          <a className="right-content__box">ストック一覧</a>
          <a className="right-content__box">投稿する</a>
          <div className="right-content__box">０</div>
          <div className="right-content__box">アイコン</div>
        </div>
      </header>
    </Wrapper>
  )
}

export default QiitaHeader
