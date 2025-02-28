import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"


const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-5 border m-4 rounded-lg shadow-lg">
      <Link to="/" className="text-2xl">AI Trip Planner</Link>
      <div className="space-x-3">
        <Link className={buttonVariants({ variant: "default" })} to={"/auth?type=login"}>Login</Link>
        <Link className={buttonVariants({ variant: "outline" }) + " max-sm:hidden"} to={"/auth"}>Sign up</Link>
      </div>
    </div>
  )
}

export default Header