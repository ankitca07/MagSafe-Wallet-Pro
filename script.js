document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom"
    });
  
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate detail items on scroll
    const detailItems = gsap.utils.toArray(".detail-item");
    detailItems.forEach((item) => {
      const image = item.querySelector(".detail-image");
      const text = item.querySelector(".detail-text");
      const isReversed = item.classList.contains("reverse");
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          toggleActions: "play reverse play reverse"
        }
      });
  
      if (isReversed) {
        tl.from(image, {
          xPercent: -50,
          opacity: 0,
          ease: "power1.out",
          duration: 1
        }).from(text, {
          xPercent: 50,
          opacity: 0,
          ease: "power1.out",
          duration: 1
        }, "<0.2");
      } else {
        tl.from(image, {
          xPercent: 50,
          opacity: 0,
          ease: "power1.out",
          duration: 1
        }).from(text, {
          xPercent: -50,
          opacity: 0,
          ease: "power1.out",
          duration: 1
        }, "<0.2");
      }
    });
  
    // Scroll-triggered animation for CTA section
    gsap.from("#cta", {
      scrollTrigger: {
        trigger: "#cta",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  
    // 3D Mouse Move Effect on Hero Section
    const hero = document.querySelector("#hero");
    const heroContent = document.querySelector(".hero-content");
  
    hero.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height } = hero.getBoundingClientRect();
      const xPercent = (clientX - width / 2) / width * 100;
      const yPercent = (clientY - height / 2) / height * 100;
  
      gsap.to(hero, {
        rotationY: xPercent * 0.05,
        rotationX: -yPercent * 0.05,
        transformPerspective: 1000,
        transformOrigin: "center",
        ease: "power1.out",
        duration: 0.5
      });
  
      gsap.to(heroContent, {
        x: xPercent * 0.2,
        y: yPercent * 0.2,
        ease: "power1.out",
        duration: 0.5
      });
    });
  
    // Scroll-based zoom effect on Hero
    gsap.fromTo(
      "#hero",
      { scale: 1 },
      {
        scale: 1.05,
        scrollTrigger: {
          trigger: "#hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  
    // Scroll-based background parallax on Hero
    gsap.fromTo(
      "#hero",
      { backgroundPosition: "center center" },
      {
        backgroundPosition: "center 25%",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  
    // Sticky header hide on scroll down, show on scroll up
    let lastScrollTop = 0;
    const header = document.querySelector(".sticky-header");
    const headerHeight = header.offsetHeight;
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop && scrollTop > headerHeight * 2) {
        header.style.top = `-${headerHeight}px`;
      } else {
        header.style.top = "0";
      }
  
      lastScrollTop = Math.max(scrollTop, 0);
    });
  });
  