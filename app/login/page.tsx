import { authenticate } from "../lib/actions";
import LoginForm from "../ui/login/login-form";

export default function LoginPage() {
    return <LoginForm actionFn={authenticate} />
}