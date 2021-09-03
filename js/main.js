window.onload = function() {
    // Create Canvas Background
    var bottom = document.getElementById("canvas").getBoundingClientRect().top;
    var canvas = document.getElementById("canvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    var ctx = canvas.getContext("2d");

    let x = 100;
    let y = 300;
    var sx = 0; // poition of object
    var sy = 300;

    var ex = canvas.width; // end postion of object
    var ey = 300;

    var cx = canvas.width / 2; // the center point
    var cy = canvas.height;
    let radius = 1.5 * canvas.height / 2;
    let angle = 0;
    let speed = 0.01;

    // Sun animation
    setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        let ball_x = cx + Math.cos(angle) * radius;
        let ball_y = cy + Math.sin(angle) * radius;
        angle += speed;
        ctx.strokeStyle = "#FEFEFE";
        ctx.fillStyle = "#FEFEFE"
        ctx.arc(ball_x, ball_y, 50, 0, 2 * Math.PI);
        ctx.fill();

        // Do context stuff
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FDF3F3"
        ctx.fillStyle = "#f7e4e3"
        // Begin Path Drawing
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(0.2 * canvas.width, 2 * canvas.height / 3);
        ctx.lineTo(0.4 * canvas.width, canvas.height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0.3 * canvas.width,  5 * canvas.height / 6);
        ctx.lineTo(0.5 * canvas.width, 4.2 * canvas.height / 6);
        ctx.lineTo(0.7 * canvas.width, 5 * canvas.height / 6);
        ctx.lineTo(0.6 * canvas.width, canvas.height);
        ctx.lineTo(0.4 * canvas.width, canvas.height);
        ctx.fillStyle = "#FCECEB";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0.6 * canvas.width, canvas.height);
        ctx.lineTo(0.8 * canvas.width, 2 * canvas.height / 3);
        ctx.lineTo(canvas.width, canvas.height)
        ctx.fillStyle = "#f7e4e3"
        ctx.fill();
        ctx.strokeStyle = "#FDF3F3"
        ctx.stroke();
    }, 1000 / 60);


    $('#press-skills').click(function() {
        console.log("clicked");
        $('html,body').animate({ scrollTop: canvas.height - 60 }, 400);
        return false; 
    })
    $('#goto-portfolio').click(function() {
        let y = parseInt(document.getElementById('skills').clientHeight); console.log(y)
        $('html,body').animate({ scrollTop: canvas.height + y - 40 }, 400);
        return false; 
    })
    $('#press-portfolio').click(function() {
        let y = parseInt(document.getElementById('skills').clientHeight); console.log(y)
        $('html,body').animate({ scrollTop: canvas.height + y - 40 }, 400);
        return false; 
    })
    $('#press-about').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false; 
    })

    function fadeOutOnScroll(element) {
        if (!element) {
            return;
        }
        
        var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
        var elementHeight = element.offsetHeight;
        var scrollTop = document.documentElement.scrollTop;
        
        var opacity = 1;
        
        if (scrollTop > distanceToTop) {
            opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        }
        
        if (opacity >= 0) {
            element.style.opacity = opacity;
        }
    }

    function scrollHandler() {
        fadeOutOnScroll(document.getElementById("canvas"));
    }

    window.addEventListener('scroll', scrollHandler);
}