import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import { CampaignType } from "./mainPage";

export default function CampaignCard({ campaign }: { campaign: CampaignType }) {
  return (
    <div className="flex bg-sdColor p-2 rounded items-stretch gap-2">
      <div className="basis-5/6 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base">{campaign.title}</h2>
            <span className="text-xs">By {campaign.author}</span>
          </div>
          <span className="border-2 text-xs border-zinc-100 p-1 rounded-full">
            {campaign.tag}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Raised: {campaign.raised} ETH</span>
          <span>Target: {campaign.target} ETH</span>
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/6">
        <Button variant={"ghost"} className="h-full">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
