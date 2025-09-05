import { createClient } from "@/utils/supabase/server";

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: slectt } = await supabase.from("jsoned_server").select();
  const players = slectt[0]?.server_stats?.["default-server"] ?? {};
  return Object.keys(players).map(playerName => ({
    playerName,
  }));
}

export default async function PlayerDetail({ params }) {
  const supabase = createClient();
  const { data: slectt } = await supabase.from("jsoned_server").select();
  const players = slectt[0]?.server_stats?.["default-server"] ?? {};
  const stats = players[params.playerName];

  if (!stats) {
    return <div>Player not found.</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start" }}>
      <div>
      <h1>{params.playerName}</h1>
      <div style={{
        background: "#333",
        color: "#fff",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)"
      }}>
        <h3 style={{paddingLeft: "2rem", paddingRight: "2rem",paddingBottom: "1rem", textShadow: "2px 5px 5px black"}}>Hide And Seek</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            rowGap: "0.5rem",
            columnGap: "2rem",
            alignItems: "center"
          }}
        >
          <li style={{ display: "contents" }}>
            <span><strong>Wins:</strong></span>
            <span>{stats.wr_wins}</span>
          </li>
          <li style={{ display: "contents" }}>
            <span><strong>Loses:</strong></span>
            <span>{stats.wr_lose}</span>
          </li>
          <li style={{ display: "contents" }}>
            <span><strong>Seeker Wins:</strong></span>
            <span>{stats.wr_seeker_wins ?? 0}</span>
          </li>
          <li style={{ display: "contents" }}>
            <span><strong>Hider Wins:</strong></span>
            <span>{stats.wr_hider_wins ?? 0}</span>
          </li>
          <li style={{ display: "contents" }}>
            <span><strong>System:</strong></span>
            <span>{stats.wr_system}%</span>
          </li>
          <li style={{ display: "contents" }}>
            <span><strong>Total Played:</strong></span>
            <span>{stats.wr_total}</span>
          </li>
        </ul>
      </div>
      </div>
      <div>
        
        <img
          src={`https://mc-heads.net/player/${(params.playerName)}`}
          alt={`${params.playerName} avatar`}
          width={120}
          height={229}
          style={{
            borderRadius: "12px",
            background: "#333",
            marginTop: "2.5rem" // Push image down to align with stats
          }}
        />
      </div>
    </div>
  );
}