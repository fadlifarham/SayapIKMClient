<template>
  <div>

<!--    <div id="preloader">-->
<!--      <div id="status"></div>-->
<!--    </div>-->

    <section class="hero is-fullheight is-default is-bold">

      <nav class="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="?ref=logo">
              <h1 class="title">SAYAP IKM</h1>
            </a>

            <a class="navbar-item is-hidden-desktop is-hidden-tablet">
              <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                <svg width="1000px" height="1000px">
                  <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                  <path class="path2" d="M 300 500 L 700 500"></path>
                  <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                </svg>
                <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
              </div>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbar-menu" class="navbar-menu is-static">

            <div class="navbar-start">
              <a class="navbar-item is-hidden-mobile">
                <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                  <svg width="1000px" height="1000px">
                    <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                    <path class="path2" d="M 300 500 L 700 500"></path>
                    <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                  </svg>
                  <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
                </div>
              </a>
            </div>

            <div class="navbar-end">
<!--              <a href="#" class="navbar-item is-secondary">-->
<!--                Features-->
<!--              </a>-->
<!--              <a href="#" class="navbar-item is-secondary">-->
<!--                Pricing-->
<!--              </a>-->
              <a class="navbar-item" href="/login">
                <span class="button signup-button rounded raised is-info">
<!--                <span class="button signup-button rounded secondary-btn raised is-info">-->
                  Masuk
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav id="navbar-clone" class="navbar is-fresh is-transparent" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="?ref=logo">
              <h1 class="title">SAYAP IKM</h1>
            </a>

            <a class="navbar-item is-hidden-desktop is-hidden-tablet">
              <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                <svg width="1000px" height="1000px">
                  <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                  <path class="path2" d="M 300 500 L 700 500"></path>
                  <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                </svg>
                <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
              </div>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="cloned-navbar-menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="cloned-navbar-menu" class="navbar-menu is-fixed">

            <div class="navbar-start">
              <a class="navbar-item is-hidden-mobile">
                <div id="cloned-menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
                  <svg width="1000px" height="1000px">
                    <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                    <path class="path2" d="M 300 500 L 700 500"></path>
                    <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                  </svg>
                  <button id="cloned-menu-icon-trigger" class="menu-icon-trigger"></button>
                </div>
              </a>
            </div>

            <div class="navbar-end">
              <a href="/login" class="navbar-item">
                <span class="button signup-button rounded is-link raised">
                  Lihat Aja Dulu
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1 landing-caption">
              <h1 class="title is-1 is-bold is-spaced">
                Investasi & Cari Pendanaan Yuk.
              </h1>
              <h2 class="subtitle is-5 is-muted">
                Platform berinvestasi dan Pencarian Pendanaan Bersama
              </h2>
              <p>
                <a href="/login" class="button cta rounded primary-btn raised">
                  Mulai Aja Yuk
                </a>
              </p>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image is-4by3">
                <img src="https://cssninjastudio.github.io/assets/images/illustrations/worker.svg" alt="Description">
              </figure>
            </div>

          </div>
        </div>
      </div>

      <div class="hero-foot mb-20">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a><img class="partner-logo" src="https://cssninjastudio.github.io/assets/images/logos/clients/systek.svg"></a></li>
              <li><a><img class="partner-logo" src="https://cssninjastudio.github.io/assets/images/logos/clients/tribe.svg"></a></li>
              <li><a><img class="partner-logo" src="https://cssninjastudio.github.io/assets/images/logos/clients/kromo.svg"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ~ dibuat oleh <strong>Sayap IKM</strong> Dengan setulus hari ~
          <br>
        </p>
        <p>
          Sayap IKM <span class="icon has-text-danger"> <i class="fas fa-heart"></i></span>  IKM</p>
      </div>
    </footer>

    <script src="https://cssninjastudio.github.io/assets/js/app.js"></script>

    <!-- JS -->
    <!--script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <!--script src="assets/js/jquery-panelslider/jquery.panelslider.min.js"></script-->
    <script src="https://cssninjastudio.github.io/assets/js/fresh.js"></script>


    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<!--    <div class="container">-->

<!--      <nav class="navbar">-->

<!--        <div class="navbar-brand">-->
<!--          <a class="navbar-item" href="http://bulma.io">-->
<!--            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"-->
<!--                 width="112" height="28">-->
<!--          </a>-->
<!--          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">-->
<!--      <span class="icon" style="color: #55acee;">-->
<!--        <i class="fa fa-twitter"></i>-->
<!--      </span>-->
<!--          </a>-->

<!--          <div class="navbar-burger burger" data-target="navMenubd-example">-->
<!--            <span></span>-->
<!--            <span></span>-->
<!--            <span></span>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div id="navMenubd-example" class="navbar-menu">-->
<!--          <div class="navbar-start">-->
<!--            <a class="navbar-item " href="">-->
<!--              <span class="bd-emoji">🎨</span> &nbsp;Expo-->
<!--            </a>-->
<!--            <a class="navbar-item " href="">-->
<!--              <span class="bd-emoji">❤️</span> &nbsp;Love-->
<!--            </a>-->
<!--          </div>-->

<!--          <div class="navbar-end">-->
<!--            <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">-->
<!--        <span class="icon" style="color: #333;">-->
<!--          <i class="fa fa-github"></i>-->
<!--        </span>-->
<!--            </a>-->
<!--            <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">-->
<!--        <span class="icon" style="color: #55acee;">-->
<!--          <i class="fa fa-twitter"></i>-->
<!--        </span>-->
<!--            </a>-->
<!--            <div class="navbar-item">-->
<!--              <div class="field is-grouped">-->
<!--                <p class="control">-->
<!--                  <a class="button is-info" href="/login">-->
<!--              <span class="icon">-->
<!--                <i class="fa fa-user"></i>-->
<!--              </span>-->
<!--                    <span>Masuk</span>-->
<!--                  </a>-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </nav>-->
<!--    </div>-->
<!--    <section class="hero is-link bold is-fullheight">-->
<!--      <div class="hero-body">-->
<!--        <div class="container">-->
<!--          <h1 class="title">-->
<!--            Bulma.io with Full Width Menu (Mega Menu)-->
<!--          </h1>-->
<!--          <h2 class="subtitle">-->
<!--            Hover over Blog-->
<!--          </h2>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <footer class="footer">-->
<!--      <div class="content has-text-centered">-->
<!--        <p>-->
<!--          ~ dibuat oleh <strong>Sayap IKM</strong> Dengan setulus hari ~-->
<!--          <br>-->
<!--        </p>-->
<!--        <p>-->
<!--          Sayap IKM <span class="icon has-text-danger"> <i class="fas fa-heart"></i></span>  IKM</p>-->
<!--      </div>-->
<!--    </footer>-->
  </div>
</template>

<script>
  export default {
    auth: false,
    mounted() {

      // this.$router.push('/dashboard')
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css");
  @import url("https://cssninjastudio.github.io/assets/css/core.css");
  @import url("https://cssninjastudio.github.io./assets/css/icons.css");
</style>
