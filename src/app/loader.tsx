"use client";
import { Comment } from "react-loader-spinner";
export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Comment
        visible={true}
        height={200}
        width={200}
        ariaLabel="Loading"
        backgroundColor="rgb(253,164,175,0.6)"
        color="#1c1917"
      />
    </div>
  );
}
