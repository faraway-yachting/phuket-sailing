"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/shared/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { Mail, Phone, MessageCircle, MessageSquare, MapPin } from "lucide-react";
import Image from "next/image";

const countryCodes = {
  "+66": { flag: "🇹🇭", name: "Thailand" },
  "+1": { flag: "🇺🇸", name: "USA" },
  "+44": { flag: "🇬🇧", name: "UK" },
  "+61": { flag: "🇦🇺", name: "Australia" },
  "+65": { flag: "🇸🇬", name: "Singapore" },
} as const;

const defaultFormValues: ContactFormValues = {
  name: "",
  email: "",
  phoneCountryCode: "+66",
  phoneNumber: "",
  preferredChannel: "",
  yachtRange: "",
  yachtType: "",
  travelDate: "",
  returnDate: "",
  numberOfGuests: undefined,
  comments: "",
};

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    // TODO: Handle form submission (e.g., send to API)
    alert("Thank you for your inquiry! We'll get back to you soon.");
    form.reset(defaultFormValues);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Get In Touch
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Your Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Your Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone Number and Preferred Channel Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Phone Number
                        </FormLabel>
                        <div className="flex gap-2">
                          <FormField
                            control={form.control}
                            name="phoneCountryCode"
                            render={({ field }) => {
                              const selectedCode = field.value || "+66";
                              const country = countryCodes[selectedCode as keyof typeof countryCodes] || countryCodes["+66"];
                              
                              return (
                                <FormItem className="w-32">
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="h-11">
                                        <SelectValue>
                                          <span className="flex items-center gap-2">
                                            <span>{country.flag}</span>
                                            <span>{selectedCode}</span>
                                          </span>
                                        </SelectValue>
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="+66">
                                        🇹🇭 +66 (Thailand)
                                      </SelectItem>
                                      <SelectItem value="+1">🇺🇸 +1 (USA)</SelectItem>
                                      <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                                      <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                                      <SelectItem value="+65">🇸🇬 +65 (Singapore)</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              );
                            }}
                          />
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            {...field}
                            value={field.value || ""}
                            className="h-11 flex-1"
                          />
                        </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredChannel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Preferred Communication Channel
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select Channel" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="email">Mail</SelectItem>
                            <SelectItem value="line">Line</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Yacht Range and Yacht Type Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="yachtRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Yacht Range
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select Yacht Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="budget">Budget</SelectItem>
                            <SelectItem value="mid-range">Midrange</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="yachtType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Select Yacht Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select Yacht Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="crewed-day-charter">
                              Crewed Day Charter
                            </SelectItem>
                            <SelectItem value="catamaran">Catamaran</SelectItem>
                            <SelectItem value="crewed-overnight-charter">
                              Crewed Overnight Charter
                            </SelectItem>
                            <SelectItem value="bareboat-charter">
                              Bareboat Charter
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Travel Date and Return Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="travelDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Travel Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={field.value || ""}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="returnDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          Return Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={field.value || ""}
                            className="h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Number of Guests */}
                <FormField
                  control={form.control}
                  name="numberOfGuests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">
                        No. of Guests
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Number of Guests"
                          value={field.value ?? ""}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value
                                ? parseInt(e.target.value)
                                : undefined
                            )
                          }
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Comments */}
                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">
                        Any other comments or requests?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your requirements..."
                          className="min-h-[120px] resize-none"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-sky-700 to-blue-800 hover:from-sky-800 hover:to-blue-900 text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Got Questions?{" "}
                  <span className="text-orange-500">Let&apos;s Chat!</span>
                </h3>
                <p className="text-lg text-slate-700 mb-4 font-medium">
                  Want help planning your adventure?
                </p>
                <p className="text-base text-slate-600 mb-8 leading-relaxed">
                  Fill out the form and one of our friendly experts will get
                  back to you soon!
                </p>

                <div className="space-y-5">
                  {/* Email */}
                  <a
                    href="mailto:booking@faraway-yachting.com"
                    className="flex items-center gap-4 text-slate-700 hover:text-sky-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <Mail className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">
                        booking@faraway-yachting.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+66612345623"
                    className="flex items-center gap-4 text-slate-700 hover:text-sky-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <Phone className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Call us</p>
                      <p className="text-sm text-slate-600">+66 612345623</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/66612345623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-700 hover:text-green-600 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Whatsapp</p>
                      <p className="text-sm text-slate-600">+66 612345623</p>
                    </div>
                  </a>

                  {/* Line */}
                  <a
                    href="https://line.me/ti/p/~phuket-sailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-700 hover:text-green-500 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <MessageSquare className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Line</p>
                      <p className="text-sm text-slate-600">+66 612345623</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <MapPin className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Our Location
                      </p>
                      <p className="text-sm text-slate-600">
                        40/1 Moo 9 Chalong Phuket
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

