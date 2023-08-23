import Feed from "@/components/Feed";
import Image from "next/image";
import styles from "./main.css";
export default function Home() {
  const url =
    "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/354053256_1000218054685298_2097928690010881311_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7tzMqS1AI8UAX9jhLpu&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBIMPZMDBlpKuR0JTHxERHU-cGyqV3t81Ink-RGHpU4uQ&oe=64EBD6A4";
  return (
    <>
      <div className=" h-screen w-full flex flex-col justify-center items-center ">
        <Image
          src={url}
          width={100}
          height={100}
          className="h-[120px] w-[120px] rounded-full object-cover border border-teal-400 border-2 p-2 "
        />
        <h1 className="text-xl text-neutral-600 text-medium">Nhàn búa bao</h1>
        <Feed />
      </div>
    </>
  );
}
