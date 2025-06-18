import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: slectt } = await supabase.from("jsoned_server").select();

  console.log((slectt[0]));
  return (
    <div>
      <pre>{JSON.stringify(slectt, null, 2)}</pre>
      <h5></h5>
    </div>
  );
}
