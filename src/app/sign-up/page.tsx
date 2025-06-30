import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex align-middle justify-center py-8">
      <SignUp routing="hash"></SignUp>
    </div>
  );
}
