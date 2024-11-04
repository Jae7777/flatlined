"use client";

import { useEffect, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import ScreenShimmer from "@/components/ScreenShimmer";
import getMembers from "@/actions/getMembers";
import { Entry, EntrySkeletonType } from "contentful";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import Image from "next/image";

const MembersPage = () => {
  
  const [members, setMembers] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getMembers();
        setMembers(data);
        console.log(data)
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return <ScreenShimmer />;
  }

  return (
    <div className="prose prose-invert max-w-[100rem] p-8 pb-24 mx-auto">
      {/* Preload tailwind colors */}
      <div className="hidden bg-fln-blue bg-fln-lilac bg-fln-orange aria-hidden"/>

      <h1 className={`text-gradient-silver w-fit text-center mx-auto mt-12`}>
        Projects
      </h1>

      {members.map((member: any, index: number) => {
        console.log(member)
        return (
          <CardContainer key={index}>
            <CardBody className="bg-fln-black relative hover:shadow-2xl p-6 h-auto border max-w-[55rem] w-full border-black/[0.1] rounded-xl">
              <CardItem className="flex gap-3">
                {member.fields.pfp &&
                  <Image
                    src={'https:' + member.fields.pfp.fields.file.url}
                    alt={member.fields.pfp.fields.title}
                    width={400}
                    height={400}
                    className="rounded-full size-32"
                  />
                }
                <div>
                  <h2 className="text-2xl font-bold">{member.fields.name}</h2>
                  <p>{member.fields.bio as string}</p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        )
      })}
    </div>
  )
};

// {
//   "metadata": {
//     "tags": [],
//     "concepts": []
//   },
//   "sys": {
//     "space": {
//       "sys": {
//         "type": "Link",
//         "linkType": "Space",
//         "id": "02wfq71mptcn"
//       }
//     },
//     "id": "4wqn9zXTprYAJObk2KyuFN",
//     "type": "Entry",
//     "createdAt": "2024-09-06T17:08:00.350Z",
//     "updatedAt": "2024-09-06T17:08:00.350Z",
//     "environment": {
//       "sys": {
//         "id": "master",
//         "type": "Link",
//         "linkType": "Environment"
//       }
//     },
//     "revision": 1,
//     "contentType": {
//       "sys": {
//         "type": "Link",
//         "linkType": "ContentType",
//         "id": "member"
//       }
//     },
//     "locale": "en-US"
//   },
//   "fields": {
//     "name": "Justin",
//     "pfp": {
//       "metadata": {
//         "tags": []
//       },
//       "sys": {
//         "space": {
//           "sys": {
//             "type": "Link",
//             "linkType": "Space",
//             "id": "02wfq71mptcn"
//           }
//         },
//         "id": "6vkoq3mTprWFBjNlLR4N5K",
//         "type": "Asset",
//         "createdAt": "2024-09-06T17:07:25.646Z",
//         "updatedAt": "2024-09-06T17:07:25.646Z",
//         "environment": {
//           "sys": {
//             "id": "master",
//             "type": "Link",
//             "linkType": "Environment"
//           }
//         },
//         "revision": 1,
//         "locale": "en-US"
//       },
//       "fields": {
//         "title": "Justin Headshot",
//         "description": "Headshot of Justin",
//         "file": {
//           "url": "//images.ctfassets.net/02wfq71mptcn/6vkoq3mTprWFBjNlLR4N5K/4d3446288b134d5a8ced48d4d0746254/Headshot_Cropped_2.png",
//           "details": {
//             "size": 500161,
//             "image": {
//               "width": 1066,
//               "height": 950
//             }
//           },
//           "fileName": "Headshot Cropped 2.png",
//           "contentType": "image/png"
//         }
//       }
//     },
//     "projects": [
//       {
//         "sys": {
//           "type": "Link",
//           "linkType": "Entry",
//           "id": "376FDw3Jb7hFL8K9tYScSt"
//         }
//       }
//     ]
//   }
// }

export default MembersPage;
