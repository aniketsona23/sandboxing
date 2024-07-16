import React from "react";

function SandboxVid() {

  return (
    <section className="sandbox-vid">
      <video  width="100%"  loop autoPlay={true} muted >
        <source src="/sandbox.mp4" type="video/mp4"/>
      </video>
    </section>
  );
}

export default SandboxVid;
