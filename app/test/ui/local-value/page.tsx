import { LocalValue } from "@/app/ui/local-value/LocalValue";

interface Props {}

const TestLocalValue = ({}: Props) => {
  return (
    <>
      <LocalValue itemKey="testKey" />
    </>
  );
};

export default TestLocalValue;
