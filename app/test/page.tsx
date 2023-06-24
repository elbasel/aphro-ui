import Link from "next/link";
import paths from "./paths";

const TestPage = () => {
  return (
    <ul>
      {paths.map((p) => (
        <li key={p}>
          <Link href={p}>{p}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TestPage;
