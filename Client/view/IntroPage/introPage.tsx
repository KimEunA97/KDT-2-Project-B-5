import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function introPage() {
  /*   const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/first");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
 */
  return (
    <>
      <div>
        <img src={"./introLogo.png"} width="80%" alt="시작로고" />
      </div>
    </>
  );
}

export default introPage;
