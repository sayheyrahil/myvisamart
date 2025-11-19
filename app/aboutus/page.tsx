"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";

interface MetricItemProps {
  number: string;
  description: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ number, description }) => {
  return (
    <div className="flex flex-col gap-5 items-start w-[264px] max-sm:items-center max-sm:w-full max-sm:text-center">
      <div className="flex flex-col gap-3 items-start w-full">
        <div className="w-full text-6xl font-semibold tracking-tighter text-sky-700 leading-[72px] max-sm:text-5xl max-sm:tracking-tighter max-sm:leading-[56px]">
          {number}
        </div>
        <p className="w-full text-lg font-medium leading-7 text-gray-900 max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center flex-[1_0_0]">
      <div className="flex relative justify-center items-center p-0 w-12 h-12 rounded-3xl bg-slate-300">
        {icon}
      </div>
      <div className="flex flex-col gap-2 items-center w-full">
        <h3 className="w-full text-xl font-medium leading-8 text-center text-black max-sm:text-lg max-sm:leading-7">
          {title}
        </h3>
        <p className="w-full text-base leading-6 text-center text-gray-600 max-sm:text-sm max-sm:leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

const CompanyLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative h-12 max-sm:scale-[0.8]">
      {children}
    </div>
  );
};

const HeaderSection: React.FC = () => {
  return (
    <header className="flex flex-col gap-16 items-center px-0 py-24 w-full max-sm:px-0 max-sm:py-16">
      <div className="flex flex-col gap-8 items-center px-8 py-0 w-full max-w-screen-xl max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex flex-col gap-6 items-center w-full max-w-[960px]">
          <div className="flex flex-col gap-1 items-start w-full">
            <p className="w-full text-lg font-semibold leading-7 text-center text-sky-700 max-sm:text-base max-sm:leading-6">
              About us
            </p>
            <h1 className="w-full text-5xl font-semibold tracking-tighter text-center text-black leading-[60px] max-md:text-4xl max-md:tracking-tighter max-md:leading-10 max-sm:text-3xl max-sm:tracking-tight max-sm:leading-9">
              About the Visamart
            </h1>
          </div>
          <p className="w-full max-w-screen-md text-lg leading-7 text-center text-zinc-600 max-sm:text-base max-sm:leading-6">
            Learn more about the company and the team behind it.
          </p>
        </div>
      </div>
    </header>
  );
};

const MetricsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-16 items-center px-0 py-24 w-full bg-white max-sm:px-0 max-sm:py-16">
      <div className="flex gap-24 items-center px-8 py-0 w-full max-w-screen-xl max-md:flex-col max-md:gap-12 max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <img
          src="./aboutUs.png"
          alt=""
          className="object-cover flex-[1_0_0] h-[560px] rounded-[80px_0] max-md:w-full max-md:h-[400px] max-sm:h-[300px] max-sm:rounded-[40px_0]"
        />
        <div className="flex flex-col gap-16 items-start flex-[1_0_0] max-md:items-center max-md:text-center">
          <div className="flex flex-col gap-1 items-start w-full max-md:items-center">
            <p className="w-full text-lg font-semibold leading-7 text-sky-700 max-md:text-center max-sm:text-base max-sm:leading-6">
              We've helped hundreds of companies
            </p>
            <h2 className="w-full text-5xl font-semibold tracking-tighter text-black leading-[60px] max-md:text-4xl max-md:tracking-tighter max-md:leading-10 max-md:text-center max-sm:text-3xl max-sm:tracking-tight max-sm:leading-9">
              We're only just getting started on our journey
            </h2>
          </div>
          <div className="flex flex-col gap-12 items-start w-full max-sm:gap-8">
            <div className="flex gap-8 items-start w-full max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:gap-6">
              <MetricItem number="400+" description="Projects completed" />
              <MetricItem number="600%" description="Return on investment" />
            </div>
            <div className="flex gap-8 items-start w-full max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:gap-6">
              <MetricItem number="10k" description="Global downloads" />
              <MetricItem number="200+" description="5-star reviews" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProofSection: React.FC = () => {
  return (
    <section className="flex justify-center items-start px-0 py-24 w-full max-sm:px-0 max-sm:py-16">
      <div className="flex flex-col gap-16 items-center px-8 py-0 w-full max-w-screen-xl max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex flex-col gap-6 items-center w-full max-w-[960px]">
          <div className="flex flex-col gap-1 items-start w-full">
            <p className="w-full text-lg font-semibold leading-7 text-center text-sky-700 max-sm:text-base max-sm:leading-6">
              Trusted by businesses like yours
            </p>
            <h2 className="w-full text-5xl font-semibold tracking-tighter text-center text-black leading-[60px] max-md:text-4xl max-md:tracking-tighter max-md:leading-10 max-sm:text-3xl max-sm:tracking-tight max-sm:leading-9">
              See why we're the best in the business
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center w-full max-w-screen-md">
          <div className="flex gap-8 items-start w-full max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:gap-6">
            <CompanyLogo>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a8e4e6f7e6a4b3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8?width=200"
                alt="Company Logo"
                className="object-contain h-full"
              />
            </CompanyLogo>
            <CompanyLogo>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a8e4e6f7e6a4b3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8?width=200"
                alt="Company Logo"
                className="object-contain h-full"
              />
            </CompanyLogo>
            <CompanyLogo>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a8e4e6f7e6a4b3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8f3e8?width=200"
                alt="Company Logo"
                className="object-contain h-full"
              />
            </CompanyLogo>
          </div>
        </div>
      </div>
    </section>
  );
};

