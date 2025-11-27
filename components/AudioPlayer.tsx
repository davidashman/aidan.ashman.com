interface AudioPlayerProps {
  src: string | string[];
  className?: string;
}

export default function AudioPlayer({ src, className = "" }: AudioPlayerProps) {
  const sources = Array.isArray(src) ? src : [src];
  
  return (
    <div className={`bg-slate-100 dark:bg-slate-700 rounded-lg p-6 ${className}`}>
      <audio controls className="w-full" preload="metadata">
        {sources.map((source, index) => {
          const type = source.endsWith('.mp3') 
            ? 'audio/mpeg' 
            : source.endsWith('.ogg') 
            ? 'audio/ogg' 
            : 'audio/mpeg';
          return <source key={index} src={source} type={type} />;
        })}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

