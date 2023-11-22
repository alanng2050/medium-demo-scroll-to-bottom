import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const threshold = 300;
      const isReachBottom =
        document.body.scrollHeight - threshold <= scrolledTo;
      if (isReachBottom) alert("reached bottom");
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <div style={{ width: "100vw", fontSize: "72px" }}>
      <div
        style={{
          height: "500px",
          background: "red",
        }}
      >
        Box 1
      </div>

      <div
        style={{
          height: "500px",
          background: "blue",
        }}
      >
        Box 2
      </div>

      <div
        style={{
          height: "500px",
          background: "green",
        }}
      >
        Box 3
      </div>
    </div>
  );
}
