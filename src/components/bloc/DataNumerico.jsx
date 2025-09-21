import { useEffect, useRef, useState } from "react";
import "../../styles/bloc/datanumerico.css";

function useCountUp(target = 10000, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16))); // ~60fps
    const id = setInterval(() => {
      start += step;
      setValue((prev) => (prev + step >= target ? target : prev + step));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration]);

  return value;
}

export default function DataNumerico({numero}) {
  const value = useCountUp(numero, 3000); // target, duración (ms)

  return (
    <div className="data-numerico">
      <h2 className="contador">{value.toLocaleString()}k</h2>
      <p>Seguidores</p>
    </div>
  );
}
