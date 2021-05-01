// imports

let uifunc = (function () {

  // main class
  class Ui {

    constructor() {
      this.message_area = document.querySelector('#message');
      this.card_area = document.querySelector('#card-main');
    }

    showItems(news) {
      // loop into items array to set items
      news.forEach(item => {
        this.card_area.innerHTML += `
        <div class="col-md-4">
          <div class="card card-news mt-3">
            <div class="card-header text-primary">${item.title}</div>
            <div class="card-body">
              <div class="card-text">${item.description}</div>
              <span class="badge bg-danger badge-pill mt-3">${item.publishedAt}</span>
            </div>
            <div class="card-footer">
            <blockquote class="blockquote mb-0 mt-2 py-2">
              <footer class="blockquote-footer">${item.author}</footer>
            </blockquote>
            </div>
          </div>
          </div>
        `
      });

    }
    
    showMessage(text , color) {
      // create alert div
      const div = document.createElement('div');
      div.textContent = text;
      div.classList = `alert alert-${color} mt-4 mb-0 message-box`;

      // include alert into tag
      if(!document.querySelector('.message-box')) {
        this.message_area.appendChild(div);
      }

      // timeout to remove alert
      setTimeout(() => {
        if(document.querySelector('.message-box')) {
          this.removeMessage();
        }
      }, 2500);
    }

    removeMessage() {
      const alert = document.querySelector('.message-box');

      if(alert) {
        document.querySelector('.message-box').remove();
      }
    }

  }

  // class instance 
  const ui = new Ui();

  // return methods
  return {
    showMessage: function (text , color) {
      ui.showMessage(text , color);
    },
    showItems: function (news) {
      ui.showItems(news);
    }
  }

})()

// export function
export default uifunc;