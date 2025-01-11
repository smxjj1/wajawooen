function createHeaderElement() {
  const commonDiv = document.createElement("div");
  commonDiv.innerHTML = `
  <section class="header-container">
  <div class="content">
    <div class="content-logo">
      <a href="index.html" onclick="gettext(index.html);return false;"><img src="./static/image/logo.png" alt="logo"></a>
    </div>
    <nav class="content-nav">
      <ul> 
        <li><a href="aboutUs.html">About Us</a></li>
        <li>Products <span class="sub-arrow"></span>
          <div class="Products-info">
            <span><a href="wooden-displays.html" onclick="gettext(wooden-displays.html);return false;"> Wooden Displays</a> </span>
            <span><a> Wooden Boxes</a></span>
            <span><a href="#">Wooden Signs</a> </span>
            <span><a href="#">Wooden Frames</a> </span>
            <span><a href="#">Wooden Holder</a> </span>
            <span><a href="#">Wooden Stand</a></span>
          </div>
        </li>
        <li>Wooden Fabrication <span class="sub-arrow"></span>
          <div class="hover-info">
            <span><a href="woodensheet.html"> Wooden Sheet</a> </span>
            <span><a href="woodenmirrorsheet.html"> Wooden Mirror Sheet</a></span>
            <span><a href="castwoodensheet.html">Cast Wooden Sheet</a> </span>
            <span><a href="extrudedwoodensheet.html">Extruded Wooden Sheet</a> </span>
            <span><a href="woodenrod.html">Wooden Rod</a> </span>
            <span><a href="woodentube.html">Wooden Tube</a></span>
          </div>
        </li>
        <li>Capabilities <span class="sub-arrow"></span>
          <div class="Capabilities-info">
            <span><a href="#"> Laser Cut Wooden</a> </span>
            <span><a href="#"> Screen Printing on Wooden</a></span>
            <span><a href="#">Polishing Wooden</a> </span>
          </div>
        </li>
        <li><a href="./contact-us.html">Contact Us</a></li>
      </ul>

    </nav>
  </div>
</section>
  `;
  return commonDiv;
}
function gettext(url) {
  window.location.href = url;
}

// 导出函数，以便其他文件可以引用它
export { createHeaderElement };
