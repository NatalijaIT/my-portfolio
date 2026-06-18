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
        w-28
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
      <div className="bg-white dark:bg-black rounded-xl p-3 flex flex-col items-center gap-2 h-[-webkit-fill-available]">
        <Image src={icon} alt={name} width={36} height={36} />
        <p className="text-zinc-800 dark:text-white tracking-widest text-xs">{name}</p>
      </div>
    </div>
  );
}
