import { Link, useNavigate } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"


const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div className="flex justify-between items-center py-3 px-5 border m-4 rounded-lg shadow-lg">
      <Link to="/" className="text-2xl">AI Trip Planner</Link>
      {!token ? (
        <div className="space-x-3">
          <Link className={buttonVariants({ variant: "default" })} to={"/auth?type=login"}>Login</Link>
          <Link className={buttonVariants({ variant: "outline" }) + " max-sm:hidden"} to={"/auth"}>Sign up</Link>
        </div>
      ) : (<div className="space-x-3">
        <Link to="/create-trip" className={buttonVariants({ variant: "default" })+ " max-sm:hidden"}>Create Trip</Link>
        <Link to="/auth" className={buttonVariants({ variant: "outline" }) } onClick={logout}>Logout</Link>
      </div>)}
    </div>
  )
}

export default Header