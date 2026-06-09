import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/services';

export default function Facial() {
  const data = services.facial;
  const raagaSection = data.sections[0];
  const lotusSection = data.sections[1];
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 9999999999';

  return (
    <div className="animate-fade-in font-poppins min-h-screen bg-cream">
      {/* Hero Section */}
      <section
        className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida/AP1WRLt8dhA-wfDCLqQP6GabCOhLOh75PyUlmow8yGngbvXV0nj9BV69_jpopp7p7vnHebSCOSjwifRegdyi3PkVXkoVE4Fto_Il00rTvr2rBGENuXqvarCH_C0QNN5rhHN1DH7CF7z7Q0AqKcJ8DWwHAyVyUtJqG7c1w9G5OLIW4WXvA6A3ShIeyt8gNGhg96Vm-PnAtnOaebwDu_r8tiQwWIQDw2itgyHwHU-EuU3tA-_-m8YtLqV40JGlBjY")',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/40 bg-gradient-to-b from-transparent to-cream/95 z-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#fed65b]/30 text-[#745c00] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider animate-pulse uppercase mb-4">
            Luxury Skin Transformation
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-4">
            Facial Services {data.emoji}
          </h1>
          <p className="text-white font-medium text-sm sm:text-base leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
            Glow, rejuvenate, and transform your skin with our curated selection of luxury facial treatments designed for ultimate skin health.
          </p>
        </div>
      </section>

      {/* Raaga Facials Bento Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
              Premium Selection
            </span>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mt-1">Raaga Facials</h2>
          </div>
          <p className="text-charcoal/70 max-w-md font-poppins text-sm leading-relaxed">
            Advanced dermatological solutions for specific skin concerns including anti-ageing, hyperpigmentation, acne reduction, and deep skin rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {raagaSection.items.map((item, idx) => {
            const isPopular = item.name === 'Clean Up Fruit' || item.name === 'O3+ Bridal Facial';
            return (
              <div
                key={item.name}
                className="bg-white border border-rose/15 rounded-[24px] p-6 flex flex-col justify-between shadow-sm hover-card-effect relative overflow-hidden group"
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <span className="bg-[#fed65b] text-[#745c00] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-poppins">
                      Popular
                    </span>
                  </div>
                )}
                <div>
                  <div className="mb-4 text-3xl">
                    {idx % 3 === 0 ? '💆‍♀️' : idx % 3 === 1 ? '✨' : '🌸'}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-charcoal/70 text-sm font-poppins mb-6">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center border-t border-rose/10 pt-4 mt-auto">
                  <span className="font-playfair text-xl font-bold text-gold">{item.price}</span>
                  <Link
                    href={`/booking?category=Facial&service=${encodeURIComponent(item.name)}`}
                    className="text-mauve font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1 min-h-[48px]"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lotus Facials Section */}
      <section className="bg-rose/10 py-20 border-y border-rose/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Col */}
            <div className="relative">
              <div className="aspect-[4/5] max-h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-rose/20">
                <img
                  alt="Spa Treatment"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLucXPlRcXHoazMPrOL3c1WfjqVDSDAsOw9nLf6-Zc55CsRJm2ODTl5ZkoUJUvuuzqILyvMM2bTN77tFm76aYpCEZVBpusswC_SW2YJdcCBZCoQuohtmYhORJTN4borieHDfbkPuvLZwJY7qkh2q8ShA1G9QrycO1tM0uZ42lb0lyhqfCLwQNqmGWWXQ_qUfGBskKgVZDuuf1nT1w3dEUM9QaRda9ndnxEwzM_inXjseSv5PNRL0zMoI4w"
                />
                <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none rounded-[32px]" />
              </div>
            </div>

            {/* List Col */}
            <div className="space-y-8">
              <div>
                <span className="text-mauve font-poppins text-xs font-semibold uppercase tracking-widest">
                  Botanical Luxury
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                  Lotus Facials
                </h2>
              </div>

              <div className="space-y-4">
                {lotusSection.items.map((item) => {
                  const isCallPrice = item.price.toLowerCase().includes('call');
                  return (
                    <div
                      key={item.name}
                      className="flex justify-between items-center border-b border-rose/15 pb-4 group hover:border-gold transition-colors"
                    >
                      <span className="font-poppins text-charcoal/80 group-hover:text-charcoal font-medium">
                        {item.name}
                      </span>
                      {isCallPrice ? (
                        <a
                          href={`tel:${phone}`}
                          className="font-poppins text-xs font-semibold text-mauve border border-mauve px-3 py-1.5 rounded-full hover:bg-mauve hover:text-white transition-colors"
                        >
                          Call to Inquire
                        </a>
                      ) : (
                        <Link
                          href={`/booking?category=Facial&service=${encodeURIComponent(item.name)}`}
                          className="font-playfair text-lg font-bold text-gold hover:text-mauve transition-colors"
                        >
                          {item.price}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Link
                  href="/booking?category=Facial"
                  className="bg-mauve text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-mauve/95 transition-all shadow-lg hover:scale-105 inline-block"
                >
                  Book a Lotus Facial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Visual Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Organic skincare ingredients"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLu5nPmzM1giX4NrBlfVb6OcZdNtvem7HYQbbsvlYP1fq4qhf5TVVthC1vBWgUvu4KjNNFwIIsbPG_gEYd4wiM4DiRk2q8wUw_d0ZD9-M6TzQUn-CzSuFTHLL8b2jAT7N5klndKnayaaCCT6Y3ILqdD-G2aUoU1RQnCjn80Dn0bdtaEqKGtV2Sei2sAI6tX-kL-8npsElodvS7Cb9Dwa58aNt3olL4jOJg2y9wyf0ldesNOfnvJoAQ4Sg1Q"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Gold mask application"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtJRqPaFqxmv1ExvzKaMnOjPYeLy4seAJLduo4KO4u0YE789JQq3nm7cCgYZ-UFPkztSwFVqs-rDgr4BII2t5JGvRRRHR_CUz_U0RtnTXANWAjlMSIm5hkEcs7sG8ygVCHG09XWmplXr2QcMSPgv5eYwNX7TMwwK71WjXl84uorA-N4tM3Ski2LFJkGt3rL1u1WgVkGyxiCFdGuZRoD2BuKu357aoUeX6QFpKz4Yhx3ItnoeLG5mRVdzQ"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Facial treatment bed"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvw9mIxVdxZMcp_ACmBxvh_zxtf5m6wDJjVLDO7kJRVmD8o6mWQCEanBIa3H4JUrfN5syQ5mHFbEsPf8zqJ-aF5G9KUIBat7a2NzhQYYzcKCEhx-neFazIBkEYHBWZP16EWqKA7oAcEnhvw57INdvHwDIR0LF5MEsZnZhTGQ8JoXnqPcsSt0GrmQMG3ShjJ499ZdjQvWfvn-o_x9T7MC7y2DxMEi_MYGJBcezIUFOatS37nKS4qbjlM3QE"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-square border border-rose/10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                alt="Water droplets on lotus"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLt0tlZueWveX-WZk5Fkf0WWiv7v4rhiAv5VF_2oMp7UY6gRuZg01M6dv3H7mlbhlMIYvUmfad1xpWqHzscMNBFdzwAG1WH6ZetvyXyRu-YOnxeLlnin96G6FBPab_qFAmeU_RPyerwcCGrJ_o9aZYm-o0lcUjbcJur5-HxOm0iK_rkzQDgzKUITYK23SFSgZLeiq0sBqxX5vucIz0uObp7o9es97eXIH8IaYCYr8J1-u7yWWCx2VNtSwrI"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
