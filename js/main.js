const cardData = {
    'fade-in': {
        html: `
<div class="card">
<h2 class="fade-in">Fade In</h2>
<p>Fade-in animation</p>
<button>Try Me</button>
</div>`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}.fade-in {
    opacity: 0;
    animation: fadeIn 2s ease-in infinite;
}

@keyframes fadeIn {
    0% {
        opacity: 0;

    }

    100% {
        opacity: 1;

    }

}`
    },
    'typing': {
        html: `
<div class="card">
<h2 class="typing">Typing</h2>
<p>Typewriter-like effect</p>
<button>Try Me</button>
</div> `,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.card h2.typing  {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1s steps(30) infinite
    , blink 0.75s step-end infinite;
    border-right: 2px solid  #fff;
    margin: 0 auto;
    display: inline-block;
}

@keyframes typing {
    from { 
        width: 0;
    }
    to { 
        width: 6ch;
    }
}

@keyframes blink {
    from ,to { 
        border-color:  transparent;
    }
    50% { 
        border-color: #fff;
    }
}

}`
    },
    'rainbow': {
        html: `
<div class="card">
<h2 class="rainbow">Rainbow</h2>
<p>Colorful Text Transition</p>
<button>Try Me</button>
</div> 
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.rainbow {
    animation:  rainbow 4s linear infinite;
}
@keyframes rainbow {
    0% { color: #ff0000;} 
    20% {color: #ff9900;} 
    40% {color: #ffff00;} 
    60% { color: #3399ff;} 
    80% {color: #33cc33;} 
    100% {color: #ff0522;} 
}
`
    },
    'bounce': {
        html: `
<div class="card">
    <h2 class="bounce">Bounce</h2>
    <p>playful bouncing text</p>
    <button>Try Me</button>
</div> 
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.bounce {
    display: inline-block;
    animation: bounce 1s ease infinite;
}

@keyframes bounce {
    0% , 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

`
    },
    'wave': {
        html: `
<div class="card">
    <h2 class="wave">Wave</h2>
    <p>Smooth Waving motion</p>
    <button>Try Me</button>
</div> 
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.wave {
    display: inline-block;
    animation:  wave 2s ease-in-out infinite;
}

@keyframes wave {
    0% ,100% {

        transform: translateY(0) rotate(0);
    }

    25% {
        transform: translateY(-15px) rotate(5deg);
    }

    75% {
        transform: translateY(-15px) rotate(-5deg);
    }
}

`
    },
    'neon': {
        html: `
<div class="card">
    <h2 class="neon">Neon</h2>
    <p>Glowing neon effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.neon {
    color: #fff;
    text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 40px #0ff,
        0 0 80px #0ff,
        0 0 90px #0ff,
        0 0 100px #0ff,
        0 0 150px #0ff;
    animation: neon 1.5s ease-in-out infinite alternate;
}

@keyframes neon {
    from {
        text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 40px #0ff,
            0 0 80px #0ff,
            0 0 90px #0ff,
            0 0 100px #0ff,
            0 0 150px #0ff;
    }
    to {
        text-shadow: 
            0 0 2.5px #fff,
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #0ff,
            0 0 40px #0ff,
            0 0 45px #0ff,
            0 0 50px #0ff,
            0 0 75px #0ff;
    }
}


`
    },
    'glitch': {
        html:`
<div class="card">
    <h2 class="glitch" data-text="Glitch">Glitch</h2>
    <p>Digital distortion effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.glitch {
    position: relative;
    color: #fff;
    animation: glitch 1s linear infinite;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -2px 0 #00fff9;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
}

@keyframes glitch {
    2%, 64% {
        transform: translate(2px, 0) skew(0deg);
    }
    4%, 60% {
        transform: translate(-1px, 0) skew(0deg);
    }
    62% {
        transform: translate(0, 0) skew(5deg);
    }
}

@keyframes glitch-anim {
    0% {
        clip: rect(31px, 9999px, 94px, 0);
    }
    20% {
        clip: rect(62px, 9999px, 42px, 0);
    }
    40% {
        clip: rect(71px, 9999px, 83px, 0);
    }
    60% {
        clip: rect(20px, 9999px, 26px, 0);
    }
    80% {
        clip: rect(75px, 9999px, 57px, 0);
    }
    100% {
        clip: rect(91px, 9999px, 64px, 0);
    }
}

`
    },
    'shake': {
        html: `
<div class="card">
    <h2 class="shake">Shake</h2>
    <p>Energetic wobble effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.shake {
    animation: shake 0.5s ease-in-out infinite;
    display: inline-block;
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px) rotate(-5deg);
    }
    75% {
        transform: translateX(5px) rotate(5deg);
    }
}



`
    },
    'slide-out': {
        html: `
<div class="card">
    <h2 class="slide-out">Slide Out</h2>
    <p> sliding transition</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.slide-out {
    display: inline-block;
    position: relative;
    animation: slideOut 3s ease-in-out infinite;
}

@keyframes slideOut {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        transform: translateX(50px);
        opacity: 0;
    }
    51% {
        transform: translateX(-50px);
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}




`
    },
    'circular': {
        html: `
<div class="card">
    <h2 class="circular">Rotate</h2>
    <p>Smooth circular motion</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.circular {
    display: inline-block;
    animation: rotate 3s linear infinite;
    transform-origin: center;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}



`
    },
    'zoom-out': {
        html: `
<div class="card">
    <h2 class="zoom-out">Zoom</h2>
    <p>Dynamic scaling effect</p>
    <button>Try Me</button>
</div>


`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.zoom-out {
    display: inline-block;
    animation: zoomOut 2s ease-in-out infinite;
    transform-origin: center;
}

@keyframes zoomOut {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.5);
    }
}




`
    },
    'stretch-skew': {
        html: `
<div class="card">
    <h2 class="stretch-skew">Stretch</h2>
    <p>Elastic distortion effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.stretch-skew {
    display: inline-block;
    animation: stretchSkew 2s ease-in-out infinite;
    transform-origin: center;
}

@keyframes stretchSkew {
    0%, 100% {
        transform: skew(0deg) scaleX(1);
    }
    25% {
        transform: skew(20deg) scaleX(1.2);
    }
    75% {
        transform: skew(-20deg) scaleX(0.8);
    }
}



`
    },
    'perspective-3d': {
        html: `
<div class="card">
    <h2 class="perspective-3d">3D Flip</h2>
    <p> perspective rotation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.perspective-3d {
    display: inline-block;
    animation: perspective3D 3s ease-in-out infinite;
    transform-style: preserve-3d;
    perspective: 1000px;
}

@keyframes perspective3D {
    0%, 100% {
        transform: rotateY(0deg) rotateX(0deg);
    }
    25% {
        transform: rotateY(45deg) rotateX(25deg);
    }
    75% {
        transform: rotateY(-45deg) rotateX(-25deg);
    }
}



`
    },
    'shape-morph': {
        html: `
