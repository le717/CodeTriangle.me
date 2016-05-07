<?php require '_includes/dates.php'; ?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="apple-touch-icon-precomposed" sizes="192x192" href="apple-touch-icon-precomposed.png">
  <link rel="shortcut icon" sizes="192x192" href="favicon.png">
  <?php /* file_get_contents('_includes/social-tags.html'); */ ?>
  <!--[if IE]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
  <![endif]-->
  <title>Caleb Ely | Web Developer</title>

  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,400i,700|Roboto+Slab:400">
  <link rel="stylesheet" href="fonts/foundation-icons/foundation-icons.css">
  <link rel="stylesheet" href="build/css/codetriangle.min.css">
</head>

<body>
  <span id="home"></span>
  <main>
    <header class="header">
      <?= file_get_contents('img/logo.svg'); ?>
      <h1 id="name">Caleb Ely</h1>
      <h2 id="title">Web Developer</h2>
    </header>

    <nav class="navi">
      <ul>
        <li>
          <a data-scroll title="Home" href="#home">
            <span class="text">Home</span><span class="icon fi-home"></span>
          </a>
        </li>

        <li>
          <a href="https://medium.com/@cely717">
            <span class="text">Blog</span><span class="icon fi-book-bookmark"></span>
          </a>
        </li>

       <li>
          <a data-scroll href="#about">
            <span class="text">About</span><span class="icon fi-torso"></span>
          </a>
        </li>

        <li>
          <a data-scroll href="#contact">
            <span class="text">Contact</span><span class="icon fi-mail"></span>
          </a>
        </li>
      </ul>
    </nav>

    <section class="page-section alt" id="summary">
      <div class="text-content">
        <p class="text-center">A Web developer with over <span class="emphasis"><?= $ctme_yrsCoding; ?> years</span> experience in <span class="emphasis">Python, JavaScript, PHP</span>, and HTML/CSS/SCSS.</p>
      </div>
    </section>

    <section class="page-section" id="portfolio">
      <div class="text-content">
        <h2>My Portfolio</h2>
        <p class="dropcap">If you are looking for someone who can write extraordinary code, I am the developer for you! Check out my portfolio and <a href="https://github.com/le717">published code</a> to see all I have done, download my resum&eacute;, and <a href="#contact">contact me</a> today!</p>
        <div class="btn-cta center"><a href="portfolio/caleb-ely-resume.pdf">Resum&eacute;!</a></div>

        <div id="projects-container">
          <aside class="project-box" id="cardoozycom">
            <h3 class="title">CarDoozy.com</h3>
            <p class="date">May 2016</p>
            <div class="desc">
              <p>Designed, implemented, and launched <a target="_blank" href="https://cardoozy.com/">CarDoozy.com</a>, the promotional site for an online store geared towards saving automotive dealer associations time and money on dealer product, promotional, and printed needs. Pre-existing logo and stock photo used to create design scheme.</p>
            </div>
          </aside>

          <aside class="project-box" id="codetri">
            <h3 class="title">CodeTriangle.me</h3>
            <p class="date">February 2016</p>
            <div class="desc">
              <p>My personal site, which you are currently browsing. Registered in July 2015, the current design iteration (and yes, it is <a target="_blank" href="https://github.com/le717/CodeTriangle.me">open-source</a>) was published on February 29, 2016.</p>
            </div>
          </aside>

          <aside class="project-box" id="emscog">
            <h3 class="title">East Main Street Church of God</h3>
            <p class="date">December 2015</p>
            <div class="desc">
              <p>I designed, developed, and documented a WordPress-powered website from the ground-up for the <a href="http://codetriangle.me/portfolio/emscog/">East Main Street Church of God</a> as my college capstone. Mock-ups were created in Photoshop, design implemented using SCSS, and custom functionality developed with JavaScript and PHP.</p>
            </div>
          </aside>

          <aside class="project-box" id="notepad">
            <h3 class="title">Notepad.exe</h3>
            <p class="date">October 2015</p>
            <div class="desc">
              <p>As an afternoon project, I recreated <a target="_blank" href="https://en.wikipedia.org/wiki/Notepad_%28software%29">Windows Notepad</a> in JavaScript, implementing file creation, saving, and printing, as well as the notorous (disabled by default!) word-wrapping. Both a <a href="http://notepad.codetriangle.me">live demo</a> and <a target="_blank" href="https://github.com/le717/notepad.exe">source code</a> are available.</p>
            </div>
          </aside>

          <aside class="project-box" id="modwlds">
            <h3 class="title">Model Worlds</h3>
            <p class="date">July 2015</p>
            <div class="desc">
              <p>I recreated the Steam Workshop-inspired <a target="_blank" href="http://web.archive.org/web/20160121032229/http://www.modelworlds.net/">Model Worlds</a> fan site for the <a target="_blank" href="http://store.steampowered.com/app/332310">LEGO&reg; Worlds</a> video game by <a target="_blank" href="http://www.ttgames.com/">TT Games</a>. In one week I recreated a modified, responsive design of the site and wrote a basic, but usable, user account system in PHP. Due to unforseen circumstances and side-project status, the site was never completed and eventually <a target="_blank" href="https://github.com/le717/Model-Worlds">open-sourced</a>.</p>
            </div>
          </aside>

          <aside class="project-box" id="htmlskel">
            <h3 class="title">HTML Skeleton</h3>
            <p class="date">January 2014</p>
            <div class="desc">
              <p>Initially developed to eliminate redundant HTML typing in class, it was later expanded to insert commonly used HTML snippets. Since <a target="_blank" href="https://github.com/le717/brackets-html-skeleton">open-sourcing</a> and uploading to the extension registry, this small, occasionally updated <a target="_blank" href="http://brackets.io">Brackets</a> extension has been downloaded over 85,000 times with 9,600 active installations.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>


    <section class="page-section alt" id="about">
      <div class="text-content">
        <h2>Who am I?</h2>
        <p class="dropcap">I am <span class="emphasis">Caleb Ely</span>, a <?= $ctme_myAge; ?> year old programmer, Web developer, occasional video game player, and all-around technology fan harkening from Georgia, USA. I have a small blog where I predominantly write about Website design, development, and general technology. A strong supporter of open source software, I believe some of the best software currently available is open source. That is why I both actively use and contribute to open source projects as well as open sourcing the majority of my own work.</p>

        <p>I am very detail-oriented and technical-minded, constantly seeking out good and efficient coding techniques. Because of my programming knowledge, capabilities and eagerness to learn and expand my skills, I have been called a programming reference guide!</p>

        <p>I began programming in January 2013 by teaching myself Python, and in September I enrolled at <a target="_blank" href="http://southeasterntech.edu/">Southeastern Technical College</a> to obtain my Associates of Applied Science in Website Development, graduating with honors in December 2015.</p>

        <blockquote>To me, programming is not about trying to write something that will be picked up by some big corporation and bought for lots of money. Instead, it is about doing my job in the most excellent way possible and making the product work so well that users never have to think about how or why it works, it just works.</blockquote>
      </div>
    </section>

    <section class="page-section social" id="contact">
      <div class="text-content">
        <h2>Yes, I have social media.</h2>
        <p class="dropcap">If you have any questions, comments, or simply want to say hi, you can drop me a line through any of the following sites! I need many more words here to add at least two or three more sentences. Having only one sentence for this large section is not at all good. Without them it feels rather... lacking and empty.</p>

        <div class="social-icons">
          <a data-scroll href="#email">
            <div class="icon fi-mail"></div>
            <span class="text">Email</span>
          </a>

          <a target="_blank" href="https://twitter.com/_le717">
            <div class="icon fi-social-twitter"></div>
            <span class="text">Twitter</span>
          </a>

          <a target="_blank" href="https://www.facebook.com/cely717">
            <div class="icon fi-social-facebook"></div>
            <span class="text">Facebook</span>
          </a>

          <a target="_blank" href="https://github.com/le717">
            <div class="icon fi-social-github"></div>
            <span class="text">GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <section class="page-section email alt" id="email">
      <div class="text-content">
        <h2>This is an email form.</h2>
        <p class="dropcap">You can use it to email me with questions, concerns, bug reports (although you really should use GitHub for that), job opportunites, or other stuff. However, please tweet me if you would like to have a casual conversation. Email conversations are not in my time schedule.</p>

        <form id="form-email" name="form-email">
          <div class="group">
            <label class="input-before" for="input-name">Name <span class="required">*</span></label>
            <input type="text" name="name" id="input-name" tabindex="1">
            <span class="input-after error name">Everybody has a name, even you.</span>
          </div>

          <div class="group">
            <label class="input-before" for="input-email">Email <span class="required">*</span></label>
            <input type="email" name="email" id="input-email" tabindex="2" required>
            <span class="input-after error email">That does not look like an email address.</span>
          </div>

          <div class="group">
            <label class="input-before textarea" for="input-message">Message <span class="required">*</span></label>
            <textarea name="message" id="input-message" tabindex="3" required></textarea>
            <div class="input-after error message">You have to enter a message to send an email.</div>
          </div>

          <span id="not-person">
            <input id="bot" name="bot" type="checkbox">
            <!--<input id="bot" type="radio">-->
            <label for="bot"></label>
            <span>Do not check this box if you are a human.</span>
          </span>

          <div class="group block btns">
            <input class="btn submit" type="submit" name="submit" value="Send" tabindex="4">
            <div class="input-after success submit">Message successfully sent!</div>
          </div>
        </form>
      </div>
    </section>

    <footer class="footer">
      <p><?= $ctme_now->format('Y'); ?> Caleb Ely</p>
    </footer>
  </main>

  <script async src="build/js/codetriangle.min.js"></script>
</body>
</html>
