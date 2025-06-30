import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex align-middle justify-center">
      <SignIn routing="hash"></SignIn>
    </div>
  );
}
