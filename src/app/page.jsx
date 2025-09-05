import { createClient } from "@/utils/supabase/server";
import PlayerStats from "@/components/playerStats/PlayerStats";
import styles from "./page.module.css";

export default async function Home() {
  const supabase = createClient();
  const { data: slectt } = await supabase.from("jsoned_server").select();

  // Assuming slectt[0] contains your JSON structure
  const players = slectt[0]?.server_stats?.["default-server"] ?? {};

  return (
    <div>
      <h1>Player Stats</h1>
      <div className={styles.grid}>
        {Object.entries(players).map(([playerName, stats]) => (
          <PlayerStats key={playerName} playerName={playerName} stats={stats} />
        ))}
      </div>
    </div>
  );
}