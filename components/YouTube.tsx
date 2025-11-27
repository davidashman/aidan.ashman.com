interface YouTubeProps {
  code: string;
  title: string;
  className?: string;
}

export default function YouTube({ code, title, className = "" }: YouTubeProps) {
  return (
    <div className={`aspect-video w-full rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 ${className}`}>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${code}?modestbranding=1&rel=0&showinfo=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

