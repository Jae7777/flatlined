'use client'

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
      coming soon o/
    </div>
  );
};

export default BlogPage