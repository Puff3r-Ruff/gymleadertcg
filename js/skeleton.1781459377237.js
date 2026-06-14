

// -------------------------
// SKELETON LAYOUTS
// -------------------------
const skeletons = {
  heroes: [
    { id: "Bright", html: `
    <section class="hero" style="--hero-img: url('{{heroImage}}');">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <button>{{button}}</button>
  </div>
</section>

<style>
/* --- Base Hero --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hero-img) center/cover no-repeat;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* --- Overlay for readability --- */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.35)
  );
  z-index: 1;
}

/* --- Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 20px;
}

.hero-content h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
}

.hero-content p {
  font-size: clamp(1rem, 2vw, 1.4rem);
  margin-bottom: 25px;
  opacity: 0.95;
}

/* --- Button --- */
.hero-content button {
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: #ffffff;
  color: #000;
  cursor: pointer;
  transition: 0.25s ease;
}

.hero-content button:hover {
  background: #f1f1f1;
  transform: translateY(-2px);
}

/* --- Responsive Tweaks --- */
@media (max-width: 600px) {
  .hero {
    min-height: 60vh;
  }
  .hero-content button {
    width: 100%;
  }
}
</style>

    `},

    { id: "Luxury", html: `
      <section class="hero" style="--hero-img: url('{{heroImage}}');">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <button>{{button}}</button>
  </div>
</section>

<style>
/* --- Hero Base --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hero-img) center/cover no-repeat;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* --- Overlay --- */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(2px);
  z-index: 1;
}

/* --- Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
  padding: 20px;
}

/* --- NEW TEXT STYLE --- */
.hero-content h1 {
  font-family: "Poppins", "Segoe UI", sans-serif;
  font-weight: 800;
  letter-spacing: -1px;
  font-size: clamp(2.4rem, 5vw, 4rem);
  margin-bottom: 18px;
  line-height: 1.15;
  text-transform: uppercase;
  animation: fadeUp 0.8s ease-out forwards;
}

.hero-content p {
  font-family: "Inter", sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.9;
  margin-bottom: 28px;
  animation: fadeUp 1.1s ease-out forwards;
}

/* --- Button --- */
.hero-content button {
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 50px;
  background: rgba(255,255,255,0.15);
  color: #fff;
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: 0.3s ease;
}

.hero-content button:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-3px);
}

/* --- Animation --- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Mobile Tweaks --- */
@media (max-width: 600px) {
  .hero {
    min-height: 60vh;
  }
  .hero-content button {
    width: 100%;
  }
}
</style>

    `},

    { id: "Elegant", html: `
      <section class="hero" style="--hero-img: url('{{heroImage}}');">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <button>{{button}}</button>
  </div>
</section>

<style>
/* --- Hero Base --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hero-img) center/cover no-repeat;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* --- Overlay --- */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0,0,0,0.65),
    rgba(0,0,0,0.35)
  );
  z-index: 1;
}

/* --- Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
}

/* --- NEW TEXT STYLE (SERIF + CINEMATIC) --- */
.hero-content h1 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  letter-spacing: 0.5px;
  margin-bottom: 18px;
  line-height: 1.15;
  text-shadow: 0 4px 18px rgba(0,0,0,0.45);
  opacity: 0;
  animation: fadeSlide 1s ease-out forwards;
}

.hero-content p {
  font-family: "Inter", sans-serif;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 300;
  letter-spacing: 0.4px;
  opacity: 0.85;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
  opacity: 0;
  animation: fadeSlide 1.3s ease-out forwards;
}

/* --- Button --- */
.hero-content button {
  padding: 14px 42px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background: #ffffff;
  color: #000;
  cursor: pointer;
  transition: 0.3s ease;
}

.hero-content button:hover {
  background: #f1f1f1;
  transform: translateY(-3px);
}

/* --- Animation --- */
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Mobile Tweaks --- */
@media (max-width: 600px) {
  .hero {
    min-height: 60vh;
  }
  .hero-content button {
    width: 100%;
  }
}
</style>

    `},

    { id: "DarkTheme", html: `
      <section class="hero" style="--hero-img: url('{{heroImage}}');">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <button>{{button}}</button>
  </div>
</section>

<style>
/* --- Hero Base --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hero-img) center/cover no-repeat;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* --- Overlay --- */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 1;
}

/* --- Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  padding: 20px;
}

/* --- NEW TEXT STYLE (GEOMETRIC / TECH) --- */
.hero-content h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: clamp(2.4rem, 5vw, 4rem);
  letter-spacing: -0.5px;
  text-transform: none;
  margin-bottom: 16px;
  line-height: 1.1;
  opacity: 0;
  animation: rise 0.9s ease-out forwards;
}

.hero-content p {
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 300;
  letter-spacing: 0.3px;
  opacity: 0.85;
  margin-bottom: 28px;
  opacity: 0;
  animation: rise 1.2s ease-out forwards;
}

/* --- Button --- */
.hero-content button {
  padding: 14px 38px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.hero-content button:hover {
  background: #fff;
  color: #000;
  transform: translateY(-3px);
}

/* --- Animation --- */
@keyframes rise {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Mobile Tweaks --- */
@media (max-width: 600px) {
  .hero {
    min-height: 60vh;
  }
  .hero-content button {
    width: 100%;
  }
}
</style>

    `},

    { id: "FunTheme", html: 
    `<section class="hero" style="--hero-img: url('{{heroImage}}');">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
    <button>{{button}}</button>
  </div>
</section>

<style>
/* --- Hero Base --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--hero-img) center/cover no-repeat;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* --- Overlay --- */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(3px);
  z-index: 1;
}

/* --- Content --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  padding: 20px;
}

/* --- NEW TEXT STYLE (SOFT / ROUNDED / DREAMY) --- */
.hero-content h1 {
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  letter-spacing: 0.2px;
  margin-bottom: 14px;
  line-height: 1.15;
  text-shadow: 0 0 18px rgba(255,255,255,0.35);
  opacity: 0;
  animation: floatIn 1s ease-out forwards;
}

.hero-content p {
  font-family: "Nunito", sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 300;
  letter-spacing: 0.4px;
  opacity: 0.9;
  margin-bottom: 26px;
  text-shadow: 0 0 12px rgba(255,255,255,0.25);
  opacity: 0;
  animation: floatIn 1.3s ease-out forwards;
}

/* --- Button --- */
.hero-content button {
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  background: rgba(255,255,255,0.9);
  color: #000;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 20px rgba(255,255,255,0.25);
}

.hero-content button:hover {
  background: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 26px rgba(255,255,255,0.35);
}

/* --- Animation --- */
@keyframes floatIn {
  from { opacity: 0; transform: translateY(25px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* --- Mobile Tweaks --- */
@media (max-width: 600px) {
  .hero {
    min-height: 60vh;
  }
  .hero-content button {
    width: 100%;
  }
}
</style>
`}
  ],

  content_blocks: [
    { id: "contentA", html: 
      `
 <div id="contentABody">

<section class="imageText">

  <!-- Feature 1 -->
  <div class="feature1">
    
    <!-- Image fills leftover space -->
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature1_img }}" 
        alt="{{ feature1_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>

    <!-- Text -->
    <h3>
      {{ feature1_title }}
    </h3>
    <p>
      {{ feature1_text }}
    </p>
  </div>

  <!-- Feature 2 -->
  <div class="feature2">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature2_img }}" 
        alt="{{ feature2_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature2_title }}
    </h3>
    <p>
      {{ feature2_text }}
    </p>
  </div>

  <!-- Feature 3 -->
  <div class="feature3">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature3_img }}" 
        alt="{{ feature3_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature3_title }}
    </h3>
    <p>
      {{ feature3_text }}
    </p>
  </div>

  <!-- Feature 4 -->
  <div class="feature4">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature4_img }}" 
        alt="{{ feature4_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature4_title }}
    </h3>
    <p>
      {{ feature4_text }}
    </p>
  </div>

</section>

<style>

  #contentABody {
    width: 1000px;
    margin: auto;
    height: 1010px; /* 2 cards stacked = 500px */
    overflow: hidden;
  }

  .imageText{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .imageText h3{font-size:2rem;margin:0px;margin-top:0.5rem;}
  .imageText p{font-size:1.2rem;margin:0px;margin-top:0.2rem;}

  .feature1{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature2{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature3{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature4{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 1024px) {
    section[style] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 600px) {
    #contentAbody section[style] img {
      height: 100% !important;
    }

    #contentABody {
    width: 90%;
    margin: auto;
    height: 620px; /* 2 cards stacked = 500px */
    overflow: hidden;
  }

  .imageText h3{font-size:1rem;margin:0px;margin-top:0.5rem;}
  .imageText p{font-size:0.77rem;margin:0px;margin-top:0.2rem;}

    .feature1{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature2{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature3{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .feature4{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  }
</style>

</div>
` },

    { id: "contentB", html: 
      `
  <div id="contentABody">

<section class="imageText">

  <!-- Feature 1 -->
  <div class="feature1">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature1_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 2 -->
  <div class="feature2">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature2_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 3 -->
  <div class="feature3">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature3_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 4 -->
  <div class="feature4">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature4_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

</section>

<style>

  #contentABody {
    width: 95%;
    margin: auto;
    overflow: hidden;
  }

  .imageText{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
        background:#000;
  }
#contentABody{height:1000px;}
  .feature1,
  .feature2,
  .feature3,
  .feature4 {
    height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
        #contentAbody {
      height: 1010px !important;
    }

  @media (max-width: 1024px) {
    section[style] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 600px) {
    #contentABody {
      width: 95%;
      margin: auto;
      height: 620px;
      overflow: hidden;
    }

    .feature1,
    .feature2,
    .feature3,
    .feature4 {
      height: 310px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

</style>

</div>
     
` },

      { id: "contentC", html: 
      `
<section class="image-text-section">
  <div class="image-wrap">
    <img src="{{ feature4_img }}" alt="Description of image">
  </div>

  <div class="text-wrap">
    <h3>{{ body_title }}</h3>
    <p>
      {{body_subtitle}}
    </p>
  </div>
</section>

<section class="image-text-section reverse">
  <div class="image-wrap">
    <img src="{{ feature3_img }}" alt="Description of image">
  </div>

  <div class="text-wrap">
    <h3>{{ body_title }}</h3>
    <p>
      {{body_subtitle}}
    </p>
  </div>
</section>

<style>
.image-text-section {
  width: 90%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto 0px auto;
  height: 500px;
}

.image-text-section.reverse {
  flex-direction: row-reverse;
}

.image-wrap img {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;
}

.text-wrap {
  flex: 1;
  width: 50%;
        padding:1rem;
}

        .text-wrap p{font-size:1.4rem;}

.text-wrap h3 {
  font-size: 2.5rem;
}

/* REMOVE the mobile stacking */
@media (max-width: 600px) {
  .image-text-section {
    height:310px;
  }

        .image-wrap img {
  width: 100%;
  height: 310px;
  border-radius: 8px;
  object-fit: cover;
}
        .text-wrap {
  flex: 1;
  width: 50%;
        padding:0rem;
}
        .text-wrap p {
  padding-bottom:2rem;
        font-size:1rem;
}

}
</style>



      ` },

      { id: "contentD", html: 
      `
<div id="emailBody">

<div style="width:100%; display:flex; justify-content:center;">
  <div class="emailSection">
    
    <h2 style="color:#333; margin-bottom:10px;">Join Our Mailing List</h2>
    <p style="color:#666; font-size:14px; margin-bottom:20px;">
      Subscribe to receive updates, news, and exclusive offers.
    </p>

    <form style="width:70%;margin:auto;">
      <input type="email" placeholder="Enter your email" required
        style="
          width:100%;
          padding:12px;
          border:1px solid #ccc;
          border-radius:6px;
          font-size:14px;
          margin-bottom:15px;
        ">

      <button type="submit"
        style="
          width:100%;
          padding:12px;
          background:#0078ff;
          color:white;
          border:none;
          border-radius:6px;
          font-size:16px;
          cursor:pointer;
        "
        onmouseover="this.style.background='#005fcc'"
        onmouseout="this.style.background='#0078ff'">
        Subscribe
      </button>
    </form>

    <p style="font-size:12px; color:#999; margin-top:15px;">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</div>

</div>

<style>
        .emailSection{
        width:60%;
      padding:25px;
      border:1px solid #ddd;
      border-radius:10px;
      font-family:Arial, sans-serif;
      box-shadow:0 4px 12px rgba(0,0,0,0.08);
      text-align:center;
      background:#fff;
        }
  #emailBody {
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  @media (max-width: 600px) {
    #emailBody {
      height:320px;
      display:flex;
      justify-content:center;
      align-items:center;
    }

        .emailSection{
        width:95%;
      padding:25px;
      border:1px solid #ddd;
      border-radius:10px;
      font-family:Arial, sans-serif;
      box-shadow:0 4px 12px rgba(0,0,0,0.08);
      text-align:center;
      background:#fff;
        }
  }
</style>
      ` },
  ],

  galleries: [
  { 
    id: "galleryA",html: `
<div id="emailBody">

<div style="width:100%; display:flex; justify-content:center;">
  <div class="emailSection">
    
    <h2 style="color:#333; margin-bottom:10px;">Join Our Mailing List</h2>
    <p style="color:#666; font-size:14px; margin-bottom:20px;">
      Subscribe to receive updates, news, and exclusive offers.
    </p>

    <form style="width:70%;margin:auto;">
      <input type="email" placeholder="Enter your email" required
        style="
          width:100%;
          padding:12px;
          border:1px solid #ccc;
          border-radius:6px;
          font-size:14px;
          margin-bottom:15px;
        ">

      <button type="submit"
        style="
          width:100%;
          padding:12px;
          background:#0078ff;
          color:white;
          border:none;
          border-radius:6px;
          font-size:16px;
          cursor:pointer;
        "
        onmouseover="this.style.background='#005fcc'"
        onmouseout="this.style.background='#0078ff'">
        Subscribe
      </button>
    </form>

    <p style="font-size:12px; color:#999; margin-top:15px;">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</div>

</div>

<style>
        .emailSection{
        width:60%;
      padding:25px;
      border:1px solid #ddd;
      border-radius:10px;
      font-family:Arial, sans-serif;
      box-shadow:0 4px 12px rgba(0,0,0,0.08);
      text-align:center;
      background:#fff;
        }
  #emailBody {
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  @media (max-width: 600px) {
    #emailBody {
      height:320px;
      display:flex;
      justify-content:center;
      align-items:center;
    }

        .emailSection{
        width:95%;
      padding:25px;
      border:1px solid #ddd;
      border-radius:10px;
      font-family:Arial, sans-serif;
      box-shadow:0 4px 12px rgba(0,0,0,0.08);
      text-align:center;
      background:#fff;
        }
  }
</style>
    `
  },
  { 
    id: "galleryB",html: `
  <section class="image-text-section">
  <div class="image-wrap">
    <img src="{{ feature4_img }}" alt="Description of image">
  </div>

  <div class="text-wrap">
    <h3>{{ body_title }}</h3>
    <p>
      {{body_subtitle}}
    </p>
  </div>
</section>

<section class="image-text-section reverse">
  <div class="image-wrap">
    <img src="{{ feature3_img }}" alt="Description of image">
  </div>

  <div class="text-wrap">
    <h3>{{ body_title }}</h3>
    <p>
      {{body_subtitle}}
    </p>
  </div>
</section>

<style>
.image-text-section {
  width: 90%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto 0px auto;
  height: 500px;
}

.image-text-section.reverse {
  flex-direction: row-reverse;
}

.image-wrap img {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;
}

.text-wrap {
  flex: 1;
  width: 50%;
        padding:1rem;
}

        .text-wrap p{font-size:1.4rem;}

.text-wrap h3 {
  font-size: 2.5rem;
}

/* REMOVE the mobile stacking */
@media (max-width: 600px) {
  .image-text-section {
    height:310px;
  }

        .image-wrap img {
  width: 100%;
  height: 310px;
  border-radius: 8px;
  object-fit: cover;
}
        .text-wrap {
  flex: 1;
  width: 50%;
        padding:0rem;
}
        .text-wrap p {
  padding-bottom:2rem;
        font-size:1rem;
}

}
</style>

    
    `
  },

{ id: "gallerieC", html: 
      `
        <div id="gallerABody">

<section class="gallerText">

  <!-- Feature 1 -->
  <div class="galler1">
    
    <!-- Image fills leftover space -->
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature1_img }}" 
        alt="{{ feature1_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>

    <!-- Text -->
    <h3>
      {{ feature1_title }}
    </h3>
    <p>
      {{ feature1_text }}
    </p>
  </div>

  <!-- Feature 2 -->
  <div class="galler2">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature2_img }}" 
        alt="{{ feature2_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature2_title }}
    </h3>
    <p>
      {{ feature2_text }}
    </p>
  </div>

  <!-- Feature 3 -->
  <div class="galler3">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature3_img }}" 
        alt="{{ feature3_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature3_title }}
    </h3>
    <p>
      {{ feature3_text }}
    </p>
  </div>

  <!-- Feature 4 -->
  <div class="galler4">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature4_img }}" 
        alt="{{ feature4_title }}"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        "
      >
    </div>
    <h3>
      {{ feature4_title }}
    </h3>
    <p>
      {{ feature4_text }}
    </p>
  </div>

</section>

<style>

  #gallerABody {
    width: 1000px;
    margin: auto;
    height: 1010px; /* 2 cards stacked = 500px */
    overflow: hidden;
  }

  .gallerText{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .gallerText h3{font-size:2rem;margin:0px;margin-top:0.5rem;}
  .gallerText p{font-size:1.2rem;margin:0px;margin-top:0.2rem;}

  .galler1{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler2{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler3{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler4{
        height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 1024px) {
    section[style] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 600px) {
    #gallerAbody section[style] img {
      height: 100% !important;
    }

    #gallerABody {
    width: 90%;
    margin: auto;
    height: 620px; /* 2 cards stacked = 500px */
    overflow: hidden;
  }

  .gallerText h3{font-size:1rem;margin:0px;margin-top:0.5rem;}
  .gallerText p{font-size:0.77rem;margin:0px;margin-top:0.2rem;}

    .galler1{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler2{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler3{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }     
  .galler4{
        height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  }
</style>

</div>
` },

    { id: "gallerieD", html: 
      `
<div id="contentBBody">

<section class="gallText">

  <!-- Feature 1 -->
  <div class="gall1">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature1_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 2 -->
  <div class="gall2">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature2_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 3 -->
  <div class="gall3">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature3_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

  <!-- Feature 4 -->
  <div class="gall4">
    <div style="flex: 1; min-height: 0;">
      <img 
        src="{{ feature4_img }}" 
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        "
      >
    </div>
  </div>

</section>

<style>

  #contentBBody {
    width: 95%;
    margin: auto;
    overflow: hidden;
  }

  .gallText{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
        background:#000;
  }
#contentBBody{
height:1000px;}
  .gall1,
  .gall2,
  .gall3,
  .gall4 {
    height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
        #contentBbody {
      height: 1010px !important;
    }

  @media (max-width: 1024px) {
    section[style] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 600px) {
    #contentBBody {
      width: 95%;
      margin: auto;
      height: 620px;
      overflow: hidden;
    }

    .gall1,
  .gall2,
  .gall3,
  .gall4 {
      height: 310px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

</style>

</div>

` },
],


  footers: [
    { id: "footerA", html: "" }
  ]
};

