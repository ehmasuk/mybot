import { Navbar } from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <Navbar />
      <div className="container py-10">
        <div className="max-w-md mx-auto">
          <p className="text-2xl mb-5">Register</p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