<div class="card">
    <h2 class="shape-morph">Morph</h2>
    <p>Shape transition</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.shape-morph {
    display: inline-block;
    animation: shapeMorph 3s ease-in-out infinite;
}

@keyframes shapeMorph {
    0%, 100% {
        clip-path: circle(50% at 50% 50%);
    }
    25% {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    50% {
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
    75% {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    }
}



`
    },
    'dissolve': {
        html: `
<div class="card">
    <h2 class="dissolve">Dissolve</h2>
    <p>Ethereal fading effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.dissolve {
    display: inline-block;
    position: relative;
    animation: dissolveEffect 3s ease-in-out infinite;
}

.dissolve::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    animation: dissolveScan 3s ease-in-out infinite;
}

@keyframes dissolveEffect {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }

}

@keyframes dissolveScan {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(50%);
    }
}
`
    },
    'smoke': {
        html: `
<div class="card">
    <h2 class="smoke">Smoke</h2>
    <p> smoke animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.smoke {
    display: inline-block;
    position: relative;
    color: transparent;
    background: linear-gradient(to right, #fff 40%, #666 50%, #fff 60%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    animation: smoke 8s linear infinite;
}

.smoke::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(8px);
    animation: smokeRise 4s ease-out infinite;
}

@keyframes smoke {
    0% {
        background-position: -100% center;
    }
    100% {
        background-position: 200% center;
    }
}

@keyframes smokeRise {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    50% {
        transform: translateY(-20px) scale(1.2);
        opacity: 0.5;
    }
    100% {
        transform: translateY(-40px) scale(1.4);
        opacity: 0;
    }
}


`
    },
    'fire': {
        html: `
<div class="card">
    <h2 class="fire">Fire</h2>
    <p> flame animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.fire {
    display: inline-block;
    position: relative;
    color: #fff;
    text-shadow: 0 0 4px #fff,
                 0 -5px 4px #ff3,
                 2px -10px 6px #fd3,
                 -2px -15px 11px #f80,
                 2px -25px 18px #f20;
    animation: fire 0.8s ease-in-out infinite alternate;
}

.fire::before,
.fire::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: radial-gradient(circle at 50% 100%, #f70, transparent 50%);
    filter: blur(5px);
    animation: flames 1.5s ease-in-out infinite alternate;
}

@keyframes fire {
    0% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
    100% { transform: translateY(1px); }
}

@keyframes flames {
    0% {
        transform: scale(1) rotate(-2deg);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.1) rotate(2deg);
        opacity: 0.8;
    }
}




`
    },
    'sparkle': {
        html: `
<div class="card">
    <h2 class="sparkle">Sparkle</h2>
    <p>Magical glitter effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.sparkle {
    display: inline-block;
    position: relative;
    color: #fff;
    text-shadow: 0 0 10px #fff,
                 0 0 20px #fff,
                 0 0 30px #fff;
    animation: sparkleGlow 1.5s ease-in-out infinite;
}

.sparkle::before,
.sparkle::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #fff 1%, transparent 10%);
    opacity: 0;
    animation: sparkles 2s linear infinite;
}

@keyframes sparkleGlow {
    0%, 100% {
        text-shadow: 0 0 10px #fff,
                     0 0 20px #fff,
                     0 0 30px #0ff,
                     0 0 40px #0ff;
    }
    50% {
        text-shadow: 0 0 20px #fff,
                     0 0 30px #fff,
                     0 0 40px #0ff,
                     0 0 50px #0ff,
                     0 0 60px #0ff;
    }
}

@keyframes sparkles {
    0% {
        background-position: 50% 50%;
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        background-position: 30% 30%;
        opacity: 0;
    }
}



`
    },
    'scroll-horizontal': {
        html: `
<div class="card">
    <h2 class="scroll-horizontal">Scrolling Text →</h2>
    <p> horizontal movement</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.scroll-horizontal {
    display: inline-block;
    white-space: nowrap;
    animation: scrollHorizontal 8s linear infinite;
}

@keyframes scrollHorizontal {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

`
    },
    'scroll-vertical': {
        html: `
<div class="card">
    <div class="vertical-container">
        <h2 class="scroll-vertical">Scrolling Text ↓</h2>
    </div>
    <p> vertical movement</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.vertical-container{
    overflow: hidden;
    height: 60px;
}
.scroll-vertical {
    display: inline-block;
    animation: scrollVertical 8s linear infinite;
}



@keyframes scrollVertical {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(100%);
    }
}


`
    },
    'parallax-container': {
        html: `
<div class="card">
    <div class="parallax-container">
        <h2 class="parallax-text" data-text="Parallax">Parallax</h2>
    </div>
    <p> depth movement</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.parallax-container {
    position: relative;
    perspective: 1000px;
    overflow: hidden;
}

.parallax-text {
    display: inline-block;
    position: relative;
    transform-style: preserve-3d;
    animation: parallaxMove 4s ease-in-out infinite;
}

.parallax-text::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(255, 255, 255, 0.2);
    transform: translateZ(-10px);
    animation: parallaxShadow 4s ease-in-out infinite;
}

@keyframes parallaxMove {
    0%, 100% {
        transform: translateX(0) translateY(0) translateZ(0);
    }
    25% {
        transform: translateX(10px) translateY(-10px) translateZ(20px);
    }
    75% {
        transform: translateX(-10px) translateY(10px) translateZ(-10px);
    }
}

@keyframes parallaxShadow {
    0%, 100% {
        transform: translateZ(-10px);
    }
    50% {
        transform: translateZ(-20px);
    }
}


`
    },
    'split-text': {
        html: `
<div class="card">
    <h2 class="split-text">
        <span>Un</span><span>fo</span><span>ld</span>
    </h2>
    <p>Split text animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.split-text {
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.split-text span {
    display: inline-block;
    transform-origin: center;
    animation: splitUnfold 1.5s ease-out infinite;
}

.split-text span:nth-child(2) {
    animation-delay: 0.2s;
}

.split-text span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes splitUnfold {
    0% {
        transform: scaleY(0) translateY(-50%);
        opacity: 0;
    }
    50% {
        transform: scaleY(1.2) translateY(0);
    }
    100% {
        transform: scaleY(1) translateY(0);
        opacity: 1;
    }
}

`
    },
    'collapse-expand': {
        html: `
<div class="card">
    <h2 class="collapse-expand">Collapse</h2>
    <p> scaling animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.collapse-expand {
    display: inline-block;
    animation: collapseExpand 3s ease-in-out infinite;
    transform-origin: center;
}

@keyframes collapseExpand {
    0%, 100% {
        transform: scaleX(1) scaleY(1);
        letter-spacing: normal;
    }
    25% {
        transform: scaleX(0.5) scaleY(1.2);
        letter-spacing: -2px;
    }
    75% {
        transform: scaleX(1.2) scaleY(0.8);
        letter-spacing: 4px;
    }
}

`
    },
    'shuffle': {
        html: `
            <div class="card">
                <h2 class="shuffle">
                    <span>S</span>
                    <span>h</span>
                    <span>u</span>
                    <span>f</span>
                    <span>f</span>
                    <span>l</span>
                    <span>e</span>
                </h2>
                <p>Letter scramble effect</p>
                <button>Try Me</button>
            </div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}


