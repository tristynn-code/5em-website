/**
 * Employee avatar. Renders the real photo when one is supplied; otherwise a
 * clean initials chip on a soft teal-tinted background, so the testimonials
 * grid looks intentional before real headshots are added. Swap by filling the
 * `photo` field in content/employee-testimonials.json.
 */
export default function Avatar({
  name,
  photo,
  size = 56,
}: {
  name: string;
  photo?: string;
  size?: number;
}) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        className="rounded-full object-cover flex-shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }

  const initials = name
    .split(' ')
    .map(w => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      aria-hidden
      className="rounded-full flex-shrink-0 flex items-center justify-center font-extrabold text-teal"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: 'rgba(0,190,157,.10)',
        border: '1px solid rgba(0,190,157,.18)',
      }}
    >
      {initials}
    </div>
  );
}
