"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BlogEntry = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  // dynamically import the blog entry
  const DynamicBlog = dynamic(() => import(`../entries/${slug}`), {
    loading: () => <p>Loading...</p>,
  });
  const router = useRouter();

  return (
    <div className="text-white pt-16 pb-8 max-w-[850px] mx-auto px-6 leading-8">
      <div
        className="
          pb-6 flex text-cyber-2 items-center clickable-dark w-fit px-2
        "
        onClick={() => router.push("/blog")}
      >
        <IoIosArrowBack className="navbar-item" color="#feb080" />
        Back
      </div>
      <div className="border-[2px] px-8 py-6 shadow-xl border-null-sidebar-body rounded-lg">
        <DynamicBlog />
      </div>
    </div>
  );
};

export default BlogEntry;