const DividerSection: React.FC = () => {
  return (
    <div className="flex justify-center items-start w-full bg-white">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"I1332:55034;1624:462458\" layer-name=\"Container\" width=\"1280\" height=\"1\" viewBox=\"0 0 1280 1\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider-line\" style=\"width: 100%; max-width: 1280px; height: 1px; padding: 0 32px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1248 1H32V0H1248V1Z\" fill=\"#E9EAEB\"></path> </svg>",
          }}
        />
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <img src="./feature/team1.png" alt="Care about our team" className="w-full h-full" />
      ),
      title: "Care about our team",
      description: "Understand what matters to our employees. Give them what they need to do their best work.",
    },
    {
      icon: (
        <img src="./feature/Featuredicon.png" alt="Be excellent to each other" className="w-full h-full" />
      ),
      title: "Be excellent to each other",
      description: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
    },
    {
      icon: (
        <img src="./feature/Featuredcon.png" alt="Pride in what we do" className="w-full h-full" />
      ),
      title: "Pride in what we do",
      description: "Value quality and integrity in everything we do. At all times. No exceptions.",
    },
    {
      icon: (
        <img src="./feature/smile.png" alt="Don't the customer" className="w-full h-full" />
      ),
      title: "Don't the customer",
      description: "Understand customers' stated and unstated needs. Make them wildly successful.",
    },
    {
      icon: (
        <img src="./feature/imposssible.png" alt="Do the impossible" className="w-full h-full" />
      ),
      title: "Do the impossible",
      description: "Be energized by difficult problems. Revel in unknowns. Ask \"Why?\", but always question, \"Why not?\"",
    },
    {
      icon: (
        <img src="./feature/sweat.png" alt="Sweat the small stuff" className="w-full h-full" />
      ),
      title: "Sweat the small stuff",
      description: "We believe the best products come from the best attention to detail. Sweat the small stuff.",
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-center px-0 py-24 w-full bg-white max-sm:px-0 max-sm:py-16">
      <div className="flex flex-col gap-8 items-center px-8 py-0 w-full max-w-screen-xl max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex flex-col gap-5 items-center w-full max-w-screen-md">
          <div className="flex flex-col gap-1 items-start w-full">
            <p className="w-full text-lg font-semibold leading-7 text-center text-sky-700 max-sm:text-base max-sm:leading-6">
              Our values
            </p>
            <h2 className="w-full text-5xl font-semibold tracking-tighter text-center text-black leading-[60px] max-md:text-4xl max-md:tracking-tighter max-md:leading-10 max-sm:text-3xl max-sm:tracking-tight max-sm:leading-9">
              How we work at Visamart
            </h2>
          </div>
          <p className="w-full text-lg leading-7 text-center text-zinc-600 max-sm:text-base max-sm:leading-6">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 items-start px-8 py-0 w-full max-w-screen-xl max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="grid grid-cols-3 gap-8 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function AboutUs() {
  return (
    <main className="flex flex-col items-center w-full bg-slate-50">
      <HeaderSection />
      <MetricsSection />
      <SocialProofSection />
      <DividerSection />
      <FeaturesSection />
    </main>
  );
}

export default function Page() {
  return (
    <MasterPage title="About Us">
      <AboutUs />
    </MasterPage>
  );
}
