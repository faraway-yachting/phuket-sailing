"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
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

const WEBHOOK_URL = "https://phpstack-858394-5597469.cloudwaysapps.com/webhook/bc92f5de-31ce-4083-af54-587f0ce18ad7";

const inputClass = "h-11 rounded-lg border border-gray-200 bg-white text-neutral-800 placeholder-gray-400 focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none transition-all duration-200";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Form Submitted Successfully!", {
        description: "Thank you for your inquiry! We'll get back to you soon.",
        duration: 5000,
      });

      form.reset(defaultFormValues);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission Failed", {
        description: "There was an error submitting your form. Please try again or contact us directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#f8fffe]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Left Section - Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg shadow-[#164e63]/8 border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#164e63] mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-sm">Fill out the details below and we'll get back to you within 24 hours</p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Your Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Smith"
                            {...field}
                            className={inputClass}
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Your Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@email.com"
                            {...field}
                            className={inputClass}
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
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
                                <FormItem className="w-28">
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                                        <SelectValue>
                                          <span className="flex items-center gap-1.5">
                                            <span>{country.flag}</span>
                                            <span className="text-sm font-medium text-gray-600">{selectedCode}</span>
                                          </span>
                                        </SelectValue>
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="+66">🇹🇭 +66</SelectItem>
                                      <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                      <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                      <SelectItem value="+61">🇦🇺 +61</SelectItem>
                                      <SelectItem value="+65">🇸🇬 +65</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              );
                            }}
                          />
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="612345623"
                              {...field}
                              value={field.value || ""}
                              className={`${inputClass} flex-1`}
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Preferred Channel
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder="Select channel" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Yacht Range
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder="Select range" />
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Yacht Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="crewed-day-charter">Crewed Day Charter</SelectItem>
                            <SelectItem value="catamaran">Catamaran</SelectItem>
                            <SelectItem value="crewed-overnight-charter">Crewed Overnight Charter</SelectItem>
                            <SelectItem value="bareboat-charter">Bareboat Charter</SelectItem>
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Travel Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={field.value || ""}
                            className={inputClass}
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
                        <FormLabel className="text-[#164e63] font-semibold text-sm">
                          Return Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={field.value || ""}
                            className={inputClass}
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
                      <FormLabel className="text-[#164e63] font-semibold text-sm">
                        No. of Guests
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g. 4"
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
                          className={inputClass}
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
                      <FormLabel className="text-[#164e63] font-semibold text-sm">
                        Any other comments or requests?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your dream sailing trip..."
                          className="min-h-[110px] resize-none rounded-lg border border-gray-200 bg-white placeholder-gray-400 focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none transition-all duration-200"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-amber-gradient text-white w-full sm:w-auto sm:px-16 py-3 text-base rounded-xl shadow-lg shadow-[#A0522D]/25 hover:shadow-xl transition-all transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#0a2a35]/20 h-full relative bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63]">

              {/* Content */}
              <div className="relative z-10 p-7 sm:p-8 lg:p-9 flex flex-col h-full">
                {/* Header */}
                <div className="mb-7">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Got Questions?{" "}
                    <span className="text-[#FF8C00]">Let&apos;s Chat!</span>
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Our sailing experts are here to help you plan the perfect charter. Reach out anytime. We typically respond within 24 hours.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#FF8C00] rounded-full mb-7" />

                {/* Contact Cards */}
                <div className="space-y-4 flex-1">
                  {/* Email */}
                  <a
                    href="mailto:info@phuket-sailing.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Email</p>
                      <p className="text-xs text-white/80 group-hover:text-[#14b8a6] transition-colors">
                        info@phuket-sailing.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+66612345623"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#1e5a6d] to-[#164e63] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Call Us</p>
                      <p className="text-xs text-white/80 group-hover:text-[#14b8a6] transition-colors">+66 612345623</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/66612345623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">WhatsApp</p>
                      <p className="text-xs text-white/80 group-hover:text-[#22c55e] transition-colors">+66 612345623</p>
                    </div>
                  </a>

                  {/* Line */}
                  <a
                    href="https://line.me/ti/p/~phuket-sailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#00c300] to-[#00a500] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Line</p>
                      <p className="text-xs text-white/80 group-hover:text-[#00c300] transition-colors">+66 612345623</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-[#A0522D] to-[#FF8C00] rounded-xl flex items-center justify-center shadow-md shadow-black/20">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Our Location</p>
                      <p className="text-xs text-white/80">40/1 Moo 9 Chalong Phuket</p>
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
