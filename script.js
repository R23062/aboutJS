document.addEventListener('DOMContentLoaded', () => {

  // --- 1. スクロールアニメーションの実装 ---
  // Intersection Observer APIを使用して、要素がビューポートに入ったかを監視
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // isIntersectingプロパティがtrueの場合（画面内に入った場合）
      if (entry.isIntersecting) {
        // 'visible'クラスを追加してアニメーションを発火
        entry.target.classList.add('visible');
        // 一度表示されたら、監視を解除してパフォーマンスを向上
        observer.unobserve(entry.target);
      }
    });
  }, {
    // 画面の下から100pxの位置で交差したと判定
    rootMargin: '0px 0px -100px 0px',
  });

  // アニメーションさせたい要素をすべて選択
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  // 各要素を監視対象に追加
  animatedElements.forEach(el => observer.observe(el));


  // --- 2. 「トップへ戻る」ボタンの実装 ---
  const backToTopButton = document.getElementById('back-to-top-btn');

  // スクロールイベントを監視
  window.addEventListener('scroll', () => {
    // 画面の高さの半分以上スクロールされたらボタンを表示
    if (window.scrollY > window.innerHeight / 2) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // ボタンクリックでトップへスムーズにスクロール
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
