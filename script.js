document.addEventListener('DOMContentLoaded', () => {
    const donateBtn = document.getElementById('donateBtn');
  
    donateBtn.addEventListener('click', () => {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="donation-overlay">
          <div class="donation-popup">
            <button class="close-btn">&times;</button>
  
            <div class="plan intro">
              <h2>50<small>/Donation</small></h2>
              <h3>Intro</h3>
              <p>Starter Plan.</p>
              <p>Special Discord rank</p>
              <div class="spacer"></div>
              <a href="https://www.roblox.com/game-pass/1194771578/50" target="_blank" class="choose-btn">Choose Plan</a>
            </div>
  
            <div class="plan base">
              <h2>100<small>/Donation</small></h2>
              <h3>Base</h3>
              <p>Base plan. Nothing Special</p>
              <p>Special Discord rank</p>
              <p>5% More ui assets</p>
              <div class="spacer"></div>
              <a href="https://www.roblox.com/game-pass/1219809621/100" target="_blank" class="choose-btn">Choose Plan</a>
            </div>
  
            <div class="plan pro">
              <h2>500<small>/Donation</small></h2>
              <h3>Pro</h3>
              <p>For those who want the meat with extra sauce</p>
              <p>Early Game Testing</p>
              <p>Early updates</p>
              <p>20% More ui assets</p>
              <p>Special Discord Rank</p>
              <div class="spacer"></div>
              <a href="https://www.roblox.com/game-pass/1218285197/500" target="_blank" class="choose-btn">Choose Plan</a>
            </div>
  
            <div class="plan enterprise">
              <h2>1k+<small>/Donation</small></h2>
              <h3>Enterprise</h3>
              <p>OMG. Your a god!!</p>
              <p>Early Game testing</p>
              <p>In game tags</p>
              <p>50% More ui assets</p>
              <p>Early updates</p>
              <p>Special Discord Rank</p>
              <div class="spacer"></div>
              <a href="https://www.roblox.com/game-pass/1195027538/1000" target="_blank" class="choose-btn">Choose Plan</a>
            </div>
  
          </div>
        </div>
      `);
  
      // Close popup
      document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.donation-overlay').remove();
      });
    });
  });


  