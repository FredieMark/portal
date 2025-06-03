import React from "react";
import FlareLogo from './assets/flare_logo.svg'
import Fassets from './assets/fassets.webp'
import Fassets2 from './assets/FAssets-2.svg'
import XRP from './assets/XRP.svg'
import FSTO from './assets/FTSO_How_It_Works_Desktop.svg'
import DevHub from './assets/dev_hub_ani_noblur0001.webp'
import Fassets1 from './assets/FAssets v1.webp'
import DandStake from './assets/dandstake.webp'
import Spardesk from './assets/sparkdex-1.svg'

const Header = () => (
  <header className="large">
    <img src={FlareLogo} width="100px" alt="Flare Logo" />
    <nav>
      <li>Account</li>
      <li>Staking</li>
      <li>USDT0</li>
      <li>Voting</li>
      <li>Management</li>
    </nav>
    <div>
      <button>Connect Wallet</button>
    </div>
  </header>
);

const Main = () => (
  <main>
    <section className="main-div">
      <img className="main-div-img" src={Fassets} width="594" height="594" alt="FAssets" />
      <div className="main-p-div">
        <p className="main-p-div-p">
          <img src={Fassets2} width="300" alt="FAssets" />
          <img src={XRP} width="300" alt="XRP" />
        </p>
        <span>
          FAssets v1.1 Launches on Songbird <br /> – Unlocking Scalable FXRP Minting
        </span>
        <div>
          <button>Start</button>
          <button>Claim</button>
          <button>Buy</button>
        </div>
      </div>
    </section>

    <section className="main-div-2">
      <h2>What is FSTO?</h2>
      <h2>
        Flare Time Series Oracle (FTSO) is an enshrined oracle that <br /> provides decentralized data feeds to Flare.
      </h2>
      <h2>How it Works</h2>
      <img src={FSTO} alt="How FTSO Works" />
    </section>

    <section className="main-div-3">
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <p style={{ fontSize: "40px" }}>Integrate FDC</p>
        <span>
          FAssets v1.1 Launches on Songbird <br /> – Unlocking Scalable FXRP Minting
        </span>
        <div>
          <button>Start</button>
          <button>Claim</button>
          <button>Buy</button>
        </div>
      </div>
      <img
        src={DevHub}
        width="351"
        height="164"
        alt="Developer Hub"
      />
    </section>

    <section className="main-div-4">
      <h2>Use Cases</h2>
      <h2>FDC powers a variety of DeFi use cases</h2>
      <img src={Fassets1} width="1187px" alt="FAssets Use Cases" />
    </section>

    <section className="main-div-5">
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontSize: "30px" }}>Delegate & Stake</p>
          <div className="main-div-5-p">
            <p>
              Boost your<br />
              rewards by<br /> delegating or<br />staking FLR.
            </p>
          </div>
        </div>
        <div
          style={{ height: "572px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img src={DandStake} width="81.5" height="83" alt="Delegate and Stake" />
        </div>
      </div>
    </section>

    <section className="main-div-6">
      <div className="main-div-6-div">
        {[Fassets2, XRP, Spardesk].map((icon, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <p className="main-div-6-p">
              <img src={icon} height="51.7" width="200" alt={icon} />
              <img src={Fassets} height="250" alt="FAssets" />
            </p>
            <h3>
              {idx === 0
                ? "Guide to claiming the FAssets "
                : idx === 1
                ? "FAssets v1.1 Launches on Songbird  "
                : "New DeFi milestones for Flare protocols"}
            </h3>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer className="mantine-Footer-root mantine-2k5q65">
  <div className="mantine-Container-root mantine-17sxbm9" bis_skin_checked="1">
      <div className="footer-div" bis_skin_checked="1">
          <div style={{
            display: 'flex',
            gap : 20,
          }} bis_skin_checked="1">
              <div className="mantine-Text-root mantine-13nr4qr" bis_skin_checked="1">© 2025 Flare Network</div><a
                  className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://flare.xyz/privacy-policy/" aria-label="Read more about Flare Privacy Policy">
                  <div className="mantine-Text-root mantine-13nr4qr" bis_skin_checked="1">Terms &amp; Privacy</div>
              </a>
          </div>
          <div style={{
            display: 'flex',
            gap: 20,
          }} bis_skin_checked="1"><a
                  className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://twitter.com/FlareNetworks" aria-label="Flare on Twitter"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://discord.com/invite/flarenetwork" aria-label="Flare on Discord"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://t.me/FlareNetwork" aria-label="Flare on Telegram"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://www.reddit.com/r/FlareNetworks/" aria-label="Flare on Redit"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://www.youtube.com/channel/UCDyqyTWHYMWY5ie6xOCgG0w"
                  aria-label="Flare on Youtube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      fill="#868e96" width="25" height="25">
                      <path
                          d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://medium.com/flarenetwork" aria-label="Flare on Medium"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z">
                      </path>
                  </svg></a><a className="mantine-UnstyledButton-root mantine-97bdev" target="_blank"
                  href="https://www.instagram.com/flare_networks/" aria-label="Flare on Instagram"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#868e96" width="25"
                      height="25">
                      <path
                          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z">
                      </path>
                  </svg></a></div>
      </div>
  </div>
</footer>
);

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;