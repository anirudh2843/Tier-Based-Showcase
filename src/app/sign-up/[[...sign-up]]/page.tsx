import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp 
        path="/sign-up"            
        redirectUrl="/events"     
        signInUrl="/sign-in"       
      />
    </div>
  );
}
