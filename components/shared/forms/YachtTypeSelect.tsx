/**
 * YachtTypeSelect - Standardized yacht type selector
 * Consolidates yacht type options across forms
 */

"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/ui/select";
import { YACHT_TYPES } from "@/lib/constants";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface YachtTypeSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

export function YachtTypeSelect<T extends FieldValues>({
  control,
  name,
  label = "Yacht Type",
  required = false,
  placeholder = "Select yacht type",
}: YachtTypeSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[#164e63] font-semibold text-sm">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value as string}>
            <FormControl>
              <SelectTrigger className="h-11 rounded-lg border border-gray-200 bg-white focus:border-[#164e63] focus:ring-2 focus:ring-[#164e63]/20 focus:outline-none">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {YACHT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
