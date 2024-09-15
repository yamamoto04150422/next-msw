"use client";

import "./css/style_tips.css";

export default function Page() {
  return (
    <>
      <div className="pseudo-element-container">
        <h2>擬似要素</h2>
        <div className="pseudo-element">
          <p>要素</p>
        </div>
      </div>

      <div className="pseudo-class-container">
        <h2>擬似クラス</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className="selector-container">
        <h2>隣接・間接・直下セレクタ</h2>
        <div className="selector">
          <p>要素1</p>
          <h3>隣接セレクタ</h3>
          <p>要素2</p>
          <p>要素3</p>
        </div>
      </div>

      <div className="position-container">
        <h2>positionプロパティ</h2>
        <div className="position">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>
    </>
  );
}
