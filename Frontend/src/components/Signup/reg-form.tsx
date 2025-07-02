import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // handle form submission logic here
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email"); // name must match the input’s name/id
    const password = data.get("password");
    const first = data.get("first"); // name must match the input’s name/id
    const last = data.get("last");
    console.log({ first, last, email, password });
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register a new Account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Fill out the details below to create an account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="first">First Name</Label>
          <Input
            id="first"
            name="first"
            type="first"
            placeholder="Jon"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="last">Last Name</Label>
          <Input
            id="last"
            name="last"
            type="last"
            placeholder="Snow"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <img src="/google.svg" alt="Google logo" width={24} height={24} />
          Register with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/pages/Login" className="underline underline-offset-4">
          Login
        </a>
      </div>
    </form>
  );
}
