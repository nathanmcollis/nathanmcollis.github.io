/*
  Nathan Collis portfolio
  -----------------------
  The site is a single-page viewer. Edit the `projects` array below to change
  client names, project labels, descriptions, images, or their display widths.

  Navigation:
  - left side  = previous project
  - centre     = next image/page (then next project at the end of a project)
  - right side = next project
  - left/right keyboard arrows also work
*/

const placeholderDescription =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

const projects = [
  {
    client: "TRAN UY DUC / RELAXIN RECORDS",
    type: "CD DESIGN",
    description: 'Artwork and design for Vietnamese experimental artist Tran Uy Duc, on their latest release ‘Byshh.',
    slides: [
      { kind: "image", src: "assets/1-byshh-cover.webp", width: "66.79vw", alt: "Relaxin Records / Tran Uy Duc CD cover" },
      { kind: "image", src: "assets/2-byshh-inner.webp", width: "57.99vw", alt: "Relaxin Records / Tran Uy Duc CD inner artwork" }
    ]
  },
  {
    client: "SOPHIE ZAMEL",
    type: "WEB & ECOMMERCE",
    description: 'Webshop for contemporary fine jewellery designer Sophie Zamel. The website was designed with an editorial focus to give the effect of a physical catalogue.',
    slides: [
      { kind: "image", src: "assets/3-SZ-website-page1.webp", width: "80.56vw", alt: "Sophie Zamel ecommerce website home page" },
      { kind: "image", src: "assets/4-SZ-website-page.webp", width: "80.61vw", alt: "Sophie Zamel ecommerce website product page" }
    ]
  },
  {
    client: "ANTIGONE YANNOULIDIS",
    type: "BOOK DESIGN / LAYOUT",
    description: 'Layout and design for Antigone Yannoulidis’ book ‘Little Lull’. This book explores the sub-kink space of the protagonist Little Lull. We emphasized tactility by hand binding and iron brandishing each book.',
    slides: [
      { kind: "image", src: "assets/5-littlelull.webp", width: "37.35vw", alt: "Little Lull's Playroom book cover" },
      { kind: "image", src: "assets/6-littlelull.webp", width: "34.81vw", alt: "Little Lull's Playroom book spines" },
      { kind: "image", src: "assets/7-Little-lull.webp", width: "66.18vw", alt: "Little Lull's Playroom book spread" },
      { kind: "image", src: "assets/8-littlelulllaunch-1350x1080-4.webp", width: "30.72vw", alt: "Little Lull's Playroom launch invitation" }
    ]
  },
  {
    client: "SE DESAISSIR PUBLISHING",
    type: "LP DESIGN",
    description: 'Logo type / album artwork designed for se Desaissir. Publishing They had the idea to use a typewriter as a knitting mechanism to create images using inidivual letters.',
    slides: [
      { kind: "image", src: "assets/9-SDP-sweater.webp", width: "47.31vw", alt: "Se Desaissir Publishing LP artwork" }
    ]
  },
  {
    client: "WET KISS",
    type: "LP DESIGN",
    description: 'Artwork and layout for Wet Kiss  on ‘Thus Spoke The Broken Chanteuse’ created with custom kisses on each LP.',
    slides: [
      { kind: "image", src: "assets/10-bren.webp", width: "63.19vw", alt: "Wet Kiss LP design" }
    ]
  },
  {
    client: "ABSORB x LIQUID ARCHITECTURE",
    type: "POSTER DESIGN",
    description: 'Illustration and design to accompany the launch of ‘Disaster 1’ by Bodies of Divine, Infinite and Eternal Spirit,  which was perfomed by 46 members of the choir. This event was hosted by Liquid Architecture in collaboration with Absorb at Church of All Nations on June 6th 2026.',
    slides: [
      { kind: "image", src: "assets/11-LAxAbsorb-double poster.webp", width: "64.86vw", alt: "Absorb x Liquid Architecture double poster" }
    ]
  },
  {
    client: "NEW READER",
    type: "LAYOUT / EDITING",
    description: 'Assisted with the preparation of books scans for the library of New Reader, in interview with Juan Alvears on his influences.',
    slides: [
      { kind: "image", src: "assets/12-newreader-layout.webp", width: "70.29vw", alt: "New Reader layout" }
    ]
  },
  {
    client: "FENG-MEI HEBERER",
    type: "POSTER DESIGN",
    description: 'Commissioned poster series for ETA - a film festival curated by Feng-Mei Heberer in collaboration with Saigon Experimental. This event played on themes of the airport as a place of exchange for experimental cinema across the world. ',
    slides: [
      { kind: "image", src: "assets/13-ETA.webp", width: "38.30vw", alt: "Feng-Mei Heberer poster" },
      { kind: "image", src: "assets/14-ETA.webp", width: "39.16vw", alt: "Feng-Mei Heberer poster installed on an aircraft" }
    ]
  },
  {
    client: "BOYFRIEND TV",
    type: "CD DESIGN",
    description: 'Boyfriend TV’s first release ‘For The Teenage Soul’ - cover image by Tim Hardy. The brothers bedroom was the brief for this design.',
    slides: [
      { kind: "image", src: "assets/15-BFTV.webp", width: "55.05vw", alt: "Boyfriend TV CD front" },
      { kind: "image", src: "assets/16-BFTV.webp", width: "55.09vw", alt: "Boyfriend TV CD back" }
    ]
  },
  {
    client: "SE DESSAISIR PUBLISHING",
    type: "POSTER DESIGN",
    description: 'Poster for se Dessaisir Publishings event at Miscellania - this took notes from design by Kenneth Brown for the Wednesday Play on BBC in 1964.',
    slides: [
      { kind: "image", src: "assets/17-SDS-misc.webp", width: "39.15vw", alt: "Se Dessaisir Publishing poster design" }
    ]
  },
  {
    client: "BODIES",
    type: "LP DESIGN",
    description: '‘Disaster 1’ by Bodies of Divine, Infinite and Eternal Spirit. This album references the formation of the 46 members of the choir that sang on the record.',
    slides: [
      { kind: "image", src: "assets/18-disaster1.webp", width: "48.17vw", alt: "Bodies LP design — record" },
      { kind: "image", src: "assets/19-disaster1.webp", width: "68.29vw", alt: "Bodies LP design — sleeve and record" },
      { kind: "image", src: "assets/20-disaster1.webp", width: "72.24vw", alt: "Bodies LP design — gatefold and record" }
    ]
  },
  {
    client: "GUSTAV KEMPS",
    type: "CASSETTE DESIGN",
    description: 'Design and layout for Gustav Kemps, ‘Lonesome for a Storm’ released on Motion Ward. Cover image by Justus de Rode.',
    slides: [
      { kind: "image", src: "assets/21-GKEMPS-casette.webp", width: "34.32vw", alt: "Gustav Kemps cassette design" }
    ]
  },
  {
    client: "LAVURN",
    type: "LP DESIGN",
    description: 'Design and layout for Lavurns ‘Baby It Cold Outside’ released on Motion Ward.',
    slides: [
      { kind: "image", src: "assets/22-lavurn-cover.webp", width: "47.84vw", alt: "Lavurn LP design" }
    ]
  },
  {
    client: "SE DESAISSIR PUBLISHING",
    type: "POSTER DESIGN",
    description: 'Huerco S Poster for se Dessaisir Publishing',
    slides: [
      { kind: "image", src: "assets/23-SDS2-.webp", width: "38.69vw", alt: "Se Desaissir Publishing poster" }
    ]
  },
  {
    client: "SAIGON COMMUNITY RADIO",
    type: "TICKET DESIGN",
    description: 'Hand perforated tickets to the Ssaigon Community Radio Event ‘Tap 2: Episode 2’, showcasing Vietnamese musicians and artists and those residing in Vietnam. The event was hosted at Static Open in 2023.',
    slides: [
      { kind: "image", src: "assets/24-Saigon Community Radio.webp", width: "41.46vw", alt: "Saigon Community Radio ticket design" }
    ]
  },
  {
    client: "BABS + HENRY",
    type: "WEB DESIGN / CODING",
    description: 'Wedding invitation for Henry + Babs',
    slides: [
      {
        kind: "phone-video",
        phone: "assets/babs-henry/phone.png",
        video: "assets/babs-henry/henry-babs.mp4",
        width: "21.15vw",
        alt: "Babs + Henry wedding website shown inside a phone"
      }
    ]
  },
  {
    client: "ELVIS",
    type: "LP DESIGN",
    description: 'Artwork for Elvis’ ‘One Less Dead’, each LP with a custom unique tie dye cover.',
    slides: [
      { kind: "image", src: "assets/26-ONE LESS DEATH-ELVIS.webp", width: "45.67vw", alt: "Elvis LP design" }
    ]
  },
  {
    client: "SAIGON COMMUNITY RADIO",
    type: "ANIMATION / SFX",
    description: 'Special effects and animation for Saigon Community Radio’s TV show ‘Tap:Episode’.',
    slides: [
      { kind: "image", src: "assets/27.webp", width: "55.14vw", alt: "Saigon Community Radio animation and SFX work" }
    ]
  },
  {
    client: "MUBI",
    type: "CREATIVE DIRECTION",
    description: 'Creative direction for a photoshoot with Layla Jones for Mubi’s promotional campaign ‘Something Different’.',
    slides: [
      { kind: "image", src: "assets/28.webp", width: "34.09vw", alt: "MUBI creative direction" }
    ]
  },
  {
    client: "BOYFRIEND TV",
    type: "POSTER DESIGN",
    description: 'Poster for the single launch of ‘P*rnstar of the World’ from Boyfriend TV',
    slides: [
      { kind: "image", src: "assets/29.webp", width: "35.92vw", alt: "Boyfriend TV poster design" }
    ]
  },
  {
    client: "BOYFRIEND TV",
    type: "LP DESIGN",
    description: 'LP artwork and design for Fawning by Boyfriend TV. Original image by Mira Pedlar.',
    slides: [
      { kind: "image", src: "assets/30.webp", width: "49.36vw", alt: "Boyfriend TV LP design" }
    ]
  }
];

