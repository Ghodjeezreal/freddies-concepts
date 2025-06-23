import Image from 'next/image'

export default function TrustedBy() {
  const logos = [
    '/logos/delta.png',
    '/logos/git.png',
    '/logos/html.png',
    '/logos/next.png',
    '/logos/react.png',
  ];

  return (
    <section className="bg-black py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
          Trusted By
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo, i) => (
            <div key={i} className="mx-auto h-16 w-full flex items-center justify-center">
              <Image
                src={logo}
                alt={`Client ${i + 1}`}
                width={120}
                height={64}
                className="object-contain h-16 grayscale opacity-70 hover:opacity-100 transition duration-300"
                style={{ width: 'auto', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
