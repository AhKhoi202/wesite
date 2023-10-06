window.onload = () => {
  html = "";
  KH.forEach((kh, key) => {
    innerDivHTML = "";
    kh.options.forEach((option) => {
      innerDivHTML += `
        <div class="row">
          <div class="feature ">
            <img class="img-mobile img-circle" 
            src="${option.image}">
            <div>
              <h4 ng-bind="item.title" class="ng-binding">${option.text}</h4>
              <input 
            type="${kh.type}" 
            name="list_checkbox_${key}"
            input-select="select"
            style="display: none"
            class="hidden"
          />
              <p >${option.tooltipText}</p>
            </div>
          </div>
          
        </div>
        `;
    });
    html += `
      <section class="well">
        <div class="heading">
          <h3>
            <span class="ng-binding">${kh.title}</span>
          </h3>
        </div>
        ${innerDivHTML}
      </section>
    `;
  });
  document.getElementById("android").innerHTML = html;
  document.getElementById("ios").innerHTML = html;
  document.getElementById("web").innerHTML = html;
  const featureDivs = document.querySelectorAll("div.feature");

  // Lặp qua từng thẻ <div> và thêm sự kiện click
  // featureDivs.forEach((div) => {
  //   div.addEventListener("click", (event) => {
  //     const color = "rgb(123, 232, 145)";
  //     const input = div.querySelector(
  //       'input[type="checkbox"], input[type="radio"]'
  //     );

  //     if (input) {
  //       // Đảo ngược trạng thái checked của input cho cả checkbox và radio
  //       input.checked = !input.checked;
  //       console.log(input.checked);
  //     }
  //     if (div.style.backgroundColor != color) {
  //       div.style.backgroundColor = color;
  //     } else div.style.backgroundColor = "";
  //     console.log(div.style.backgroundColor);
  //   });
  // });

  document
    .querySelectorAll('input[type="checkbox"], input[type="radio"]')
    .forEach((input) => {
      input.addEventListener("change", () => {
        const isChecked = input.checked;
        // Lấy giá trị của input
        const value = input.value;
        // In ra giá trị và trạng thái (checked/unchecked) của input
        console.log(`Giá trị: ${value}, Trạng thái: ${isChecked}`);
      });
    });
};
