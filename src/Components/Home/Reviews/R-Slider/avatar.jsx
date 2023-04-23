import React from "react";
import "./avatar.css";

import { Avatar } from "@chakra-ui/react";

export default function AvatarSlider({ userReviews, onAvatarClick }) {
  return (
    <>
      <div
        className="avatar-div"
      >
        {userReviews.map((review, index) => (
          <div key={index}>
            <Avatar size={"md"} src={review.avatar} onClick={() => onAvatarClick(index)} />
          </div>
        ))}
      </div>
    </>
  );
}
