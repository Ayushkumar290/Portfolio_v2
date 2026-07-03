import { NavBar } from "../components/NavBar";
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
        {/* Footer */}
        


        </div>
    )
}

export default Home;