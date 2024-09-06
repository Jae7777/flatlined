import client from "@/app/lib/contentful";

const getProjects = async() => {
  const response = await client.getEntries({
    content_type: 'projectCard',
  });
  
  return response.items;
}

export default getProjects