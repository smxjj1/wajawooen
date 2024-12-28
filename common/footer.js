function createFooterElement() {
  const commonDiv = document.createElement('div');
  commonDiv.innerHTML = `
  <div class="footer-container">
      <div class="logo-box">
        <div class="footer-logo">
          <img src="./static/image/logo.png" alt="">
          <p>Wajawood is a manufacturer of wooden sheets in China. We have complete wooden plastic manufacturing
            capabilities and can provide customers with one-stop solutions.</p>
          <p>In many cases, we can also design and customize wooden products according to your needs.
          </p>
        </div>
        <div class="Popular-box">
          <h3>Popular Product</h3>
          <ul>
            <li>Wooden Sheet</li>
            <li>Wooden Mirror Sheet</li>
            <li>Wooden Box</li>
            <li>Wooden Signs</li>
            <li>Wooden Displays</li>
          </ul>
        </div>
        <div class="Information-box">
          <h3>Information</h3>
          <ul>
            <li>Blog</li>
            <li class="titktok-box">
              <a href="">
                <img src="./static/image/titktok.png" alt="titktok">
              </a>
              <a href="">
                <img src="./static/image/facebook.png" alt="facebook">
              </a>
              <a href="">
                <img src="./static/image/youtube.png" alt="youtube">
              </a>
              <a href="">
                <img src="./static/image/instagram.png" alt="instagram">
              </a>
              <a href="">
                <img src="./static/image/whatsapp.png" alt="whatsapp">
              </a>
            </li>
          </ul>
        </div>
        <div class="Information-box">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: market@Wajawood.com</li>
            <li>Phone: +8613925278649</li>
            <li>Address: No. 15 Bao Shu Road,Tai He Xie Jia Zhuang Bai Yun Zone Guangzhou,GuangDong 510000 China</li>
          </ul>
        </div>
        <div></div>
      </div>

    </div>
  `;
  return commonDiv;
}

// 导出函数，以便其他文件可以引用它
export { createFooterElement };