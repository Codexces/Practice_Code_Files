// snowflake         
function createSnow() {
    const snow = document.createElement("div");
    snow.innerHTML = "<img id='snowflake' src='https://static.vecteezy.com/system/resources/previews/001/194/635/non_2x/snowflake-png.png'>";
    snow.classList.add("snow");
    document.body.appendChild(snow);
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random duration between 3s and 5s
    setTimeout(() => {
        snow.remove();
    }, 5000); // Adjusted to match the fall duration
}

setInterval(createSnow, 200);

document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": window.innerWidth / 20,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.8,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": window.innerWidth / 300,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                },
                "shape": {
                    "type": "image",
                    "image": {
                        "src": "/animation/images/snowflake-all.png", // Changed to the correct URL
                        "width": 200,
                        "height": 200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    };
    document.head.append(script);
});