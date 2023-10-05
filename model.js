window.onload = () => {
    console.log(KH);
    html = '';
    KH.forEach(kh => {
      innerDivHTML = '';
      kh.options.forEach(option => {
        innerDivHTML += `
        <div class="row">
          <div class="feature ">
            <img class="img-mobile img-circle" 
            src="${option.image}">
            <label for="">
              <h4 ng-bind="item.title" class="ng-binding">${option.text}</h4>
              <p class="description">${option.tooltipText}</p>
            </label>
          </div>
          <input id="" type="checkbox" name="list_checkbox_11" style="display: none"  class="hidden ng-untouched ng-valid ng-dirty ng-valid-parse">
        </div>
        `
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
    document.getElementById('android').innerHTML = html;
    document.getElementById('ios').innerHTML = html;
    document.getElementById('web').innerHTML = html;
  }
  