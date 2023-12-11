// if (confirm('是否允许自动播放背景音乐')) {
//   selector('#start-bgm1').play();
// }

function selector(str) {
  return document.querySelector(str);
}

// init
selector('div#lay-start>img').style.opacity = '1';
setTimeout(() => {
  selector('div#lay-start').style.opacity = '0';
  setTimeout(() => {
    selector('div#lay-start').style.display = 'none';
    selector('div#phone').append(selector('#popup-tmp').content.cloneNode(true));

    // click event
    addButtonClickEffect();
    selector('.confirm').addEventListener('click', () => {
      selector('#start-bgm1').play();
      setTimeout(() => selector('.popup-lay').remove(), 100);
    });
    selector('.close-icon').addEventListener('click', () => selector('.popup-lay').remove());
  }, 1000);
}, 2000);

function addButtonClickEffect() {
  document.querySelectorAll('.ba-button').forEach(ele => {
    ele.addEventListener('click', function () {
      let className = 'button-click-effect';
      if (this.classList.contains('confirm')) className = 'button-click-effect-skew';
      this.classList.add(className);
      setTimeout(() => {
        this.classList.remove(className);
      }, 100);
    });
  });
}