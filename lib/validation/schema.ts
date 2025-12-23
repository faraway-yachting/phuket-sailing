import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup.string().required("Your name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Your email is required"),
  phoneCountryCode: yup.string().default("+66"),
  phoneNumber: yup.string(),
  preferredChannel: yup.string(),
  yachtRange: yup.string(),
  yachtType: yup.string(),
  travelDate: yup.string(),
  returnDate: yup.string(),
  numberOfGuests: yup
    .number()
    .typeError("Please enter a valid number")
    .min(1, "At least 1 guest is required")
    .nullable(),
  comments: yup.string(),
});

export type ContactFormValues = yup.InferType<typeof contactFormSchema>;

