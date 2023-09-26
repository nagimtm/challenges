import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lightsOn, lightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions lightsOff={lightsOff} lightsOn={lightsOn} />
    </>
  );
}
