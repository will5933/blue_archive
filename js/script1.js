function selector(str) {
  return document.querySelector(str);
}

function delay(sec, fn) {
  setTimeout(fn, sec);
}

let bgmPlayer = selector('#start-bgm1');
let lay0 = selector('#lay0');
let lay1 = selector('#lay1');
let layLoading = selector('#lay-loading');
// init
selector('div#lay-start>img').style.opacity = '1';
delay(2000, () => {
  selector('div#lay-start').style.opacity = '0';
  delay(1000, () => {
    selector('div#lay-start').style.display = 'none';
    selector('div#phone').append(selector('#popup-tmp').content.cloneNode(true));

    // click event
    addButtonClickEffect();
    selector('.confirm').addEventListener('click', () => {
      bgmPlayer.play();
      setTimeout(() => selector('.popup-lay').remove(), 100);
    });
    selector('.close-icon').addEventListener('click', () => selector('.popup-lay').remove());
  });
});

// enter game
lay1.addEventListener('click', () => {
  bgmPlayer.volume = 0.3;
  lay0.style.opacity = '0';
  lay1.style.opacity = '0';
  layLoading.style.display = 'unset';
  
  delay(300, () => {
    lay0.remove();
    lay1.remove();
    // break
    delay(3000, () => confirm('To be continued, maybe?'));
  });
});

function addButtonClickEffect() {
  document.querySelectorAll('.ba-button').forEach(ele => {
    ele.addEventListener('click', function () {
      let className = 'button-click-effect';
      if (this.classList.contains('confirm')) className = 'button-click-effect-skew';
      this.classList.add(className);
      delay(100, () => {
        this.classList.remove(className);
      });
    });
  });
}