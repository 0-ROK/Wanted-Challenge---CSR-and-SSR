import React from "react";
import useRouter from "../../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <div>
      about 컴포넌트입니다!🤣
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};

export default About;
