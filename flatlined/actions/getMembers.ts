import contentful from '@/lib/contentful';

const getMembers = async () => {
  try {
    const response = await contentful.getEntries({
      content_type: 'member',
    });

    // Check if the response and items are valid
    if (response && response.items) {
      return response.items;
    } else {
      // Handle cases where response structure is not as expected
      throw new Error('Unexpected response structure from Contentful.');
    }
  } catch (error) { 
    console.error('Error fetching members from Contentful:', error);
    return [];
  }
}

export default getMembers;
