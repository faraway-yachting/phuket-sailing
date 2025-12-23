import { faqSchema } from "@/data/home";

export function FAQSchema() {

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
