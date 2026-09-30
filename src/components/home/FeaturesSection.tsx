import React from "react";
import { Users, Clock, Briefcase, Award, MessageSquare, ShieldCheck } from "lucide-react";
import { SparkleStar, GeometricAsterisk } from "@/components/ui/DecorativeElements";

const FEATURES = [
  {
    icon: Users,
    title: "World-Class Mentors",
    description: "Learn directly from senior practitioners working at Google, Stripe, Figma, and Netflix with weekly 1-on-1 office hours.",
    badge: "1-on-1 Guidance",
  },
  {
    icon: Briefcase,
    title: "Production-Grade Projects",
    description: "No toy code or hello-world scripts. Build real, scalable applications and comprehensive design systems ready for production.",
    badge: "Portfolio Ready",
  },
  {
    icon: Clock,
    title: "Flexible Lifetime Access",
    description: "Study at your own pace with unlimited lifetime access to all lectures, downloadable source code, and future course updates.",
    badge: "Self-Paced",
  },
  {
    icon: Award,
    title: "Industry-Verified Certificates",
    description: "Earn verifiable digital credentials and shareable certifications that showcase your verified competencies to top recruiters.",
    badge: "Accredited",
  },
  {
    icon: MessageSquare,
    title: "Active Builder Community",
    description: "Connect with 50,000+ ambitious learners, share code reviews, participate in weekend hackathons, and find study buddies.",
    badge: "24/7 Community",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description: "Try any course risk-free for 14 days. If it does not exceed your expectations, get an instant full refund with no hassle.",
    badge: "Risk-Free",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 right-10 opacity-10 pointer-events-none">
        <GeometricAsterisk className="w-32 h-32 text-[#0D50E8]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#0D50E8]">
            <SparkleStar className="w-3.5 h-3.5 text-[#0D50E8]" />
            Why Choose ByteSpace
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Learners Who Want Real Career Results
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We removed the fluff from traditional online education. Experience high-impact, career-accelerating education built around real execution.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[#0D50E8]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] group-hover:bg-[#CEFF00] text-[#0D50E8] group-hover:text-[#0B0F19] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0D50E8] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#0D50E8] transition-colors">
                  <span>Explore learning path</span>
                  <span className="ml-1 font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
