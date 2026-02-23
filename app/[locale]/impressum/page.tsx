import Image from "next/image"
import { Building2, MapPin, Phone, Mail, Globe, FileText, Hash, Scale, Anchor } from "lucide-react"

const info = [
  {
    icon: Building2,
    label: "Company Name",
    value: "AWAY CHARTERS GLOBAL PTE. LTD.",
    gradient: "from-[#164e63] to-[#0f3a47]",
  },
  {
    icon: Hash,
    label: "Registration Number",
    value: "202325447D",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: MapPin,
    label: "Registered Address",
    value: "160 Robinson Road, #14-04\nBusiness Federation Center\n068914 Singapore\nSingapore",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+66 61 234 5623",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@phuket-sailing.com",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.phuket-sailing.com",
    gradient: "from-violet-500 to-purple-600",
  },
]

export default function ImpressumPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }}>
      <section
        className="relative overflow-hidden h-72 sm:h-80 md:h-96"
        style={{ background: "linear-gradient(to bottom right, #164e63, #0f3a47, #0a2a35)" }}
      >
        <Image
          src="/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg"
          alt="Phuket Sailing"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/50" />
        <div
          className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #14b8a6, transparent)" }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #FF8C00, transparent)" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Impressum
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Legal Information &amp; Company Details
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">Company Information</h2>
            <p className="text-gray-500">Complete legal and contact information for AWAY CHARTERS GLOBAL PTE. LTD., Singapore</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {info.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-6 ${
                    i < info.length - 1 ? 'border-b border-gray-100' : ''
                  } ${i % 2 === 0 && i < info.length - 1 ? 'md:border-r' : ''}`}
                >
                  <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[#0f172a] whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
