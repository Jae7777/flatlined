import contentful from '@/app/lib/contentful';

const getProjects = async() => {
  const response = await contentful.getEntries({
    content_type: 'project',
  });
  
  return response.items;
}

export default getProjects