"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BlogEntry = ({ params }: { params: { name: string } }) => {
  const name = params.name;
  // dynamically import the blog entry
  const DynamicBlog = dynamic(() => import(`../entries/${name}`), {
    loading: () => <p>Loading...</p>,
  });
  const router = useRouter();

  return (
    <div className="text-white px-[24px] pt-16 pb-8 md:px-[48px] lg:px-[72px] xl:px-[104px]">
      <div
        className="
          pb-6 flex text-cyber-2 items-center clickable-dark w-fit px-2
        "
        onClick={() => router.push("/blog")}
      >
        <IoIosArrowBack className="navbar-item" color="#feb080" />
        Back
      </div>
      <DynamicBlog />
    </div>
  );
};

export default BlogEntry;