.shuffle {
    display: inline-block;
    position: relative;
}

.shuffle span {
    display: inline-block;
    animation: shuffleLetters 3s infinite;
    transform-origin: center;
}

.shuffle span:nth-child(2) { animation-delay: 0.1s; }
.shuffle span:nth-child(3) { animation-delay: 0.2s; }
.shuffle span:nth-child(4) { animation-delay: 0.3s; }
.shuffle span:nth-child(5) { animation-delay: 0.4s; }
.shuffle span:nth-child(6) { animation-delay: 0.5s; }
.shuffle span:nth-child(7) { animation-delay: 0.6s; }

@keyframes shuffleLetters {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    25% {
        transform: translateY(-20px) rotate(45deg);
        opacity: 0.5;
    }
    50% {
        transform: translateY(0) rotate(-45deg);
        opacity: 0.8;
    }
    75% {
        transform: translateY(20px) rotate(45deg);
        opacity: 0.5;
    }
}


`
    },
    'beat': {
        html: `
<div class="card">
    <h2 class="sync-beat">Beat</h2>
    <p>Rhythmic pulsing effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.sync-beat {
    display: inline-block;
    animation: beatSync 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    transform-origin: center;
}

@keyframes beatSync {
    0%, 100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.2) translateY(-5px);
    }
    50% {
        transform: scale(0.9);
    }
    75% {
        transform: scale(1.1) translateY(-3px);
    }
} 

`
    },
    'layered-text': {
        html: `
            <div class="card">
                <h2 class="layered-text">
                    <span class="layer-1">Layers</span>
                    <span class="layer-2">Layers</span>
                    <span class="layer-3">Layers</span>
                </h2>
                <p>Multi-layer animation</p>
                <button>Try Me</button>
            </div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.layered-text {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    padding-bottom: 2.2rem;
}

.layered-text span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 100%;
}

.layer-1 {
    color: rgba(255, 255, 255, 0.8);
    animation: layerOne 2s ease-in-out infinite;
}

.layer-2 {
    color: rgba(0, 255, 255, 0.6);
    animation: layerTwo 2s ease-in-out infinite;
}

.layer-3 {
    color: rgba(255, 0, 255, 0.4);
    animation: layerThree 2s ease-in-out infinite;
}

@keyframes layerOne {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-45%, -55%); }
}

@keyframes layerTwo {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-55%, -45%); }
}

@keyframes layerThree {
    0%, 100% { transform: translate(-50%, -50%); }
    50% { transform: translate(-45%, -45%); }
}


`
    },
    'collision': {
        html: `
<div class="card">
    <h2 class="collision">
        <span class="left">Col</span><span class="right">lide</span>
    </h2>
    <p>Impact animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.collision {
    display: inline-block;
    position: relative;
}

.collision span {
    display: inline-block;
    animation: collide 2s ease-in-out infinite;
}

.collision .left {
    animation: collideLeft 2s ease-in-out infinite;
}

.collision .right {
    animation: collideRight 2s ease-in-out infinite;
}

@keyframes collideLeft {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-20px) rotate(-5deg); }
    50% { transform: translateX(5px) scale(1.2); }
    75% { transform: translateX(-5px) scale(0.9); }
}

@keyframes collideRight {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(20px) rotate(5deg); }
    50% { transform: translateX(-5px) scale(1.2); }
    75% { transform: translateX(5px) scale(0.9); }
}



`
    },
    'split-kinetic': {
        html: `
<div class="card">
    <h2 class="split-kinetic">
        <span class="part1">Kin</span><span class="part2">etic</span>
    </h2>
    <p>Split motion effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.split-kinetic {
    display: inline-block;
    position: relative;
    text-align: center;
}

.split-kinetic span {
    display: inline-block;
    animation: splitMove 2s ease-in-out infinite;
}

.split-kinetic .part1 {
    animation: moveUp 2s ease-in-out infinite;
    color: #0ff;
}

.split-kinetic .part2 {
    animation: moveDown 2s ease-in-out infinite;
    color: #f0f;
}

@keyframes moveUp {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes moveDown {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(20px) rotate(-10deg); }
}



`
    },
    'drip': {
        html: `
<div class="card">
    <h2 class="drip" data-text="Dripping">Dripping</h2>
    <p>Liquid drip animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.drip {
    position: relative;
    display: inline-block;
    color: #fff;
}

.drip::before,
.drip::after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
}

.drip::before {
    top: 0;
    height: 100%;
    color: #0ff;
    animation: drip 2s ease-in-out infinite;
}

.drip::after {
    top: 0;
    height: 100%;
    color: rgb(136, 0, 136);
    animation: drip 3s ease-in-out infinite;
}

@keyframes drip {
    0%, 100% {
        clip-path: polygon(
            0% 0%, 100% 0%, 100% 45%, 90% 45%, 
            85% 85%, 80% 45%, 70% 45%, 65% 75%, 
            60% 45%, 50% 45%, 45% 65%, 40% 45%, 
            30% 45%, 25% 55%, 20% 45%, 0% 45%
        );
    }
    50% {
        clip-path: polygon(
            0% 0%, 100% 0%, 100% 45%, 95% 45%, 
            90% 95%, 85% 45%, 75% 45%, 70% 85%, 
            65% 45%, 55% 45%, 50% 75%, 45% 45%, 
            35% 45%, 30% 65%, 25% 45%, 0% 45%
        );
    }
}


`
    },
    'stretchy': {
        html: `
<div class="card">
    <h2 class="stretchy">
        <span>S</span>
        <span>t</span>
        <span>r</span>
        <span>e</span>
        <span>t</span>
        <span>c</span>
        <span>h</span>
    </h2>
    <p>Elastic letter animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.stretchy {
    display: inline-block;
}

.stretchy span {
    display: inline-block;
    animation: stretch 2s ease-in-out infinite;
    transform-origin: center;
}

.stretchy span:nth-child(2) { animation-delay: 0.2s; }
.stretchy span:nth-child(3) { animation-delay: 0.4s; }
.stretchy span:nth-child(4) { animation-delay: 0.6s; }
.stretchy span:nth-child(5) { animation-delay: 0.8s; }
.stretchy span:nth-child(6) { animation-delay: 1.0s; }
.stretchy span:nth-child(7) { animation-delay: 1.2s; }

@keyframes stretch {
    0%, 100% {
        transform: scaleY(1) scaleX(1);
    }
    25% {
        transform: scaleY(2) scaleX(0.5);
    }
    50% {
        transform: scaleY(0.5) scaleX(1.5);
    }
    75% {
        transform: scaleY(1.5) scaleX(0.8);
    }
}


`
    },
    'blob-text': {
        html: `
<div class="card">
    <h2 class="blob-text">
        <span>Blob</span>
    </h2>
    <p> morphing effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.blob-text {
    display: inline-block;
    position: relative;
    filter: blur(0.5px);
}

