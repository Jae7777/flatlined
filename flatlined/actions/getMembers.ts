import contentful from '@/lib/contentful';
import { EntryFieldTypes } from 'contentful';

// export interface Member {
//   contentTypeId: "member";
//   fields: {
//       name: EntryFieldTypes.Text;
//       pfp: EntryFieldTypes.AssetLink;
//       bio: EntryFieldTypes.RichText;
//       projects: EntryFieldTypes.EntryLink[];
//   }
// }
// interface Author {
//   contentTypeId: "author",
//   fields: {
//       fullName: EntryFieldTypes.Text,
//       headshot: EntryFieldTypes.AssetLink,
//       bio: EntryFieldTypes.RichText
//   }
// }
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
