import { Button } from "./button";
import CampaignCard from "./campaignCard";
import PostCard from "./postCard";

export type PostType = {
  author: string;
  userImg: string;
  img?: string;
  time: string;
  description: string;
  upvotes: number;
  comments: number;
};
export type CampaignType = {
  title: string;
  author: string;
  raised: number;
  target: number;
  tag: string;
};
export default function MainPage() {
  const campaigns: CampaignType[] = [
    {
      title: "Cancer Cure",
      author: "Dr. Benjamin Smith",
      raised: 15.0,
      target: 50.0,
      tag: "Research",
    },
    {
      title: "Blood Donation",
      author: "Dr. Chelsea Ward",
      raised: 5.0,
      target: 20.0,
      tag: "Wellfare",
    },
    {
      title: "Aids Awareness",
      author: "Dr. Sydney Martin",
      raised: 2.0,
      target: 5.0,
      tag: "Welfare",
    },
  ];
  const posts: PostType[] = [
    {
      author: "Dr. John Prasad",
      userImg: "",
      img: "/images/skeleton.jpeg",
      time: "10:50 AM 20th Feb, 2024",
      description:
        "89+ yo female presented to the ER after falling and injuring her head - medical history of hypercholesterolemia and hypertension, currently taking clopidogrel as stroke prophylaxis.\n\nHow do I proceed with the right upper lobe lesion? Further workup? Outpatient?",
      upvotes: 10,
      comments: 20,
    },
    {
      author: "Dr. Smith Patel",
      userImg: "",
      img: "/images/kid.jpeg",
      time: "2:03 PM 1st March, 2024",
      description:
        "3 days prior to come, patient had undocumented fever, cough and colds. Non pruritic maculopapular to vesicular rashes appeared on 2nd day of illness started at lower extremities as verbalized by the mother. RT-PCR done for confirmation. Awaiting for the result.",
      upvotes: 10,
      comments: 20,
    },
  ];
  return (
    <main className="flex basis-3/4 p-5 relative gap-5">
      <div className="basis-3/5 flex flex-col gap-10">
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.author} post={post} />;
          })}
      </div>
      <div className="basis-2/5 flex flex-col gap-8 sticky right-0 top-0 h-screen">
        <div className="flex w-full justify-center p-5">
          <input
            placeholder="Search"
            className="p-3 text-center rounded-full w-3/4 "
          />
        </div>
        <Button className="rounded-full text-xl px-0">Start a Campaign</Button>
        <h2 className="text-center text-xl">On Going Campaigns</h2>
        <div className="w-full flex flex-col gap-2">
          {campaigns &&
            campaigns.map((campaign) => <CampaignCard campaign={campaign} />)}
        </div>
      </div>
    </main>
  );
}
