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
              name="checkbox_${key}"
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

  featureDivs.forEach((div) => {
    div.addEventListener("click", (event) => {
      const color = "rgb(123, 232, 145)";
      const input = div.querySelector(
        'input[type="checkbox"], input[type="radio"]'
      );

      input.checked = !input.checked;

      // console.log(`Giá trị: ${input.value}, Trạng thái: ${input.checked}`);
      if (input.checked == true) {
        div.style.backgroundColor = color;
      } else div.style.backgroundColor = "";
      console.log(div.style.backgroundColor);
    });
  });
};