.blob-text span {
    display: inline-block;
    animation: blobMorph 3s ease-in-out infinite;
    background: linear-gradient(45deg, #0ff, #f0f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

@keyframes blobMorph {
    0%, 100% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        transform: scale(1) rotate(0deg);
    }
    34% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
        transform: scale(0.8) rotate(10deg);
    }
    67% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        transform: scale(1.2) rotate(-10deg);
    }
}


`
    },
    'vhs-text': {
        html: `
<div class="card">
    <h2 class="vhs-text" data-text="VHS">VHS</h2>
    <p>Retro video effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.vhs-text {
    display: inline-block;
    position: relative;
    color: #fff;
    text-shadow: 0.1em 0 0 rgba(255,0,0,0.75),
                -0.1em 0 0 rgba(0,255,255,0.75);
    animation: vhsEffect 3s infinite;
}

.vhs-text::before,
.vhs-text::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    width: 100%;
    background: inherit;
}

.vhs-text::before {
    top: 0;
    animation: vhsNoise 0.2s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.vhs-text::after {
    bottom: 0;
    animation: vhsNoise 0.5s infinite reverse;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes vhsEffect {
    0%, 40%, 100% { transform: skew(0deg); }
    20% { transform: skew(-1deg); }
    60% { transform: skew(1deg); }
    80% { transform: skew(-1deg); }
}

@keyframes vhsNoise {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(1px); }
    50% { transform: translateX(-1px); }
    75% { transform: translateX(1px); }
}


`
    },
    'pixel-text': {
        html: `
<div class="card">
    <h2 class="pixel-text" data-text="Pixel">Pixel</h2>
    <p>Retro pixel animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.pixel-text {
    display: inline-block;
    position: relative;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 2px #000;
    animation: pixelate 2s steps(10) infinite;
}

.pixel-text::before,
.pixel-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}

.pixel-text::before {
    left: 2px;
    text-shadow: -2px 0 #0ff;
    animation: pixelGlitch 0.5s steps(2) infinite;
}

.pixel-text::after {
    left: -2px;
    text-shadow: 2px 0 #f0f;
    animation: pixelGlitch 0.5s steps(2) infinite reverse;
}

@keyframes pixelate {
    0%, 100% { 
        transform: scale(1); 
    }
    50% { 
        transform: scale(1.01) skew(1deg); 
    }
}

@keyframes pixelGlitch {
    0%, 100% { 
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); 
    }
    50% { 
        clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); 
    }
}


`
    },
    'rgb-shift': {
        html: `
<div class="card">
    <h2 class="rgb-shift" data-text="RGB">RGB</h2>
    <p>Color channel shift</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.rgb-shift {
    position: relative;
    display: inline-block;
    color: #fff;
}

.rgb-shift::before,
.rgb-shift::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
}

.rgb-shift::before {
    color: #f00;
    animation: rgbShiftRed 2s infinite linear;
}

.rgb-shift::after {
    color: #0ff;
    animation: rgbShiftCyan 2s infinite linear;
}

@keyframes rgbShiftRed {
    0%, 100% { transform: translate(-4px, 0); }
    25% { transform: translate(-2px, 2px); }
    50% { transform: translate(0, -2px); }
    75% { transform: translate(2px, 2px); }
}

@keyframes rgbShiftCyan {
    0%, 100% { transform: translate(4px, 0); }
    25% { transform: translate(2px, -2px); }
    50% { transform: translate(0, 2px); }
    75% { transform: translate(-2px, -2px); }
}



`
    },
    'shadow-shift': {
        html: `
<div class="card">
    <h2 class="shadow-shift" data-text="Shadow">Shadow</h2>
    <p>Dynamic light effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}


.shadow-shift {
    display: inline-block;
    position: relative;
    color: #fff;
    animation: shadowMove 3s ease-in-out infinite;
    font-weight: bold;
}

.shadow-shift::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: transparent;
    filter: blur(8px);
    animation: shadowFollow 3s ease-in-out infinite;
    background: linear-gradient(45deg, #0ff, #f0f);
    -webkit-background-clip: text;
    background-clip: text;
    opacity: 0.8;
}

@keyframes shadowMove {
    0%, 100% {
        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5);
        transform: translateZ(0);
    }
    50% {
        text-shadow: -2px -2px 10px rgba(255, 255, 255, 0.5);
        transform: translateZ(10px);
    }
}

@keyframes shadowFollow {
    0%, 100% {
        transform: translate(5px, 5px);
    }
    50% {
        transform: translate(-5px, -5px);
    }
}



`
    },
    'light-sweep': {
        html: `
<div class="card">
    <h2 class="light-sweep">Sweep</h2>
    <p>Shimmering light effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.light-sweep {
    position: relative;
    display: inline-block;
    color: #dadada;
    overflow: hidden;
}

.light-sweep::before {
    content: '';
    position: absolute;
    top: 20px;
    left: -50%;
    bottom: 30px;
    width: 200%;
    height: 5px;
    background: linear-gradient(
        45deg,
        transparent 45%,
        rgba(255, 255, 255, 1) 50%,
        transparent 55%
    );
    animation: sweep 2s infinite;
}

@keyframes sweep {
    0% {
        transform: translate(-100%, -100%) rotate(45deg);
    }
    100% {
        transform: translate(100%, 100%) rotate(45deg);
    }
}





`
    },
    'shatter': {
        html: `
<div class="card">
    <h2 class="shatter">
        <span style="--x: -30px; --y: -20px; --r: -45deg;">S</span>
        <span style="--x: 20px; --y: -40px; --r: 35deg;">h</span>
        <span style="--x: -40px; --y: 25px; --r: -65deg;">a</span>
        <span style="--x: 35px; --y: 30px; --r: 45deg;">t</span>
        <span style="--x: -25px; --y: 35px; --r: -35deg;">t</span>
        <span style="--x: 30px; --y: -25px; --r: 55deg;">e</span>
        <span style="--x: -35px; --y: -30px; --r: -45deg;">r</span>
    </h2>
    <p>Breaking apart effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.shatter {
    display: inline-block;
    position: relative;
}

.shatter span {
    display: inline-block;
    animation: shatterPiece 1.5s ease-in-out infinite;
    transform-origin: center;
}

.shatter span:nth-child(2) { animation-delay: 0.1s; }
.shatter span:nth-child(3) { animation-delay: 0.2s; }
.shatter span:nth-child(4) { animation-delay: 0.3s; }
.shatter span:nth-child(5) { animation-delay: 0.4s; }
.shatter span:nth-child(6) { animation-delay: 0.5s; }

@keyframes shatterPiece {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
    }
    50% {
        transform: translate(var(--x, 20px), var(--y, -20px)) rotate(var(--r, 45deg));
        opacity: 0;
    }
}
`
    },
    'ember-text': {
        html: `
<div class="card">
    <h2 class="ember-text">Embers</h2>
    <p>Glowing particle effects</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.ember-text {
    display: inline-block;
    position: relative;
    color: #fff;
}

