import React from "react";
import useRouter from "../../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();

  return (
    <div>
      root
      <button
        onClick={() => {
          push("/about");
        }}
      >
        about
      </button>
      <div>라우터 구현 중입니다.😤</div>
    </div>
  );
};

export default Root;
