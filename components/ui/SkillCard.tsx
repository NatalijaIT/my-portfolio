import Image from "next/image";

type Props = {
  name: string;
  icon: string;
};

export default function SkillCard({ name, icon }: Props) {
  return (
    <div
      className="
        relative
        w-40
        rounded-xl
        p-[2px]
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-red-500
        hover:scale-105
        transition
      "
    >
      <div className="bg-white dark:bg-black rounded-xl p-5 flex flex-col items-center gap-3 h-[-webkit-fill-available]">
        <Image src={icon} alt={name} width={60} height={60} />
        <p className="text-zinc-800 dark:text-white tracking-widest text-xs">{name}</p>
      </div>
    </div>
  );
}