.ember-text::before,
.ember-text::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ff6b00;
    box-shadow: 
        0 0 10px #ff6b00,
        0 0 20px #ff6b00,
        0 0 30px #ff6b00;
    animation: spark 2s ease-in-out infinite;
}

.ember-text::before {
    animation: spark1 2s ease-in-out infinite;
}

.ember-text::after {
    animation: spark2 2s ease-in-out infinite;
    animation-delay: 0.5s;
}


@keyframes spark1 {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }
    100% {
        transform: translate(-50px, -50px) rotate(45deg);
        opacity: 0;
    }
}

@keyframes spark2 {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }
    100% {
        transform: translate(50px, -50px) rotate(-45deg);
        opacity: 0;
    }
}


`
    },
    'dust': {
        html: `
<div class="card">
    <h2 class="dust">
        <span>D</span>
        <span>u</span>
        <span>s</span>
        <span>t</span>
    </h2>
    <p>Evaporation effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.dust {
    display: inline-block;
    position: relative;
}

.dust span {
    display: inline-block;
    animation: evaporate 3s ease-in-out infinite;
    opacity: 1;
}

.dust span:nth-child(2) { animation-delay: 0.2s; }
.dust span:nth-child(3) { animation-delay: 0.4s; }
.dust span:nth-child(4) { animation-delay: 0.6s; }
.dust span:nth-child(5) { animation-delay: 0.8s; }

@keyframes evaporate {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0);
    }
    50% {
        transform: translateY(-20px) scale(1.5);
        opacity: 0;
        filter: blur(4px);
    }
}


`
    },
    'flipboard': {
        html: `
<div class="card">
    <h2 class="flipboard">
        <span>F</span>
        <span>l</span>
        <span>i</span>
        <span>p</span>
    </h2>
    <p> board effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.flipboard {
    display: inline-block;
    position: relative;
    perspective: 1000px;
}

.flipboard span {
    display: inline-block;
    animation: flip 3s ease-in-out infinite;
    transform-origin: bottom;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.flipboard span:nth-child(2) { animation-delay: 0.2s; }
.flipboard span:nth-child(3) { animation-delay: 0.4s; }
.flipboard span:nth-child(4) { animation-delay: 0.6s; }
.flipboard span:nth-child(5) { animation-delay: 0.8s; }

@keyframes flip {
    0%, 100% {
        transform: rotateX(0deg);
        background: rgba(0, 0, 0, 0.096);
    }
    50% {
        transform: rotateX(-90deg);
        background: #2a2a2a;
    }
}


`
    },
    'sliding-panels': {
        html: `
<div class="card">
    <h2 class="sliding-panels">
        <span>S</span>
        <span>l</span>
        <span>i</span>
        <span>d</span>
        <span>e</span>
    </h2>
    <p>Panel sliding effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.sliding-panels {
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.sliding-panels span {
    display: inline-block;
    position: relative;
    padding: 0 5px;
    animation: slidePanel 3s ease-in-out infinite;
    background: linear-gradient(45deg, #1a1a1a38, #2a2a2a);
}

.sliding-panels span:nth-child(2) { animation-delay: 0.2s; }
.sliding-panels span:nth-child(3) { animation-delay: 0.4s; }
.sliding-panels span:nth-child(4) { animation-delay: 0.6s; }
.sliding-panels span:nth-child(5) { animation-delay: 0.8s; }

@keyframes slidePanel {
    0%, 100% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(100%);
    }
}


`
    },
    'puzzle-reveal': {
        html: `
<div class="card">
    <h2 class="puzzle-reveal">
        <span class="puzzle-piece" style="--x: -20px; --y: -20px; --r: -45deg;">P</span>
        <span class="puzzle-piece" style="--x: 20px; --y: -20px; --r: 45deg;">u</span>
        <span class="puzzle-piece" style="--x: -20px; --y: 20px; --r: 45deg;">z</span>
        <span class="puzzle-piece" style="--x: 20px; --y: 20px; --r: -45deg;">z</span>
        <span class="puzzle-piece" style="--x: -20px; --y: -20px; --r: 45deg;">l</span>
        <span class="puzzle-piece" style="--x: 20px; --y: 20px; --r: -45deg;">e</span>
    </h2>
    <p>Puzzle assembly effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.puzzle-reveal {
    display: inline-block;
    position: relative;
}

.puzzle-piece {
    display: inline-block;
    animation: puzzleFit 2s ease-in-out infinite;
    transform-origin: center;
}

.puzzle-piece:nth-child(2) { animation-delay: 0.2s; }
.puzzle-piece:nth-child(3) { animation-delay: 0.4s; }
.puzzle-piece:nth-child(4) { animation-delay: 0.6s; }
.puzzle-piece:nth-child(5) { animation-delay: 0.8s; }
.puzzle-piece:nth-child(6) { animation-delay: 1.0s; }

@keyframes puzzleFit {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
    }
    25% {
        transform: translate(var(--x, 20px), var(--y, 20px)) rotate(var(--r, 45deg));
        opacity: 0.5;
    }
    50% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
    }
}


`
    },
    'environment-map': {
        html: `
<div class="card">
    <h2 class="environment-map" data-text="Reflect">Reflect</h2>
    <p>Environmental reflection</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.environment-map {
    display: inline-block;
    position: relative;
    color: transparent;
    background: linear-gradient(
        45deg,
        #0ff,
        #f0f,
        #ff0,
        #0ff
    );
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: environmentFlow 8s ease infinite;
}

.environment-map::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.5)
    );
    -webkit-background-clip: text;
    background-clip: text;
    animation: reflectionMove 4s linear infinite;
}

@keyframes environmentFlow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes reflectionMove {
    0% {
        transform: translateX(-100%) skewX(-45deg);
    }
    100% {
        transform: translateX(200%) skewX(-45deg);
    }
}


`
    },
    'ripple': {
        html: `

<div class="card">
    <h2 class="ripple" data-text="Ripple">Ripple</h2>
    <p>Water ripple effect</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.ripple {
    display: inline-block;
    position: relative;
}

.ripple::before,
.ripple::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: rippleWave 2s infinite;
    opacity: 0;
}

.ripple::after {
    animation-delay: 0.5s;
}

@keyframes rippleWave {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}


`
    },
    'fragment': {
        html: `

<div class="card">
    <h2 class="fragment">
        <span style="--x: -30px; --y: -20px; --r: -45deg;">B</span>
        <span style="--x: 25px; --y: -30px; --r: 35deg;">r</span>
        <span style="--x: -20px; --y: 25px; --r: -25deg;">e</span>
        <span style="--x: 30px; --y: 20px; --r: 55deg;">a</span>
        <span style="--x: -25px; --y: -15px; --r: -35deg;">k</span>
    </h2>
    <p>Shard fragmentation</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.fragment {
    display: inline-block;
    position: relative;
}

.fragment span {
    display: inline-block;
    animation: shardBreak 2.5s ease-in-out infinite;
    transform-origin: center;
}

