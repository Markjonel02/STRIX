import Video from "../../img/404vid.mp4";
export const Nopage = () => {
  return (
    <>
      <div className="nopage  bg-body-dark w-100  ">
        <video
          src={Video}
          muted
          loop
          autoPlay
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </>
  );
};
