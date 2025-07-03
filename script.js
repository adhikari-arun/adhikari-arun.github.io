        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents"); 

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            } 
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbydJcjJhpOhj_y8YUX_YDRf6C7W2IIfWGCEz7CWzMlHRRXe9XyJbbVqsDQR4t2xDmZJ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

        document.addEventListener('DOMContentLoaded', function() {
            const intro = document.getElementById('introContainer');
            const profilePhoto = document.getElementById('profilePhoto');
            const mainTitle = document.getElementById('mainTitle');
            const subTitle = document.getElementById('subTitle');
            const loaderContainer = document.getElementById('loaderContainer');
            const loaderBar = document.getElementById('loaderBar');
            const brandTagline = document.getElementById('brandTagline');
            const skipBtn = document.getElementById('skipBtn');
            const languageModal = document.getElementById('languageModal');
            const languageBtns = document.querySelectorAll('.language-btn');
            
            // Initialize particle.js
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4facfe"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true
                    },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4facfe",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.25
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });

            // GSAP Animations
            const tl = gsap.timeline();
            
            // Sequence animations
            tl.to(profilePhoto, {
                duration: 1,
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.7)",
                delay: 0.3
            })
            .to(mainTitle, {
                duration: 1.5,
                opacity: 1,
                y: 0,
                rotationX: 0,
                ease: "power3.out",
            }, "-=0.8")
            .to(subTitle, {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "power3.out",
            }, "-=1")
            .to(loaderContainer, {
                duration: 1,
                opacity: 1,
                ease: "power2.out",
            })
            .to(brandTagline, {
                duration: 1.2,
                opacity: 1,
                ease: "power3.out",
            }, "-=0.8")
            .to(skipBtn, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power3.out",
            }, "-=0.8");

            // Animate loader bar
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 1;
                loaderBar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    // Show language modal after intro completes
                    setTimeout(() => {
                        languageModal.classList.add('active');
                    }, 500);
                }
            }, 30);

            // Skip intro when button is clicked
            skipBtn.addEventListener('click', () => {
                clearInterval(progressInterval);
                loaderBar.style.width = '100%';
                setTimeout(() => {
                    languageModal.classList.add('active');
                }, 300);
            });

            // Handle language selection
            languageBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Close the language modal
                    languageModal.classList.remove('active');
                    
                    // Hide intro with animation
                    intro.style.opacity = 0;
                    setTimeout(() => {
                        intro.style.display = 'none';
                    }, 500);
                });
            });
        });

        const words = ["Freelancer", "Software Developer", "Content Writer", "YouTuber", "Freelance Day Trader"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingText = document.querySelector(".typing-text");

        function typeEffect() {
          const currentWord = words[wordIndex];
          const displayedText = currentWord.substring(0, charIndex);
          typingText.textContent = displayedText;

          if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
          } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
          } else {
            if (!isDeleting) {
              isDeleting = true;
              setTimeout(typeEffect, 1000); // pause before deleting
            } else {
              isDeleting = false;
              wordIndex = (wordIndex + 1) % words.length;
              setTimeout(typeEffect, 300); // pause before typing next
            }
          }
        }

        document.addEventListener("DOMContentLoaded", () => {
          typeEffect();
        });
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function(e) {
    // Disable F12
    if (e.key === "F12") {
      return false;
    }

    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
      return false;
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      return false;
    }

    // Disable Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      return false;
    }
  };
  