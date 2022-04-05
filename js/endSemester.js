  /*=========== toggle switcher ==========*/
  const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
  styleSwitcherToggler.addEventListener("click", () => {
          document.querySelector(".style-switcher").classList.toggle("open")
      })
      /*===== hide style -switcher on scroll =======*/
  document.querySelector('._111').addEventListener('scroll', () => {
      if (document.querySelector(".style-switcher").classList.contains("open")) {
          document.querySelector(".style-switcher").classList.remove("open");

      }
  })

  /*======== theme day and night moed ====*/

  const dayNight = document.querySelector(".day-night");
  dayNight.addEventListener("click", () => {
      dayNight.querySelector("i").classList.toggle("fa-sun");
      dayNight.querySelector("i").classList.toggle("fa-moon");
      document.body.classList.toggle("dark")
  })
  window.addEventListener("load", () => {
          if (document.body.classList.contains("dark")) {
              dayNight.querySelector("i").classList.add("fa-sun");
          } else {
              dayNight.querySelector("i").classList.add("fa-moon")
          }
      })
      /* ---- Bg animation Effect ---- */
  function toggleForm() {
      var container = document.querySelector("section .container");
      container.classList.toggle("active");
      //   alert('')
  }

  function bgAnimationItems() {
      const rows = 7,
          cols = 10;
      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              const div = document.createElement("div");
              div.className = `col-${j + 1}`;
              document.querySelector(".bg-animation-effect").appendChild(div);
          }
      }
  }
  bgAnimationItems();

  /* -------------------- Hide All Section  except active -------------- */

  (() => {


  })

  $(function() {
      $(".leftSide ul li ").click(function() {

          $(".leftSide ul li ").removeClass("active");
          let currentItem = $(this);
          currentItem.addClass("active");
      });

      $("._1235_arrow").on("click", (e) => {
          e.preventDefault();
          $(".leftSide").toggleClass("active");
          $("._111").toggleClass("add");
      });
      $('.leftSide ul li a').on('click', () => {
          // $(".leftSide").removeClass("active");
          $(".leftSide").removeClass("active2");

      })

      $(".toggle").on("click", (e) => {
          e.preventDefault();
          $(".leftSide").toggleClass("active2");
          $("._111").removeClass("add");
          document.querySelector(".style-switcher").classList.remove("open");
      });
      $(window).on("load", function() {
          setTimeout(function() {
              $(".preloader").fadeOut("fast");
          }, 2200);
      });
      $("ul li a").on("click", function(e) {
          e.preventDefault();
          let activeLinkId = $(this).attr("href");
          $("._111").removeClass("active");
          $("._111" + activeLinkId).addClass("active");
      });
      $(".blog-text .btn").on("click", function(e) {
          e.stopPropagation();

          $(this).find(".blog-text .inner-text").addClass("active");
          $(".btn").not(this).find(".inner-text").removeClass("active");
      });


  });
  /*======= theme ============ colors ========= */
  const Links = document.querySelectorAll(".alternate-style");
  totalLinks = Links.length;


  function setActiveStyle(color) {
      for (i = 0; i < totalLinks; i++) {
          if (color === Links[i].getAttribute("title")) {
              //   document.querySelector('body').style.background = Links[i];
              Links[i].removeAttribute("disabled");
          } else {
              Links[i].setAttribute("disabled", 'true');
          }
      }
  }

  if (window.innerWidth < 500) {


  }