const clientName = document.getElementById("clientName");
const projectType = document.getElementById("projectType");
const projectDescription = document.getElementById("projectDescription");
const mediaStage = document.getElementById("mediaStage");

let projectIndex = 0;
let slideIndex = 0;

function wrap(value, length) {
  return (value + length) % length;
}

function setFromHash() {
  const match = window.location.hash.match(/^#(\d+)(?:\/(\d+))?$/);
  if (!match) return;

  const requestedProject = Number(match[1]) - 1;
  const requestedSlide = Number(match[2] || 1) - 1;

  if (projects[requestedProject]) {
    projectIndex = requestedProject;
    slideIndex = Math.min(
      Math.max(requestedSlide, 0),
      projects[projectIndex].slides.length - 1
    );
  }
}

function updateHash() {
  const hash = `#${projectIndex + 1}/${slideIndex + 1}`;
  history.replaceState(null, "", hash);
}

function stopCurrentMedia() {
  /*
    Stop any video that belongs to the page we're leaving.
    This makes sure the Babs + Henry animation only runs
    while that particular page is visible.
  */
  const videos = mediaStage.querySelectorAll("video");

  videos.forEach((video) => {
    video.pause();
    video.removeAttribute("src");
    video.load();
  });
}

function buildMedia(slide) {
  stopCurrentMedia();
  mediaStage.replaceChildren();

  /* --------------------------------------------------------
     BABS + HENRY PHONE / VIDEO
     -------------------------------------------------------- */

if (slide.kind === "phone-video") {
  const wrapper = document.createElement("div");
  wrapper.className = "phone-composite";
  wrapper.style.setProperty("--slide-width", slide.width);
  wrapper.setAttribute("role", "img");
  wrapper.setAttribute(
    "aria-label",
    slide.alt || "Website shown inside a phone"
  );

  const screen = document.createElement("div");
  screen.className = "phone-screen";

  const video = document.createElement("video");
  video.src = slide.video;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.controls = false;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  video.tabIndex = -1;

  video.setAttribute("autoplay", "");
  video.setAttribute("loop", "");
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("aria-hidden", "true");
  video.setAttribute(
    "controlslist",
    "nodownload nofullscreen noremoteplayback noplaybackrate"
  );

  const phone = document.createElement("img");
  phone.src = slide.phone;
  phone.alt = "";
  phone.draggable = false;

  screen.appendChild(video);
  wrapper.append(screen, phone);
  mediaStage.append(wrapper);

video.addEventListener(
  "loadeddata",
  () => {
    video.classList.add("video-ready");

    video.play().catch(() => {});
  },
  { once: true }
);
  return;
}

  /* --------------------------------------------------------
     NORMAL PORTFOLIO IMAGE
     -------------------------------------------------------- */

  const img = document.createElement("img");

  img.className = "portfolio-media";
  img.src = slide.src;
  img.alt = slide.alt || "Portfolio image";
  img.draggable = false;
  img.decoding = "async";

  img.style.setProperty(
    "--slide-width",
    slide.width || "auto"
  );

  mediaStage.append(img);
}


/* ----------------------------------------------------------
   DISPLAY CURRENT PAGE
   ---------------------------------------------------------- */

function render() {
  const project = projects[projectIndex];
  const slide = project.slides[slideIndex];

  clientName.textContent = project.client;
  projectType.textContent = project.type;
  projectDescription.textContent = project.description;

  document.title = `Nathan Collis — ${project.client}`;

  buildMedia(slide);

  updateHash();
  preloadNext();
}


/* ----------------------------------------------------------
   FORWARD-ONLY NAVIGATION
   ---------------------------------------------------------- */

function nextSlide() {
  const currentProject = projects[projectIndex];

  /*
    If the project contains another image, move to it.
  */
  if (slideIndex < currentProject.slides.length - 1) {
    slideIndex += 1;
  }

  /*
    Otherwise move to the first slide of the next project.
  */
  else {
    projectIndex += 1;
    slideIndex = 0;

    /*
      If we've reached the end of the entire portfolio,
      return to the very beginning.
    */
    if (projectIndex >= projects.length) {
      projectIndex = 0;
      slideIndex = 0;
    }
  }

  render();
}

function previousSlide() {
  /*
    If there is an earlier image within the current project,
    go back to it.
  */
  if (slideIndex > 0) {
    slideIndex -= 1;
  }

  /*
    Otherwise go to the previous project and show
    its final image.
  */
  else {
    projectIndex -= 1;

    /*
      If we're already at the very beginning,
      loop around to the final project.
    */
    if (projectIndex < 0) {
      projectIndex = projects.length - 1;
    }

    slideIndex = projects[projectIndex].slides.length - 1;
  }

  render();
}


/* ----------------------------------------------------------
   PRELOAD THE NEXT IMAGE
   Makes navigation feel immediate.
   ---------------------------------------------------------- */

function preloadNext() {
  let nextProjectIndex = projectIndex;
  let nextSlideIndex = slideIndex + 1;

  if (
    nextSlideIndex >=
    projects[nextProjectIndex].slides.length
  ) {
    nextProjectIndex += 1;
    nextSlideIndex = 0;

    if (nextProjectIndex >= projects.length) {
      nextProjectIndex = 0;
    }
  }

  const next =
    projects[nextProjectIndex].slides[nextSlideIndex];

  if (next.kind === "image") {
    const image = new Image();
    image.decoding = "async";
    image.src = next.src;
  } else if (next.kind === "phone-video") {
    // Warm the browser cache before the phone/video page appears.
    const phoneImage = new Image();
    phoneImage.src = next.phone;
    fetch(next.video, { cache: "force-cache" }).catch(() => {});
  }
}


/* ----------------------------------------------------------
   CLICK ANYWHERE = NEXT PAGE
   ---------------------------------------------------------- */

document
  .getElementById("portfolio")
  .addEventListener("click", () => {
    nextSlide();
  });


/* ----------------------------------------------------------
   KEYBOARD ACCESS

   Enter or space also moves forward.
   There is deliberately NO left-arrow / back navigation.
   ---------------------------------------------------------- */

document.addEventListener("keydown", (event) => {

  /* RIGHT ARROW = NEXT PAGE */
  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextSlide();
  }

  /* LEFT ARROW = PREVIOUS PAGE */
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousSlide();
  }

  /* SPACE / ENTER = NEXT PAGE */
  if (
    event.key === "Enter" ||
    event.key === " "
  ) {
    event.preventDefault();
    nextSlide();
  }

});

/* Disable right-click menu */
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

/* Prevent dragging images/video out of the page */
document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});


/* ----------------------------------------------------------
   URL HASH
   Allows URLs such as:

   #1/1
   #3/2
   #16/1

   But normal on-page interaction remains forward-only.
   ---------------------------------------------------------- */

window.addEventListener("hashchange", () => {
  setFromHash();
  render();
});


/* ----------------------------------------------------------
   START WEBSITE
   ---------------------------------------------------------- */

setFromHash();
render();