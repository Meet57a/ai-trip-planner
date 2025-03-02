import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { signUp } from "@/services/auth"
import { toast } from 'react-toastify';


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})


const Auth = () => {
  const location = useLocation();

  type authType = "login" | "signup";

  const [authType, setAuthType] = useState<authType>("login");


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
console.log(values);

    const res = await signUp(values);
    
    if(res.status === 200){
      toast.success(res.msg)
      localStorage.setItem('token', res.token)
    }else{
      toast.error(res.msg)
    }

    // if (res) { }

  }


  // settting the auth type based on the url
  const setAuthTypeByUrl = () => {
    location.search === "?type=login" ? setAuthType("login") : setAuthType("signup")
  }

  useEffect(() => {
    setAuthTypeByUrl()
  }, [location])

  return (
    <div className="mx-auto mt-36 border p-8 rounded-lg shadow-lg max-sm:mx-4 min-[700px]:w-1/3">
      {authType === "login" ? (
        <Form {...form}>
          <div className="text-xl font-bold">
            Sign in
          </div>
          <FormDescription>
            Enter your email below to login to your account
          </FormDescription>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          <div className="text-center mt-3">Don't have an account? <Button variant={"link"} className="p-0 underline" onClick={() => setAuthType("signup")}>Sign Up</Button></div>
        </Form>
      ) : (
        <Form {...form}>
          <div className="text-xl font-bold">
            Sign Up
          </div>
          <FormDescription>
            Enter your email below to login to your account
          </FormDescription>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" onClick={() => onSubmit}>Sign Up</Button>
          </form>
          <div className="text-center mt-3">Already have an account? <Button variant={"link"} className="p-0 underline" onClick={() => setAuthType("login")}>Sign In</Button></div>
        </Form>
      )}
    </div>
  )
}

export default Auth