.fragment span:nth-child(2) { animation-delay: 0.1s; }
.fragment span:nth-child(3) { animation-delay: 0.2s; }
.fragment span:nth-child(4) { animation-delay: 0.3s; }
.fragment span:nth-child(5) { animation-delay: 0.4s; }
.fragment span:nth-child(6) { animation-delay: 0.5s; }

@keyframes shardBreak {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(var(--x, 20px), var(--y, -20px)) rotate(var(--r, 45deg)) scale(0.5);
        opacity: 0.3;
    }
}


`
    },
    'ink-spread': {
        html: `
<div class="card">
    <h2 class="ink-spread" data-text="Ink">Ink</h2>
    <p>Fluid ink spread</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.ink-spread {
    display: inline-block;
    position: relative;
    color: transparent;
    background: linear-gradient(45deg, #000, #333);
    -webkit-background-clip: text;
    background-clip: text;
}

.ink-spread::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    animation: inkFlow 2s ease-out infinite;
    clip-path: circle(0% at 50% 50%);
}

@keyframes inkFlow {
    0% {
        clip-path: circle(0% at 50% 50%);
        filter: blur(5px);
    }
    100% {
        clip-path: circle(100% at 50% 50%);
        filter: blur(0);
    }
}


`
    },
    'rubber-band': {
        html: `
<div class="card">
    <h2 class="rubber-band">Stretch</h2>
    <p>Elastic animation</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.rubber-band {
    display: inline-block;
    animation: rubberBand 1.5s ease-in-out infinite;
    transform-origin: center;
}

@keyframes rubberBand {
    0%, 100% {
        transform: scale(1, 1);
    }
    30% {
        transform: scale(1.25, 0.75);
    }
    40% {
        transform: scale(0.75, 1.25);
    }
    50% {
        transform: scale(1.15, 0.85);
    }
    65% {
        transform: scale(0.95, 1.05);
    }
    75% {
        transform: scale(1.05, 0.95);
    }
}


`
    },
    'bouncy-drop': {
        html: `
<div class="card">
    <h2 class="bouncy-drop">Drop</h2>
    <p>Bouncy entrance</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.bouncy-drop {
    display: inline-block;
    animation: bounceDrop 3s ease-in-out infinite;
    transform-origin: top;
}

@keyframes bounceDrop {
    0% {
        transform: translateY(-100vh);
        animation-timing-function: ease-in;
    }
    38% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    55% {
        transform: translateY(-65px);
        animation-timing-function: ease-in;
    }
    72% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    81% {
        transform: translateY(-28px);
        animation-timing-function: ease-in;
    }
    90% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    95% {
        transform: translateY(-8px);
        animation-timing-function: ease-in;
    }
    100% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
}


`
    },
    'overshoot': {
        html: `
<div class="card">
    <h2 class="overshoot">
        <span>S</span>
        <span>w</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
    </h2>
    <p>Overshoot animation</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.overshoot {
    display: inline-block;
}

.overshoot span {
    display: inline-block;
    animation: letterOvershoot 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    transform-origin: center;
}

.overshoot span:nth-child(2) { animation-delay: 0.1s; }
.overshoot span:nth-child(3) { animation-delay: 0.2s; }
.overshoot span:nth-child(4) { animation-delay: 0.3s; }
.overshoot span:nth-child(5) { animation-delay: 0.4s; }
.overshoot span:nth-child(6) { animation-delay: 0.5s; }

@keyframes letterOvershoot {
    0% { transform: translateX(-200px); }
    40% { transform: translateX(20px); }
    60% { transform: translateX(-10px); }
    80% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}


`
    },
    'gravity-pull': {
        html: `
<div class="card">
    <h2 class="gravity-pull">
        <span>D</span>
        <span>r</span>
        <span>o</span>
        <span>p</span>
    </h2>
    <p>Gravity effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.gravity-pull {
    display: inline-block;
}

.gravity-pull span {
    display: inline-block;
    animation: gravityDrop 3s cubic-bezier(.17,.67,.83,.67) infinite;
    transform-origin: top;
}

.gravity-pull span:nth-child(2) { animation-delay: 0.2s; }
.gravity-pull span:nth-child(3) { animation-delay: 0.4s; }
.gravity-pull span:nth-child(4) { animation-delay: 0.6s; }
.gravity-pull span:nth-child(5) { animation-delay: 0.8s; }

@keyframes gravityDrop {
    0%, 100% {
        transform: translateY(-50px);
        opacity: 0;
    }
    20%, 80% {
        transform: translateY(0);
        opacity: 1;
    }
    85% {
        transform: translateY(-3px);
    }
    95% {
        transform: translateY(-1px);
    }
}

`
    },
    'wind-text': {
        html: `
<div class="card">
    <h2 class="wind-text">
        <span>W</span>
        <span>i</span>
        <span>n</span>
        <span>d</span>
        <span>y</span>
    </h2>
    <p>Breeze effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.wind-text {
    display: inline-block;
}

.wind-text span {
    display: inline-block;
    animation: windBlow 3s ease-in-out infinite;
    transform-origin: bottom;
}

.wind-text span:nth-child(2) { animation-delay: 0.1s; }
.wind-text span:nth-child(3) { animation-delay: 0.2s; }
.wind-text span:nth-child(4) { animation-delay: 0.3s; }
.wind-text span:nth-child(5) { animation-delay: 0.4s; }

@keyframes windBlow {
    0%, 100% {
        transform: rotate(0deg) translateX(0);
    }
    25% {
        transform: rotate(3deg) translateX(5px);
    }
    50% {
        transform: rotate(-2deg) translateX(-3px);
    }
    75% {
        transform: rotate(1deg) translateX(2px);
    }
}

`
    },
    'gradient-reveal': {
        html: `
<div class="card">
    <h2 class="gradient-reveal" data-text="Reveal">Reveal</h2>
    <p>Gradient mask effect</p>
    <button>Try Me</button>
</div>         
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.gradient-reveal {
    display: inline-block;
    position: relative;
    color: transparent;
    background: linear-gradient(45deg, #0ff, #f0f);
    background-clip: text;
    -webkit-background-clip: text;
}

.gradient-reveal::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        transparent 0%,
        white 50%,
        transparent 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientSlide 3s infinite;
}

