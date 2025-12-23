import { Card } from "@/components/shared/ui/card";
import { audiences } from "@/data/home";

export function WhoItsFor() {

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-5">
            Who Phuket Sailing is perfect for
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We serve everyone: families, couples, corporate teams, adventure seekers, solo travelers, and special occasions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all bg-white border-2 border-sky-100 hover:border-sky-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sky-900 mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{audience.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
