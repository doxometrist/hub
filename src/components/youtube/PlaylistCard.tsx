type PlaylistCardProps = {
  name: string;
  link: string;
};

export function PlaylistCard({ name, link }: PlaylistCardProps) {
  return (
    <div>
      <h4>{name}</h4>
      <iframe
        width="560"
        height="315"
        src={link}
        title={`${name} in Youtube Video Player`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default PlaylistCard;
