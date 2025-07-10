type CardProps = {
  title: string;
};

export default function Card({ title }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  );
}