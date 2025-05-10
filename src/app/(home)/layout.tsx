import { Footer } from "@/components/organism/footer"
import { Navbar } from "./Navbar"
const Homelayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
            {children}
        </div>
        <Footer/>
    </div>
}
export default Homelayout