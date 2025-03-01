import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function Home() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function fetchStreams() {
      let { data, error } = await supabase.from("streams").select("*");
      if (!error) setStreams(data);
    }
    fetchStreams();
  }, []);

  return (
    <div>
      <h1>🔥 Трендовые стримы</h1>
      {streams.map((stream) => (
        <div key={stream.id}>
          <h3>{stream.title}</h3>
          <Link href={`/stream/${stream.id}`}>Смотреть</Link>
        </div>
      ))}
    </div>
  );
}