@keyframes gradientSlide {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

`
    },  
    'stagger-letters': {
        html: `
<div class="card">
    <h2 class="stagger-letters">
        <span>S</span>
        <span>t</span>
        <span>a</span>
        <span>g</span>
        <span>g</span>
        <span>e</span>
        <span>r</span>
    </h2>
    <p>Sequential animation</p>
    <button>Try Me</button>
</div>        
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.stagger-letters {
    display: inline-block;
}

.stagger-letters span {
    display: inline-block;
    opacity: 0;
    animation: staggerIn 3s ease-in-out infinite;
}

.stagger-letters span:nth-child(1) { animation-delay: 0.1s; }
.stagger-letters span:nth-child(2) { animation-delay: 0.2s; }
.stagger-letters span:nth-child(3) { animation-delay: 0.3s; }
.stagger-letters span:nth-child(4) { animation-delay: 0.4s; }
.stagger-letters span:nth-child(5) { animation-delay: 0.5s; }
.stagger-letters span:nth-child(6) { animation-delay: 0.6s; }
.stagger-letters span:nth-child(7) { animation-delay: 0.7s; }

@keyframes staggerIn {
    0% {
        transform: translateY(50px) rotate(20deg);
        opacity: 0;
    }
    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
}

`
    },
    'loop-text': {
        html: `
<div class="card">
    <h2 class="loop-text">
        <span class="blink">Blink</span>
        <span class="pulse">Pulse</span>
    </h2>
    <p>Continuous animations</p>
    <button>Try Me</button>
</div>       
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.loop-text {
    display: inline-block;
}

.marquee {
    animation: scrollLoop 8s linear infinite;
}

.blink {
    animation: blinkLoop 1s step-end infinite;
}

.pulse {
    animation: pulseLoop 2s ease-in-out infinite;
}

@keyframes scrollLoop {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes blinkLoop {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes pulseLoop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}


`
    },
    'outline-animate': {
        html: `
<div class="card">
    <h2 class="outline-animate" data-text="Outline">Outline</h2>
    <p>Animated border</p>
    <button>Try Me</button>
</div>      
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.outline-animate {
    display: inline-block;
    position: relative;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
}

.outline-animate::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    color: transparent;
    -webkit-text-stroke: 2px #0ff;
    animation: outlineFlow 2s linear infinite;
    background: linear-gradient(90deg, transparent 0%, #0ff 50%, transparent 100%);
    -webkit-background-clip: text;
    background-clip: text;
}

@keyframes outlineFlow {
    0% {
        transform: translateX(-5%);
    }
    25% {
        transform: translateX(5%);
    }
    50% {
        transform: translateX(-5%);
    }
    100% {
        transform: translateX(5%);
    }
}


`
    },
    'gradient-fill': {
        html: `
<div class="card">
    <h2 class="gradient-fill">Rainbow</h2>
    <p>Flowing colors</p>
    <button>Try Me</button>
</div>     
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.gradient-fill {
    display: inline-block;
    background: linear-gradient(
        90deg,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #4b0082,
        #8f00ff,
        #ff0000
    );
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: gradientFlow 3s linear infinite;
}

@keyframes gradientFlow {
    0% {
        background-position: 0% center;
    }
    100% {
        background-position: 200% center;
    }
}

`
    },
    'fade-colors': {
        html: `
<div class="card">
    <h2 class="fade-colors">Colors</h2>
    <p>Color transition</p>
    <button>Try Me</button>
</div>   
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.fade-colors {
    display: inline-block;
    animation: colorFade 5s linear infinite;
}

@keyframes colorFade {
    0% {
        color: #ff0000;
        opacity: 1;
    }
    25% {
        color: #00ff00;
        opacity: 0.7;
    }
    50% {
        color: #0000ff;
        opacity: 0.5;
    }
    75% {
        color: #ff00ff;
        opacity: 0.7;
    }
    100% {
        color: #ff0000;
        opacity: 1;
    }
}

`
    },
    'holographic': {
        html: `
<div class="card">
    <h2 class="holographic" data-text="Holo">Holo</h2>
    <p>3D floating effect</p>
    <button>Try Me</button>
</div>  
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.holographic {
    display: inline-block;
    position: relative;
    color: transparent;
    background: linear-gradient(
        45deg,
        rgba(255,255,255,0.8),
        rgba(0,255,255,0.8),
        rgba(255,0,255,0.8)
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 0 0 10px rgba(0,255,255,0.5);
    animation: holoFloat 3s ease-in-out infinite,
               holoGradient 5s linear infinite;
}

.holographic::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(8px);
    transform: translateZ(-10px);
    animation: holoGlow 2s ease-in-out infinite;
}

@keyframes holoFloat {
    0%, 100% {
        transform: translateY(0) rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: translateY(-10px) rotateX(10deg) rotateY(10deg);
    }
}

@keyframes holoGradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
}

@keyframes holoGlow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
}

`
    },
    'film-grain': {
        html: `
<div class="card">
    <h2 class="film-grain" data-text="Vintage">Vintage</h2>
    <p>Film grain effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.film-grain {
    display: inline-block;
    position: relative;
    color: #fff;
}

.film-grain::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -10;
    width: 120%;
    height: 120%;
    background: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>');
    opacity: 0.3;
    animation: grainShift 0.5s steps(1) infinite;
    mix-blend-mode: overlay;
}

@keyframes grainShift {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(5%, 5%); }
    30% { transform: translate(5%, -5%); }
    40% { transform: translate(-5%, 5%); }
    50% { transform: translate(0, 5%); }
    60% { transform: translate(5%, 0); }
    70% { transform: translate(0, -5%); }
    80% { transform: translate(-5%, 0); }
    90% { transform: translate(0, 0); }
}

`
    },
    'projector-flicker': {
        html: `
<div class="card">
    <h2 class="projector-flicker">Cinema</h2>
    <p>Retro projector effect</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.projector-flicker {
    display: inline-block;
    position: relative;
    color: #fff;
    text-shadow: 0 0 8px rgba(255,255,255,0.4);
    animation: flicker 0.1s infinite, 
                verticalShift 3s infinite,
                brightness 4s infinite;
}

@keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.95; }
    60% { opacity: 0.97; }
    70% { opacity: 0.93; }
    80% { opacity: 1; }
    90% { opacity: 0.96; }
    100% { opacity: 1; }
}

@keyframes verticalShift {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(1px); }
}

@keyframes brightness {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.1); }
}

`
    },
    'silent-film': {
        html: `
<div class="card">
    <h2 class="silent-film">The End</h2>
    <p>Silent era style</p>
    <button>Try Me</button>
