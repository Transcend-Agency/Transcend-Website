import Cursor from "./classes/Cursor"
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Menu from "./components/Menu";
import Preloader from "./components/Preloader"
import Services from "./components/services";
// import ScrollAnimations from "./components/ScrollAnimations";
import ParticleSceneApp from './hero-particle-scene/app';
import Lenis from 'lenis'

window.app = new ParticleSceneApp();
const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

class App {
  constructor() {
    // Add the line below to add the preloader back
    // this.createPreloader()
    this.hero = new Hero()
    this.about = new About()
    this.footer = new Footer()
    this.menu = new Menu()
    this.services = new Services()
    this.onPreloaded()
    // lenis.scrollTo()
    // this.scrollAnimations = new ScrollAnimations()
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  showHero() {
    this.hero.showHero()
  }



  onPreloaded() {
    // Remove these lines below to add preloader
    this.preloader = new Preloader()
    this.preloader.destroy()
    // Remove the lines above to add preloader
    this.showHero()
    window.app.init();
    this.cursor = new Cursor(document.querySelector('.cursor'))
    // this.footer.observerFooter()
    this.footer.showLogoLetters()
    console.log('this has been created')
  }
}

new App()