document.querySelector('#darkmode').addEventListener('click', function() {
      const modeSwitch = document.querySelector('#darkmode');
      document.getElementsByTagName('body')[0].classList.toggle('dark');
      if (modeSwitch.textContent === "🌞") {
            modeSwitch.textContent = "🌝";
            modeSwitch.style.backgroundColor = 'black';
      } else {
            modeSwitch.textContent = "🌞";
            modeSwitch.style.backgroundColor = 'brown';
      }
});