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
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LocaleLink } from "@/components/shared/LocaleLink";

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
  const { t } = useLanguage();
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
                {t('contactForm.title')}
              </h2>
              <p className="text-gray-500 text-sm">{t('contactForm.subtitle')}</p>
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
                          {t('contactForm.name')} <span className="text-red-500">{t('contactForm.required')}</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contactForm.namePlaceholder')}
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
                          {t('contactForm.email')} <span className="text-red-500">{t('contactForm.required')}</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t('contactForm.emailPlaceholder')}
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
                          {t('contactForm.phone')}
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
                              placeholder={t('contactForm.phonePlaceholder')}
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
                          {t('contactForm.preferredChannel')}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder={t('contactForm.selectChannel')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="whatsapp">{t('contactForm.channels.whatsapp')}</SelectItem>
                            <SelectItem value="email">{t('contactForm.channels.email')}</SelectItem>
                            <SelectItem value="line">{t('contactForm.channels.line')}</SelectItem>
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
                          {t('contactForm.yachtRange')}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder={t('contactForm.selectRange')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="budget">{t('contactForm.ranges.budget')}</SelectItem>
                            <SelectItem value="mid-range">{t('contactForm.ranges.midrange')}</SelectItem>
                            <SelectItem value="luxury">{t('contactForm.ranges.luxury')}</SelectItem>
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
                          {t('contactForm.yachtType')}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                              <SelectValue placeholder={t('contactForm.selectType')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="crewed-day-charter">{t('contactForm.types.crewedDay')}</SelectItem>
                            <SelectItem value="catamaran">{t('contactForm.types.catamaran')}</SelectItem>
                            <SelectItem value="crewed-overnight-charter">{t('contactForm.types.crewedOvernight')}</SelectItem>
                            <SelectItem value="bareboat-charter">{t('contactForm.types.bareboat')}</SelectItem>
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
                          {t('contactForm.travelDate')}
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
                          {t('contactForm.returnDate')}
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
                        {t('contactForm.guests')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={t('contactForm.guestsPlaceholder')}
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
                        {t('contactForm.comments')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contactForm.commentsPlaceholder')}
                          className="min-h-[110px] resize-none rounded-lg border border-gray-200 bg-white placeholder-gray-400 focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none transition-all duration-200"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Terms & Conditions */}
                <p className="text-center text-sm text-gray-600">
                  By submitting this form, you agree to our{' '}
                  <LocaleLink href="/terms-and-conditions" className="text-[#164e63] hover:text-[#14b8a6] underline underline-offset-2 font-medium">
                    Terms & Conditions
                  </LocaleLink>
                </p>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-amber-gradient text-white w-full sm:w-auto sm:px-16 py-3 text-base rounded-xl shadow-lg shadow-[#A0522D]/25 hover:shadow-xl transition-all transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? t('contactForm.submitting') : t('contactForm.submit')}
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
                    {t('contactForm.sidebarTitle')}{" "}
                    <span className="text-[#FF8C00]">{t('contactForm.sidebarTitleHighlight')}</span>
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t('contactForm.sidebarDescription')}
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
                      <p className="font-semibold text-white text-sm">{t('contactForm.contactMethods.email')}</p>
                      <p className="text-xs text-white/80 group-hover:text-[#14b8a6] transition-colors">
                        info@phuket-sailing.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A0522D] to-[#FF8C00] rounded-xl flex items-center justify-center shadow-md shadow-black/20">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t('contactForm.contactMethods.location')}</p>
                      <p className="text-xs text-white/80">160 Robinson Road, #14-04 Singapore</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+66612345623"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#1e5a6d] to-[#164e63] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t('contactForm.contactMethods.call')}</p>
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
                      <p className="font-semibold text-white text-sm">{t('contactForm.contactMethods.whatsapp')}</p>
                      <p className="text-xs text-white/80 group-hover:text-[#22c55e] transition-colors">+66 612345623</p>
                    </div>
                  </a>

                  {/* Line */}
                  <a
                    href="https://line.me/ti/p/IF91DcUiYa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-[#00c300] to-[#00a500] rounded-xl flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t('contactForm.contactMethods.line')}</p>
                      <p className="text-xs text-white/80 group-hover:text-[#00c300] transition-colors">+66 612345623</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
