import YouTube from '@/components/YouTube';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="pb-4">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">
            Aidan Ashman
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-6">
            Biography & Creative Works
          </p>
          <div className="flex justify-center -mb-16 relative z-10">
            <Image
              src="/aidan-square.png"
              alt="Aidan Ashman"
              width={150}
              height={150}
              className="rounded-full border-4 border-white dark:border-slate-700 shadow-xl"
            />
          </div>
        </header>

        {/* Biography Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8 pt-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
            About
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Welcome to my biography site. This is a place where I share my story,
              experiences, and creative works through various media formats.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Throughout my journey, I&apos;ve explored many different paths and discovered
              passions that have shaped who I am today. This site serves as a collection
              of those experiences, featuring video and audio content that tells my story
              in a more immersive way.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Feel free to explore the embedded content below to learn more about my work
              and experiences.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Music Arrangements
          </h2>
          <div id="wax-and-wane" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="m5Ozn9L6zqY" title="The Moon Doth Wax and Wane" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              The Moon Doth Wax and Wane, performed by Walt Whitman choir.  Music arranged by Aidan Ashman.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Solo Performances
          </h2>
          <div id="steady-light" className="pt-10">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-6">
              <audio
                controls
                className="w-full"
                preload="metadata"
              >
                <source src="/audio/sample.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
                The Steady Light, performed and recorded by Aidan Ashman on all vocal parts.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Talent Show Performances
          </h2>
          <div id="come-together" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="565wRqVgrto" title="Come Together" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Come Together (The Beatles), performed at Walt Whitman Talent Show with Aidan Ashman on bass guitar.
            </p>
          </div>
          <div id="mr-blue-sky" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="_iLMRj52TBI" title="Mr. Blue Sky" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Mr. Blue Sky (Electric Light Orchestra), performed at Walt Whitman Talent Show with Aidan Ashman on lead vocals.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            A Capella Performances
          </h2>
          <div id="treasure" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="oE5sfrPXtNU" title="Treasure" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Treasure (Solid in Sound), performed by Aidan Ashman on lead vocals.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Full Choir Performances
          </h2>
          <div id="dulaman" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="IKbyt4VfSLQ" title="Dulaman" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Dulaman (Walt Whitman Tenor Bass Choir)
            </p>
          </div>
          <div id="regnum-mundi" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="Vei0UE9KDyM" title="Regnum Mundi" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Regnum Mundi (ACDA National Honors Choir)
            </p>
          </div>
          <div id="umi-sono-ai" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="Actnki8cciU" title="Umi Sono Ai" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
            Umi Sono Ai (ACDA National Honors Choir)
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            ChoralPlayer Demonstration
          </h2>
          <div id="choralplayer" className="pt-10">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
              <YouTube code="zD-EhJ2mS6I" title="ChoralPlayer Demonstration" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
              Demonstration of the ChoralPlayer software, created by Aidan Ashman.
            </p>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer className="text-center text-slate-600 dark:text-slate-400 mt-12">
          <p>© {new Date().getFullYear()} Aidan Ashman. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
