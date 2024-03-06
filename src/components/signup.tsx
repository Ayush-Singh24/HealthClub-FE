"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MAX_UPLOAD_SIZE, Professions } from "@/utils/constants";
const signUpSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(5, { message: "Username must be 5 or more characters long" })
      .max(20, { message: "Username must be 20 or fewer characters long" }),
    firstName: z
      .string({ required_error: "First name is required" })
      .min(1, { message: "First name must be 5 or more characters long" })
      .max(20, { message: "First name must be 20 or fewer characters long" }),
    lastName: z
      .string({ required_error: "Last name is required" })
      .min(0, { message: "Last name must be 5 or more characters long" })
      .max(20, { message: "Last name must be 20 or fewer characters long" }),
    email: z
      .string({ required_error: "Last name is required" })
      .email({ message: "Invalid email address" }),
    phonenumber: z
      .string({ required_error: "Phone number is required" })
      .length(10, { message: "Invalid phone number" }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(5, { message: "Password must be 5 or more characters long" })
      .max(30, "Password must be 30 or fewer characters long"),
    profession: z.string({
      required_error: "Professtion is required",
    }),
    passwordConfirm: z.string(),
    document: z.instanceof(File).refine((file) => {
      !file || file.size <= MAX_UPLOAD_SIZE;
    }, "Document must be less than 5MB"),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Password do not match.",
      path: ["passwordConfirm"],
    }
  );

export default function SignUp() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const onSubmit = (value: z.infer<typeof signUpSchema>) => {
    console.log(value);
  };
  return (
    <div className="h-full w-full flex">
      <div className="w-1/3 h-full bg-green-500 hidden md:flex">
        <img src="/images/pattern.jpg" className="object-fit" />
      </div>
      <div className="w-full md:w-2/3 bg-rose-100 dark:bg-sdColor p-5 overflow-y-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 flex flex-col justify-center items-center px-5"
          >
            <div className="flex flex-col md:flex-row w-full gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Email linked with your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>
                      Set a password for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your password."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Re-Enter your password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter phone number"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormDescription>
                      Won't be displayed publicly.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-2xl md:text-base">
                      Profession
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            className="placeholder-green-500"
                            placeholder="Select a profession"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="z-[4000]">
                        {Professions.map((profession) => {
                          return (
                            <SelectItem key={profession} value={profession}>
                              {profession}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormDescription>Re-Enter your password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