// -------------------------
// INDUSTRY CONTENT
// -------------------------
const industries = {
  florist: {
  heroImage: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  title: "Luxury Floral Design",
  subtitle: "Hand-crafted arrangements for weddings & events",
  button: "Shop Flowers",

  /* BODY SECTION */
  body_title: "Our Floral Services",
  body_subtitle: "Elegant, bespoke floral creations designed to elevate every moment.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  split_title: "Bespoke Floral Artistry",
  split_text: "From intimate bouquets to full-scale event installations, our florists craft each arrangement with precision, passion, and a deep love for natural beauty.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Wedding Florals",
  feature1_text: "Bridal bouquets, ceremony arches, centerpieces.",

  feature2_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Event Styling",
  feature2_text: "Corporate events, private parties, and luxury gatherings.",

  feature3_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Seasonal Bouquets",
  feature3_text: "Hand-picked seasonal blooms for any occasion.",

  feature4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Seasonal Bouquets",
  feature4_text: "Hand-picked seasonal blooms for any occasion.",

  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Florist Co."
},



  dog_grooming: {
  heroImage: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1170&auto=format&fit=crop",
  title: "Premium Pet Grooming",
  subtitle: "Gentle care for happy pets",
  button: "Book Appointment",

  /* BODY SECTION */
  body_title: "Our Grooming Services",
  body_subtitle: "Professional, gentle grooming designed to keep your pets healthy, clean, and comfortable.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1558944351-c6c14054356d?q=80&w=1170&auto=format&fit=crop",
  split_title: "Gentle Care, Happy Pets",
  split_text: "Our certified groomers provide stress‑free grooming sessions tailored to your pet’s needs — from full grooming packages to simple touch‑ups.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Full Grooming",
  feature1_text: "Bathing, coat trimming, brushing, and styling for all breeds and coat types.",

  feature2_img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Nail & Paw Care",
  feature2_text: "Safe nail trimming, paw pad cleaning, and gentle paw conditioning treatments.",

  feature3_img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Bath & Blow‑Dry",
  feature3_text: "Deep cleansing baths with premium shampoos, followed by a soft blow‑dry.",

  feature4_img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Bath & Blow‑Dry",
  feature4_text: "Deep cleansing baths with premium shampoos, followed by a soft blow‑dry.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Grooming Co."
},

 restaurant: {
  heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop",
  title: "Modern Dining Experience",
  subtitle: "Fresh ingredients, bold flavours, unforgettable moments",
  button: "View Menu",

  /* BODY SECTION */
  body_title: "Our Signature Dishes",
  body_subtitle: "A curated menu inspired by seasonal produce, global flavours, and modern culinary craft.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1170&auto=format&fit=crop",
  split_title: "Crafted With Passion",
  split_text: "Our chefs blend contemporary techniques with authentic flavours to create dishes that are vibrant, balanced, and unforgettable.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Seasonal Plates",
  feature1_text: "Fresh, local ingredients transformed into beautifully plated dishes that celebrate the season.",

  feature2_img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Chef’s Specials",
  feature2_text: "Rotating signature creations showcasing bold flavours and innovative culinary ideas.",

  feature3_img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Artisan Desserts",
  feature3_text: "Hand-crafted desserts that balance sweetness, texture, and artistry in every bite.",

  feature4_img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Artisan Desserts",
  feature4_text: "Hand-crafted desserts that balance sweetness, texture, and artistry in every bite.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Restaurant Co."
}
,

  barber: {
  heroImage: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1170&auto=format&fit=crop",
  title: "Classic & Modern Cuts",
  subtitle: "Precision grooming for the modern gentleman",
  button: "Book a Cut",

  /* BODY SECTION */
  body_title: "Our Barber Services",
  body_subtitle: "Expert cuts, beard shaping, and traditional grooming crafted with precision and style.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1170&auto=format&fit=crop",
  split_title: "Craftsmanship Meets Style",
  split_text: "Our barbers combine classic techniques with modern trends to deliver sharp cuts, clean fades, and perfectly sculpted beards tailored to your look.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Precision Haircuts",
  feature1_text: "Classic cuts, modern fades, and tailored styles designed to suit your face shape and lifestyle.",

  feature2_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Beard Grooming",
  feature2_text: "Beard trims, shaping, conditioning, and full grooming treatments for a polished look.",

  feature3_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Hot Towel Shaves",
  feature3_text: "Relaxing traditional straight‑razor shaves with hot towels and premium oils.",

  feature4_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Hot Towel Shaves",
  feature4_text: "Relaxing traditional straight‑razor shaves with hot towels and premium oils.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Barber Co."
}
,

 fitness: {
  heroImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1169&auto=format&fit=crop",
  title: "Transform Your Body",
  subtitle: "Strength, conditioning, and personal coaching",
  button: "Join Today",

  /* BODY SECTION */
  body_title: "Training Programs",
  body_subtitle: "Customized fitness plans, expert coaching, and dynamic classes built for every level.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1170&auto=format&fit=crop",
  split_title: "Stronger Every Day",
  split_text: "Our certified trainers create personalized programs designed to build strength, improve endurance, and help you reach your goals with confidence.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Personal Training",
  feature1_text: "One‑on‑one coaching tailored to your goals, fitness level, and training style.",

  feature2_img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Group Classes",
  feature2_text: "High‑energy classes including HIIT, strength circuits, mobility, and conditioning.",

  feature3_img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Custom Plans",
  feature3_text: "Tailored fitness programs designed to help you progress safely and effectively.",

  feature4_img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Custom Plans",
  feature4_text: "Tailored fitness programs designed to help you progress safely and effectively.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Fitness Co."
}
,

  photography: {
  heroImage: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop",
  title: "Capture Every Moment",
  subtitle: "Professional photography for events, portraits & brands",
  button: "View Portfolio",

  /* BODY SECTION */
  body_title: "Photography Services",
  body_subtitle: "Timeless imagery crafted with creativity, precision, and a passion for storytelling.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop",
  split_title: "Art Through the Lens",
  split_text: "From intimate portraits to large‑scale commercial shoots, we capture authentic moments with a blend of artistry, technique, and emotion.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Weddings & Events",
  feature1_text: "Candid, emotional storytelling that preserves your most meaningful celebrations.",

  feature2_img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Portrait Sessions",
  feature2_text: "Professional portraits for individuals, families, creatives, and personal branding.",

  feature3_img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Commercial Shoots",
  feature3_text: "High‑quality imagery for brands, products, advertising, and digital campaigns.",

  feature4_img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Commercial Shoots",
  feature4_text: "High‑quality imagery for brands, products, advertising, and digital campaigns.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Photography Co."
}
,

 salon: {
  heroImage: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1170&auto=format&fit=crop",
  title: "Luxury Beauty Salon",
  subtitle: "Hair, makeup & beauty treatments for modern women",
  button: "Book Appointment",

  /* BODY SECTION */
  body_title: "Our Beauty Services",
  body_subtitle: "Premium hair styling, makeup artistry, skincare, and pampering treatments designed to help you look and feel your best.",

  /* SPLIT SECTION */
  body_main_image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  split_title: "Beauty, Redefined",
  split_text: "Our expert stylists and beauty specialists deliver personalized treatments using high‑end products and modern techniques for flawless, confidence‑boosting results.",

  /* FEATURE GRID */
  feature1_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature1_title: "Hair Styling",
  feature1_text: "Precision cuts, blowouts, colouring, and styling tailored to your unique look.",

  feature2_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature2_title: "Makeup Artistry",
  feature2_text: "Professional makeup for weddings, events, photoshoots, and everyday glam.",

  feature3_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature3_title: "Skincare & Beauty",
  feature3_text: "Facials, brow shaping, lash treatments, and relaxing beauty therapies.",

  feature4_img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1170&auto=format&fit=crop",
  feature4_title: "Skincare & Beauty",
  feature4_text: "Facials, brow shaping, lash treatments, and relaxing beauty therapies.",


  /* ⭐ GALLERY IMAGES */
  gallerie1_img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop",
  gallerie2_img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
  gallerie3_img: "https://images.unsplash.com/photo-1531058240690-006c446962d8?q=80&w=1170&auto=format&fit=crop",
  gallerie4_img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1170&auto=format&fit=crop",

  /* FOOTER */
  footer_text: "© 2026 Beauty Salon Co."
}

};