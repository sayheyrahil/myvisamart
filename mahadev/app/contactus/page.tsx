"use client";
import React, { useState } from "react";
import MasterPage from "@/components/layouts/master";
import Image from "next/image";

export default function Page() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };


  return (
    <MasterPage title="Contact Us">
      <div className="flex flex-col gap-16 items-center px-0 py-24 w-full max-sm:px-0 max-sm:py-12">
        <div className="flex flex-col gap-8 items-center px-8 py-0 w-full max-w-screen-xl max-sm:px-4 max-sm:py-0">
          <div className="flex flex-col gap-12 items-center w-full">
            <div className="flex flex-col gap-6 items-center w-full max-w-[960px]">
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="w-full text-lg font-semibold leading-7 text-center text-sky-700 max-sm:text-base">
                  Contact Us
                </p>
                <h1 className="w-full text-5xl font-semibold tracking-tighter text-center text-black leading-[60px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
                  We're Here for You
                </h1>
              </div>
              <p className="text-lg leading-7 text-center text-zinc-600 max-sm:text-base">
                Fast, reliable visa services for travel, study, or work -
                handled with care, so you don't have to worry.
              </p>
            </div>
          </div>
        </div>
      </div>

 
      <section className="flex mb-20 justify-between items-start py-2.5 pr-2.5 pl-20 mx-auto my-0 w-full h-[660px] max-w-[1170px] rounded-[40px] top-[-200px] max-md:flex-col max-md:gap-10 max-md:p-10 max-md:h-auto max-md:max-w-[90%] max-sm:p-5 max-sm:mt-0"
        style={{
          // background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%)',
          backgroundImage: 'url("./Frame1321316511.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}>
        <div className="flex flex-col shrink-0 gap-4 items-start pt-20 w-[250px] max-md:w-full max-sm:gap-3">
          <div className="flex flex-col gap-1.5 items-start w-full">
            <div>
              <div className="text-sm leading-5 text-white">Contact Us at</div>
              <div className="text-lg font-medium leading-7 text-white">
                example@gmail.com
              </div>
              <div className="text-lg font-medium leading-7 text-white">
                +919876543210
              </div>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"1332:54819\" layer-name=\"Divider\" width=\"250\" height=\"1\" viewBox=\"0 0 250 1\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider-line\" style=\"height: 1px; width: 100%; fill: #EEE; opacity: 0.24\"> <path opacity=\"0.24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M250 1H0V0H250V1Z\" fill=\"#EEEEEE\"></path> </svg>",
                }}
              />
            </div>
            <div className="flex flex-col gap-1.5 items-start w-[236px]">
              <div className="text-sm leading-5 text-white">Address</div>
              <address className="w-full text-lg font-medium leading-7 text-white not-italic">
                Tempus leo eu aenean sed diam urna tempor
              </address>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"1332:54823\" layer-name=\"Divider\" width=\"250\" height=\"1\" viewBox=\"0 0 250 1\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"divider-line\" style=\"height: 1px; width: 100%; fill: #EEE; opacity: 0.24\"> <path opacity=\"0.24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M250 1H0V0H250V1Z\" fill=\"#EEEEEE\"></path> </svg>",
                }}
              />
            </div>
            <div className="flex flex-col gap-2.5 items-start w-[236px]">
              <div className="text-sm leading-5 text-white">Social Media</div>
              <div className="flex gap-4 items-center">
                <a href="#" aria-label="Facebook">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg id=\"1332:54827\" layer-name=\"Social icon\" data-component-name=\"Social icon\" data-variant-name=\"Platform=Facebook, State=Hover, Style=Gray\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"width: 24px; height: 24px\"> <g clip-path=\"url(#clip0_1332_54827)\"> <path d=\"M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_1332_54827\"> <rect width=\"24\" height=\"24\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                    }}
                  />
                </a>
                <a href="#" aria-label="Twitter" className="flex justify-center items-center w-6 h-6">
                  <div className="shrink-0 w-6 h-6">
                    <div className="shrink-0 w-6 h-6">
                      <div className="shrink-0 w-6 h-6 fill-white" />
                    </div>
                  </div>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg id=\"1332:54836\" layer-name=\"Social icon\" data-component-name=\"Social icon\" data-variant-name=\"Platform=LinkedIn, State=Hover, Style=Gray\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"width: 24px; height: 24px\"> <g clip-path=\"url(#clip0_1332_54836)\"> <path d=\"M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_1332_54836\"> <rect width=\"24\" height=\"24\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                    }}
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg id=\"1332:54837\" layer-name=\"Social icon\" data-component-name=\"Social icon\" data-variant-name=\"Platform=YouTube, State=Hover, Style=Gray\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M23.7609 7.20078C23.7609 7.20078 23.5266 5.54609 22.8047 4.81953C21.8906 3.86328 20.8688 3.85859 20.4 3.80234C17.0438 3.55859 12.0047 3.55859 12.0047 3.55859H11.9953C11.9953 3.55859 6.95625 3.55859 3.6 3.80234C3.13125 3.85859 2.10938 3.86328 1.19531 4.81953C0.473438 5.54609 0.24375 7.20078 0.24375 7.20078C0.24375 7.20078 0 9.14609 0 11.0867V12.9055C0 14.8461 0.239062 16.7914 0.239062 16.7914C0.239062 16.7914 0.473437 18.4461 1.19062 19.1727C2.10469 20.1289 3.30469 20.0961 3.83906 20.1992C5.76094 20.382 12 20.4383 12 20.4383C12 20.4383 17.0438 20.4289 20.4 20.1898C20.8688 20.1336 21.8906 20.1289 22.8047 19.1727C23.5266 18.4461 23.7609 16.7914 23.7609 16.7914C23.7609 16.7914 24 14.8508 24 12.9055V11.0867C24 9.14609 23.7609 7.20078 23.7609 7.20078ZM9.52031 15.1133V8.36797L16.0031 11.7523L9.52031 15.1133Z\" fill=\"white\"></path> </svg>",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center items-start p-8 bg-white backdrop-blur-[5px] rounded-[30px] w-[576px] max-md:w-full max-sm:p-5">
          <form onSubmit={handleSubmit} className="flex flex-col shrink-0 gap-8 items-start w-[512px] max-md:w-full max-sm:gap-5">
            <div className="flex flex-col gap-6 items-start w-full max-sm:gap-4">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col gap-1.5 items-start w-full">
                  <div className="flex flex-col gap-1.5 items-start w-full">
                    <label htmlFor="name" className="text-sm font-medium leading-5 text-neutral-800">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="flex gap-2 items-center px-4 py-5 w-full rounded-lg border border-solid shadow-sm border-slate-300 text-base leading-6 text-neutral-800 placeholder:text-neutral-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col gap-1.5 items-start w-full">
                  <div className="flex flex-col gap-1.5 items-start w-full">
                    <label htmlFor="email" className="text-sm font-medium leading-5 text-neutral-800">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="flex gap-2 items-center px-4 py-5 w-full rounded-lg border border-solid shadow-sm border-slate-300 text-base leading-6 text-neutral-800 placeholder:text-neutral-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col gap-1.5 items-start w-full">
                  <div className="flex flex-col gap-1.5 items-start w-full">
                    <label htmlFor="phone" className="text-sm font-medium leading-5 text-neutral-800">
                      Phone number
                    </label>
                    <div className="flex gap-2 items-center px-4 py-5 w-full h-16 rounded-lg border border-solid shadow-sm border-slate-300">
                      <div className="flex gap-1 justify-center items-center self-stretch py-3 pr-1 pl-0">
                        <div className="text-base leading-6 text-center text-neutral-800 w-[30px]">
                          IN
                        </div>
                        <div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                "<svg id=\"1332:54868\" layer-name=\"chevron-down\" data-component-name=\"chevron-down\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dropdown-chevron\" style=\"width: 20px; height: 20px\"> <path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"#0A509F\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              "<svg id=\"1332:54869\" layer-name=\"Divider\" width=\"1\" height=\"24\" viewBox=\"0 0 1 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"phone-divider\" style=\"width: 1px; align-self: stretch; fill: #BDBDBD\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 24H0V0H1V24Z\" fill=\"#BDBDBD\"></path> </svg>",
                          }}
                        />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="text-base leading-6 flex-[1_0_0] text-neutral-800 placeholder:text-neutral-500 border-none outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full h-[154px]">
                <div className="flex flex-col gap-1.5 items-start w-full flex-[1_0_0]">
                  <div className="flex flex-col gap-1.5 items-start w-full flex-[1_0_0]">
                    <label htmlFor="message" className="text-sm font-medium leading-5 text-neutral-800">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      className="flex gap-2 items-center px-3.5 py-2.5 w-full rounded-lg border border-solid shadow-sm border-slate-300 flex-[1_0_0] text-base leading-6 text-neutral-800 placeholder:text-neutral-500 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
              <button
                type="submit"
                className="flex items-start w-full rounded-lg"
              >
                <div className="flex gap-2 justify-center items-center px-5 py-3 bg-sky-700 rounded-lg border border-sky-700 border-solid shadow-sm flex-[1_0_0] hover:bg-sky-800 transition-colors">
                  <span className="text-base font-semibold leading-6 text-white">
                    Get started
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </MasterPage>
  );
}
