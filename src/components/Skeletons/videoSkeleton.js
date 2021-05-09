import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const videoSkeleton = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme color="#202020" highlightColor="#282424">
        <Skeleton height={180} />
        <div>
          <Skeleton
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              marginTop: "0.7rem",
            }}
            circle
            height={25}
            width={25}
          />
          <Skeleton height={20} width="75%" />
          <Skeleton style={{ marginLeft: "2.6rem" }} height={20} width="65%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default videoSkeleton;