</div>
`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.silent-film {
    display: inline-block;
    font-family: "Courier New", monospace;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    text-shadow: 2px 2px 0 #000;
    animation: silentFilmIn 3s ease-in-out infinite;
    position: relative;
}

.silent-film::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(0,0,0,0.1) 45%,
        rgba(0,0,0,0.1) 55%,
        transparent 100%
    );
    animation: filmStrip 2s linear infinite;
}

@keyframes silentFilmIn {
    0% { transform: scale(0.8); opacity: 0; }
    10% { transform: scale(1.1); opacity: 0.8; }
    20% { transform: scale(1); opacity: 1; }
    90% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.8); opacity: 0; }
}

@keyframes filmStrip {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

`
    },
    'generative-text': {
        html: `
<div class="card">
    <h2 class="generative-text">
        <span>G</span>
        <span>e</span>
        <span>n</span>
        <span>A</span>
        <span>I</span>
    </h2>
    <p>AI-generated motion</p>
    <button>Try Me</button>
</div>




`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.generative-text {
    display: inline-block;
    position: relative;
}

.generative-text span {
    display: inline-block;
    animation: generateMove 3s infinite;
    transform-origin: center;
}

.generative-text span:nth-child(2n) {
    animation-duration: 4s;
    animation-direction: reverse;
}

.generative-text span:nth-child(3n) {
    animation-duration: 2.5s;
    animation-timing-function: ease-in-out;
}

@keyframes generateMove {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
    25% {
        transform: translate(var(--x, 10px), var(--y, -10px)) rotate(var(--r, 5deg)) scale(var(--s, 1.1));
    }
    75% {
        transform: translate(var(--nx, -10px), var(--ny, 10px)) rotate(var(--nr, -5deg)) scale(var(--ns, 0.9));
    }
}

`
    },
    'emotion-text': {
        html: `
<div class="card">
    <h2 class="emotion-text">
        <span class="emotion-happy">Joy</span>
        <span class="emotion-sad">Sad</span>
        <span class="emotion-angry">Mad</span>
    </h2>
    <p>Mood animations</p>
    <button>Try Me</button>
</div>




`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.emotion-text {
    display: inline-block;
    position: relative;
}

/* Happy Animation */
.emotion-happy {
    animation: happyBounce 1s ease-in-out infinite;
    color: #FFD700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

/* Sad Animation */
.emotion-sad {
    animation: sadDroop 2s ease-in-out infinite;
    color: #4169E1;
    text-shadow: 0 0 10px rgba(65, 105, 225, 0.5);
}

/* Angry Animation */
.emotion-angry {
    animation: angryShake 0.5s ease-in-out infinite;
    color: #FF4500;
    text-shadow: 0 0 10px rgba(255, 69, 0, 0.5);
}

@keyframes happyBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.1); }
}

@keyframes sadDroop {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(5px) rotate(-2deg); }
}

@keyframes angryShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px) rotate(-2deg); }
    75% { transform: translateX(5px) rotate(2deg); }
}

`
    },
    'flow-text': {
        html: `

<div class="card">
    <h2 class="flow-text">
        <div class="flow-shape"></div>
        <span>F</span>
        <span>l</span>
        <span>o</span>
        <span>w</span>
    </h2>
    <p>Dynamic text flow</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.flow-text {
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.flow-text span {
    display: inline-block;
    animation: flowMove 4s ease-in-out infinite;
}

.flow-shape {
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    filter: blur(5px);
    animation: shapeFloat 6s ease-in-out infinite;
}

@keyframes flowMove {
    0%, 100% {
        transform: translateX(0) translateY(0);
    }
    50% {
        transform: translateX(var(--flow-x, 20px)) translateY(var(--flow-y, -10px));
    }
}

@keyframes shapeFloat {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(100px, -20px) scale(1.5);
    }
}

`
    },
    'hybrid-animation': {
        html: `
<div class="card">
    <h2 class="hybrid-animation">
        <span>M</span>
        <span>i</span>
        <span>x</span>
        <span>e</span>
        <span>d</span>
    </h2>
    <p>Combined effects</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.hybrid-animation {
    display: inline-block;
    position: relative;
}

.hybrid-animation span {
    display: inline-block;
    animation: 
        fadeScale 2s ease-in-out infinite,
        rotateGlow 3s linear infinite,
        slideWave 4s ease-in-out infinite;
}

.hybrid-animation span:nth-child(2) { animation-delay: 0.2s; }
.hybrid-animation span:nth-child(3) { animation-delay: 0.4s; }
.hybrid-animation span:nth-child(4) { animation-delay: 0.6s; }
.hybrid-animation span:nth-child(5) { animation-delay: 0.8s; }

@keyframes fadeScale {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
}

@keyframes rotateGlow {
    0% { filter: hue-rotate(0deg) brightness(1); }
    100% { filter: hue-rotate(360deg) brightness(1.5); }
}

@keyframes slideWave {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

`
    },
    'multi-step': {
        html: `
<div class="card">
    <h2 class="multi-step">
        <span>P</span>
        <span>h</span>
        <span>a</span>
        <span>s</span>
        <span>e</span>
    </h2>
    <p>Multi-step animation</p>
    <button>Try Me</button>
</div>

`,
        css: `
.card { 
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    overflow: hidden;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}
.hybrid-animation {
    display: inline-block;
    position: relative;
}

.hybrid-animation span {
    display: inline-block;
    animation: 
        fadeScale 2s ease-in-out infinite,
        rotateGlow 3s linear infinite,
        slideWave 4s ease-in-out infinite;
}

.hybrid-animation span:nth-child(2) { animation-delay: 0.2s; }
.hybrid-animation span:nth-child(3) { animation-delay: 0.4s; }
.hybrid-animation span:nth-child(4) { animation-delay: 0.6s; }
.hybrid-animation span:nth-child(5) { animation-delay: 0.8s; }

@keyframes fadeScale {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
}

@keyframes rotateGlow {
    0% { filter: hue-rotate(0deg) brightness(1); }
    100% { filter: hue-rotate(360deg) brightness(1.5); }
}

@keyframes slideWave {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

`
    },
    

































        

    



};

const letters = document.querySelectorAll('.generative-text span');
letters.forEach(letter => {
    setInterval(() => {
        letter.style.setProperty('--x', `${Math.random() * 20 - 10}px`);
        letter.style.setProperty('--y', `${Math.random() * 20 - 10}px`);
        letter.style.setProperty('--r', `${Math.random() * 10 - 5}deg`);
        letter.style.setProperty('--s', `${Math.random() * 0.4 + 0.8}`);
        letter.style.setProperty('--nx', `${Math.random() * 20 - 10}px`);
        letter.style.setProperty('--ny', `${Math.random() * 20 - 10}px`);
        letter.style.setProperty('--nr', `${Math.random() * 10 - 5}deg`);
        letter.style.setProperty('--ns', `${Math.random() * 0.4 + 0.8}`);
    }, 3000);
});

let x =  document.querySelectorAll('.card');

console.log(x.length);


function showCode(className) {
    const data = cardData[className];
    if (data) {
        document.getElementById('htmlCode').textContent = data.html.trim();
        document.getElementById('cssCode').textContent = data.css.trim();
        const modal = new bootstrap.Modal(document.getElementById('codeModal'));
        modal.show();
    }
}
function showPopup(message, isError = false) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.className = "popup";
    popup.style.backgroundColor = isError ? "#dc3545" : "#28a745"; // Red for errors, green for success

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("fade-out");
        popup.addEventListener("animationend", () => popup.remove());
    }, 3000);
}

function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        showPopup("Code copied to clipboard!");
    }).catch(err => {
        showPopup("Failed to copy code. Please try again!", true);
    });
}

function filterCards() {
    let input = document.getElementById('searchInput').value.toLowerCase(); 
    let cards = document.querySelectorAll('.card');  
    
    cards.forEach(function(card) {
        let title = card.querySelector('h2').textContent.toLowerCase();  
        
        if (title.includes(input)) {  
            card.style.display = "block";  
        } else {
            card.style.display = "none";  
        }
    });
}
