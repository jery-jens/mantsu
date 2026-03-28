"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-6 pt-12 text-center md:px-12 md:pt-20">
          <span className="font-mono text-[10px] uppercase text-slate-400">
            //&nbsp;&nbsp;SEE IT IN ACTION
          </span>
          <h2 className="mt-6 font-serif text-[28px] leading-none tracking-[-0.84px] text-slate-900 md:mt-10 md:text-[48px] md:tracking-[-1.44px]">
            Watch how <span className="text-gradient">Mantsu</span> works.
          </h2>
        </div>

        <div className="mt-10 border-t border-b border-slate-200 md:mt-16">
          <div>
            <div className="mx-auto max-w-[900px] border-x border-slate-200">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                {/* Thumbnail */}
                {!playing && (
                  <Image
                    src="/hero-image.jpg"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                )}
                {/* Replace src with your video URL */}
                <video
                  ref={videoRef}
                  className={`h-full w-full object-cover ${!playing ? "hidden" : ""}`}
                  playsInline
                  onEnded={() => setPlaying(false)}
                >
                  {/* <source src="/demo.mp4" type="video/mp4" /> */}
                </video>

                {/* Play overlay */}
                {!playing && (
                  <>
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-900/60 transition-colors hover:bg-slate-900/50"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full md:h-14 md:w-14"
                        style={{
                          background: "linear-gradient(135deg, #E8824F, #C70C5B)",
                        }}
                      >
                        <i className="ri-play-fill text-2xl text-white" />
                      </div>
                    </button>
                    <span className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white/80">
                      Watch the 2-minute demo
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="h-12 md:h-20" />
      </Wrapper>
    </div>
  );
}
