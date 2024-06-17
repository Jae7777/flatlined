'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogButton = ({
  title,
  date,
  redirect,
}: {
  title: string;
  date: string;
  redirect: () => void;
}) => {
  return (
    <div
      className="
        flex items-center justify-between w-full py-2 px-3 border-[2px] 
        border-cyber-5 rounded-md shadow-lg clickable-dark
      "
      onClick={redirect}
    >
      <p className="text-lg">{title}</p>
      <p className="text-sm text-neutral-400">{date}</p>
    </div>
  );
};

const BlogPage = () => {
  const router = useRouter();
  return (
    <div className="text-white px-6 pt-16 pb-8 max-w-[1000px] mx-auto">
      <div className="responsive-screen-md">
        <div className="relative w-full h-full">
          <Image
            src="/bar.jpg"
            alt="picture of a Cyberpunk Bar"
            fill
            className='object-cover'
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
      <div className="pt-6 space-y-3">
        <BlogButton
          title="Time, loop, and me"
          date="17 June 2024"
          redirect={() => router.push("/blog/time-loop-and-me")}
        />
        <BlogButton
          title="My Father"
          date="09 May 2024"
          redirect={() => router.push("/blog/my-father")}
        />
        <BlogButton
          title="New Territory"
          date="29 April 2024"
          redirect={() => router.push("/blog/new-territory")}
        />
        <BlogButton
          title="Thoughts That Matter"
          date="06 March 2024"
          redirect={() => router.push("/blog/thoughts-that-matter")}
        />
      </div>
    </div>
  );
};

export default BlogPage