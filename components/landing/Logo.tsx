import Image from "next/image";
import s from "./landing.module.css";

export default function Logo({ priority = false }: { priority?: boolean }) {
  return <Image className={s.logo} src="/brand/logo-prov.png" alt="PROV." width={80} height={54} priority={priority} />;
}
