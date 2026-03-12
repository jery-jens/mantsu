import ButtonGradient from "./ButtonGradient";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            First name
          </label>
          <input
            type="text"
            className="h-10 border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            Last name
          </label>
          <input
            type="text"
            className="h-10 border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          Work email
        </label>
        <input
          type="email"
          className="h-10 border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
          placeholder="jane@company.com"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Company</label>
        <input
          type="text"
          className="h-10 border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
          placeholder="Acme Manufacturing"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Message</label>
        <textarea
          rows={4}
          className="resize-none border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
          placeholder="Tell us about your production challenges..."
        />
      </div>
      <div className="mt-2 flex justify-end">
        <ButtonGradient href="#">
          Send message <i className="ri-arrow-right-line" />
        </ButtonGradient>
      </div>
    </form>
  );
}
