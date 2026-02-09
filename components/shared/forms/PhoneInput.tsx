/**
 * PhoneInput - Reusable phone input with country code selector
 * Consolidates phone input logic from multiple forms
 */

"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/ui/select";
import { COUNTRY_CODES } from "@/lib/constants";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface PhoneInputProps<T extends FieldValues> {
  control: Control<T>;
  countryCodeName: FieldPath<T>;
  phoneNumberName: FieldPath<T>;
  label?: string;
  required?: boolean;
}

export function PhoneInput<T extends FieldValues>({
  control,
  countryCodeName,
  phoneNumberName,
  label = "Phone Number",
  required = false,
}: PhoneInputProps<T>) {
  return (
    <FormField
      control={control}
      name={phoneNumberName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[#164e63] font-semibold text-sm">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <div className="flex gap-2">
            <FormField
              control={control}
              name={countryCodeName}
              render={({ field }) => {
                const selectedCode = (field.value as string) || "+66";
                const country = COUNTRY_CODES[selectedCode as keyof typeof COUNTRY_CODES] || COUNTRY_CODES["+66"];

                return (
                  <FormItem className="w-28">
                    <Select onValueChange={field.onChange} value={field.value as string}>
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
                        {Object.entries(COUNTRY_CODES).map(([code, { flag }]) => (
                          <SelectItem key={code} value={code}>
                            {flag} {code}
                          </SelectItem>
                        ))}
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
                value={(field.value as string) || ""}
                className="h-11 rounded-lg border border-gray-200 bg-white text-neutral-800 placeholder-gray-400 focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none transition-all duration-200 flex-1"
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
