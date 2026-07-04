import { AboutSection} from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle"

function Home (){
    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Background Effect*/}
        <StarBackground/>
  
        {/* NavBar */}
        <NavBar/>

        {/* Main Content */}
        <main>

            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </main>

        {/* Footer */}
        


        </div>
    )
}

export default Home;