export default function Aula() {
  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">📚 Video Aula</h1>

      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden border">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
