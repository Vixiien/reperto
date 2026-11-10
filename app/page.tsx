import Image from "next/image";
import repertoLogo from "../images/Reperto.png";
import musicaddLogo from "../images/Data_Input.png";
import musicfolder from "../images/songs-folder.png";
import infoLogo from "../images/Info.png";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50 font-sans dark:bg-white">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[200px] flex-col bg-[#103b70] text-white md:flex">
        <div className="flex flex-col items-center px-3 pt-5">
          <Image className="h-30 w-[120px]"
            src={repertoLogo}
            alt="Reperto logo "
          />
          <div className="mt-2 text-xl font-extrabold tracking-wide mr-7"></div>
        </div>

        <nav className="mt-10 space-y-3 px-2">
          <a href="#" className="flex items-center gap-4  rounded-lg px-3 py-3 text-sm hover:bg-white/10">
            <Image className="h-10 w-10" src={musicaddLogo} alt="MusicAdd logo" />
            Data Input
          </a>

          <a href="#" className="flex items-center gap-4 rounded-lg px-3 py-3 text-sm hover:bg-white/10">
            <Image className="h-10 w-10" src={musicfolder} alt="My Reports logo" />
            My Reports
          </a>
        </nav>

        <div className="mt-auto px-3 pb-20 text-center text-[12px] italic leading-5 text-blue-100/90">
          I Value Music
        </div>
      </aside>


      {/* Main Content */}
      <main className="ml-0 flex min-w-0 flex-1 flex-col bg-gray-50 md:ml-[200px]">

        {/* Header */}
        <header className="flex min-h-[86px] w-full shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:px-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#102f62]">
              Reperto
            </h1>
            <p className="hidden text-xs text-slate-600 sm:block">
              Convert your setlist report into an organized report.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300">
              👤
            </span>
            <span className="hidden sm:inline">Vic D. Ocasla</span>
            <span>⌄</span>
          </div>
        </header>

        {/* Form Container */}
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* Form Header */}
             <div className="inline-flex flex-col items-start gap-1 rounded-br-2xl rounded-tl-xl bg-[#123e78] px-4 py-2">
                <h2 className="text-1xl text-white italic flex items-center gap-4">
                  <Image src={infoLogo} alt="info logo" className="inline h-5 w-5" />
                  Concert Information
                </h2>
              </div>

            {/* Form Fields */}
            <div className="grid gap-5 p-5 sm:grid-cols-2 xl:grid-cols-4">
              <Field label="Concert / Event Title" required>
                <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2.5 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  
                  <input
                    type="text"
                    placeholder="e.g. The Ultimate Music Fest"
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}

// Helper Functions
function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="inline-flex min-w-[190px] items-center gap-2 rounded-br-2xl rounded-tl-xl bg-[#123e78] px-4 py-2 text-sm font-bold text-white">
      {icon}
      {title}
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1 block text-sm font-semibold text-[#102f62]">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}