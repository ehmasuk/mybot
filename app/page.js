"use client";

import { Button } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";

function HomePage() {
  const { data: session, status } = useSession();

  return (
    <div>
      {/* hero section */}
      {/* hero section */}
      {/* hero section */}
      {/* hero section */}
      {/* hero section */}
      <section className="relative overflow-x-hidden from-slate-500/10 bg-[url(/bg-1.png)] bg-no-repeat bg-cover active" id="home">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
            <div className="text-sm py-20 px-10">
              <span className="inline-flex py-2 text-lg text-black font-medium items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="minus"
                  className="lucide lucide-minus"
                >
                  <path d="M5 12h14" />
                </svg>{" "}
                The Best Online Furniture Store
              </span>
              <h1 className="md:text-6xl/tight text-4xl text-dark tracking-normal leading-normal font-bold mb-4 mt-6">
                The Best Selection of <span className="text-primary"> Furniture Online </span>
              </h1>
              <p className="text-base font-medium text-muted leading-7 mt-5 capitalize">
                Online furniture apps simplify home shopping with convenience, variety, and affordability. Browse easily, compare prices.
              </p>
              <Button>
                <Link href={`/user/${session?.user?.id}`}>Profile</Link>
              </Button>
            </div>
            <div className="mt-4 pt-2 sm:mt-0 sm:pt-0 relative">
              <img src="/furniture.png" alt className="h-[600px] max-w-full mx-auto" />
              <div className="absolute bottom-3/4 -end-14 2xl:end-8 hidden xl:block">
                <div className="flex items-center gap-2 p-2 pe-6 rounded-full bg-white shadow-2xl">
                  <div className="rounded-full bg-primary h-9 w-9 items-center justify-center flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="codesandbox"
                      className="lucide lucide-codesandbox h-6 w-6 text-white"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                      <polyline points="7.5 19.79 7.5 14.6 3 12" />
                      <polyline points="21 12 16.5 14.6 16.5 19.79" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1={12} x2={12} y1="22.08" y2={12} />
                    </svg>
                  </div>
                  <div className>
                    <h6 className="text-base font-medium text-default-900">Express Delivery Service</h6>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-28 start-6 hidden xl:block">
                <div className="flex items-center gap-2 p-2 pe-6 rounded-full bg-white shadow-2xl">
                  <div className="rounded-full bg-primary h-9 w-9 items-center justify-center flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="headset"
                      className="lucide lucide-headset h-6 w-6 text-white"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                  </div>
                  <div className>
                    <h6 className="text-base font-medium text-default-900">24x7 Customer Support</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section  */}
      {/* services section  */}
      {/* services section  */}
      {/* services section  */}
      {/* services section  */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">Services</span>
            <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">Build a customer - centric marketing strategy</h2>
            <p className="text-base font-medium mt-4 text-muted">Ligula risus auctor tempus magna feugit lacinia.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 md:gap-y-12 lg:gap-y-24 md:pt-20 pt-12">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="bar-chart-big"
                    className="lucide lucide-bar-chart-big h-10 w-10 text-primary"
                  >
                    <path d="M3 3v18h18" />
                    <rect width={4} height={7} x={7} y={10} rx={1} />
                    <rect width={4} height={12} x={15} y={5} rx={1} />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Digital Marketing</h1>
              <p className="text-base text-gray-600 mt-2">Benchmark your performance against competitors, identify strengths.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="codepen"
                    className="lucide lucide-codepen h-10 w-10 text-primary"
                  >
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    <line x1={12} x2={12} y1={22} y2="15.5" />
                    <polyline points="22 8.5 12 15.5 2 8.5" />
                    <polyline points="2 15.5 12 8.5 22 15.5" />
                    <line x1={12} x2={12} y1={2} y2="8.5" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">SEO Services</h1>
              <p className="text-base text-gray-600 mt-2">Anticipate market shifts and emerging trends to stay ahead of the curve.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="shield"
                    className="lucide lucide-shield h-10 w-10 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Market Research</h1>
              <p className="text-base text-gray-600 mt-2">Our market research services are designed to provide maximum value.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="rocket"
                    className="lucide lucide-rocket h-10 w-10 text-primary"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Software Development</h1>
              <p className="text-base text-gray-600 mt-2">We go beyond data collection to provide actionable insights.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="layers-2"
                    className="lucide lucide-layers-2 h-10 w-10 text-primary"
                  >
                    <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
                    <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Affiliate Marketing</h1>
              <p className="text-base text-gray-600 mt-2">We understand that every business is unique. Thats why we offer.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="items-center justify-center flex bg-primary/10 rounded-[49%_80%_40%_90%_/_50%_30%_70%_80%] h-20 w-20 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="webcam"
                    className="lucide lucide-webcam h-10 w-10 text-primary"
                  >
                    <circle cx={12} cy={10} r={8} />
                    <circle cx={12} cy={10} r={3} />
                    <path d="M7 22h10" />
                    <path d="M12 22v-4" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-semibold pt-4">Website Development</h1>
              <p className="text-base text-gray-600 mt-2">In todays competitive market, timing is everything. Our efficient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      {/* contact */}
      {/* contact */}
      {/* contact */}
      {/* contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div>
              <div>
                <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950 mb-6">Contact Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl/tight font-semibold mt-4">We are open to talk to good people.</h2>
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="map-pin"
                    className="lucide lucide-map-pin text-2xl text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">123 King Street, London W60 10250</h5>
                  <a href="#" className="text-xs text-primary font-bold uppercase">
                    See more
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="mail"
                    className="lucide lucide-mail text-2xl text-primary"
                  >
                    <rect width={20} height={16} x={2} y={4} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">support@zoyothemes.com</h5>
                  <a href="#" className="text-xs text-primary font-bold uppercase">
                    Say hello
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start mt-10">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="smartphone"
                    className="lucide lucide-smartphone text-2xl text-primary"
                  >
                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base text-muted font-medium mb-1">(+01) 1234 5678 00</h5>
                  <a href="#" className="text-xs text-primary font-bold uppercase">
                    call now
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:ms-24">
              <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
                <form>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="formFirstName" className="block text-sm/normal font-semibold text-black mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formFirstName"
                        placeholder="Your first name..."
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="formLastName" className="block text-sm/normal font-semibold text-black mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formLastName"
                        placeholder="Last first name..."
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="formEmail" className="block text-sm/normal font-semibold text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formEmail"
                        placeholder="Your email..."
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="formPhone" className="block text-sm/normal font-semibold text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                        id="formPhone"
                        placeholder="Type phone number..."
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mb-4">
                        <label htmlFor="formMessages" className="block text-sm/normal font-semibold text-black mb-2">
                          Messages
                        </label>
                        <textarea
                          className="block w-full text-sm rounded-md py-3 px-4 border-gray-200 focus:border-gray-300 focus:ring-transparent"
                          id="formMessages"
                          rows={4}
                          placeholder="Type messages..."
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="py-2 px-6 rounded-md text-baseitems-center justify-center border border-primary text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                    >
                      Send Messages <i className="mdi mdi-send ms-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
